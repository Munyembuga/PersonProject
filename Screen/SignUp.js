import { View, Text, Touchable, TouchableOpacity,ActivityIndicator,ScrollView } from "react-native";
import axios from "axios";
import Field from "./Field";
import Btn from "./Btn";
import {
  MaterialIcons,
  Ionicons,
  Entypo,
  FontAwesome,
} from "@expo/vector-icons";
import * as SecureStore from 'expo-secure-store';
import { Darkgreen } from "./Constant";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {setItemAsync} from 'expo-secure-store';
import { useDispatch } from "react-redux";
import { setAuthoProfile,
  setAuthStatus,
  setAuthToken
 } from "./Autho/Slice";


const Signup = (props) => {
  const dispatch =useDispatch();
  const [isLoading,setIsLoading] = useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [fullNameerror, setFullNameerror] = useState("");
  const [phoneerror, setPhoneerror] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigation = useNavigation();

  const handleEmailChange = (text) => {
    setEmail(text);
    // Email validation
    if (!text) {
      setEmailError("Email address is required");
    } else if (!isValidEmail(text)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };
  const handleFullName = (text) => {
    setFullName(text);
    // Password validation
    if(text.length == 0){
      setFullNameerror("Full Name is requred")
    }
    else if (text.length < 3) {
      setFullNameerror("Full namedd must be at least 3 characters long");
    } else {
      setFullNameerror("");
    }
  };

  const handlePhone = (text) => {
    setPhone(text);
    // Password validation
    if(text.length == 0){
      setPhoneerror("Phone number is requred")
    }
    else if (text.length < 10) {
      setPhoneerror("Phone  must be at least 10 number long");
    } else {
      setPhoneerror("");
    }
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    // Password validation
    if (text.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
    // Confirm password validation
    if (text !== password) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  };

  const isValidEmail = (email) => {
    // Regular expression for email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleRegister = async () => {
    axios({
      method: "POST",
      url: ` https://grocery-9znl.onrender.com/api/v1/auth/signup`,
      data: {
        email,
        password,
        fullName,
        phone,
        "location": "Kicukiro",
        "dateOfBirth": "1/1/2023"

      },
    })
      .then((response) =>  {
        SecureStore.setItemAsync("authToken",response.data.access_token)
        SecureStore.setItemAsync("authProfile",JSON.stringify( response.data.user))
        dispatch(setAuthoProfile(response.data.user));
        dispatch(setAuthToken(response.data.access_token))
        dispatch(setAuthStatus(true));
        // setItemAsync("authToken",response.data.access_token)
        // setItemAsync("authProfile",JSON.stringify( response.data.user))
        setIsLoading(false)
        console.log(response.data);
        
        alert(response.data.message);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false)
        alert(error.response.data.message);
      });
  };
  return (
    <ScrollView>

    <View
      style={{
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          color: "black",
          marginTop: 10,
        }}
      >
        Get start up
      </Text>

      <Text
        style={{
          fontSize: 19,
          marginTop: 18,

          color: "gray",
          fontWeight: "300",
        }}
      >
        Create to your account!{" "}
      </Text>
      <View
        style={{
          flexDirection: "row",
          borderBottomWidth:2,
          borderBottomColor:'#006A42'
        }}
      >
        <Field
          placeholder="Email"
          keyboardType={"email-address"}
          onChangeText={handleEmailChange}
          value={email}
        />
        <MaterialIcons
          name="email"
          size={24}
          color="#006A42"
          style={{
            justifyContent: "flex-end",
            marginTop: 30,
          }}
        />
      </View>
      {emailError ? (
        <Text style={{ color: "red", marginLeft: -200 }}>{emailError}</Text>
      ) : null}

<View
        style={{
          flexDirection: "row",
          borderBottomWidth:2,
          borderBottomColor:'#006A42'
        }}
      >
        <Field
          placeholder="Full name"
         
          onChangeText={handleFullName}
          value={fullName}
        />
        {/* <Ionicons name="person" size={24} color="black" /> */}
        <Ionicons
          name="person"
          size={24}
          color="#006A42"
          style={{
            justifyContent: "flex-end",
            marginTop: 30,
          }}
        />
      </View>
      {fullNameerror ? (
        <Text style={{ color: "red", marginLeft: -50 }}>{fullNameerror}</Text>
      ) : null}

<View
        style={{
          flexDirection: "row",
          borderBottomWidth:2,
          borderBottomColor:'#006A42'
        }}
      >
        <Field
          placeholder="Phone number"
          keyboardType='phone-pad'
          onChangeText={handlePhone}
          value={phone}
        />
        {/* <FontAwesome name="phone" size={24} color="black" /> */}
        <FontAwesome
          name="phone"
          size={24}
          color="#006A42"
          style={{
            justifyContent: "flex-end",
            marginTop: 30,
          }}
        />
      </View>
      {phoneerror ? (
        <Text style={{ color: "red", marginLeft: -90 }}>{phoneerror}</Text>
      ) : null}


      {/* <Text>g</Text> */}
      <View
        style={{
          flexDirection: "row",
          borderBottomWidth:2,
          borderBottomColor:'#006A42'
        }}
      >
        <Field
          placeholder="Password "
          secureTextEntry={!showPassword}
          onChangeText={handlePasswordChange}
          value={password}
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={{ justifyContent: "flex-end", marginTop: 30, marginLeft: -30 }}
        >
          {showPassword ? (
            <Entypo
              name="eye"
              size={24}
              color="#006A42"
              style={{
                justifyContent: "flex-end",
                marginLeft: 26,
                // marginTop:30
              }}
            />
          ) : (
            <Entypo
              name="eye-with-line"
              size={24}
              color="#006A42"
              style={{
                justifyContent: "flex-end",
                marginLeft: 26,
                // marginTop:30
              }}
            />
          )}
        </TouchableOpacity>
      </View>
      {passwordError ? (
        <Text style={{ color: "red", marginLeft: -60 }}>{passwordError}</Text>
      ) : null}
      {/* <Text>g</Text> */}
      <View
        style={{
          flexDirection: "row",
          borderBottomWidth:2,
          borderBottomColor:'#006A42'
        }}
      >
        <Field
          placeholder="Confirm password "
          secureTextEntry={!showConfirmPassword}
          onChangeText={handleConfirmPasswordChange}
          value={confirmPassword}
        />
        <TouchableOpacity
          onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          style={{ justifyContent: "flex-end", marginTop: 30, marginLeft: -30 }}
        >
          {showConfirmPassword ? (
            <Entypo
              name="eye"
              size={24}
              color="#006A42"
              style={{
                justifyContent: "flex-end",
                marginLeft: 26,
                // marginTop:30
              }}
            />
          ) : (
            <Entypo
              name="eye-with-line"
              size={24}
              color="#006A42"
              style={{
                justifyContent: "flex-end",
                marginLeft: 26,
                // marginTop:30
              }}
            />
          )}
        </TouchableOpacity>

        {/* <Entypo name="eye-with-line" size={24} color="#006A42" 
          style={{
            justifyContent:'flex-end',
            marginTop:30
        }}/> */}
      </View>

      {confirmPasswordError ? (
        <Text style={{ color: "red", marginLeft: -180 }}>
          {confirmPasswordError}
        </Text>
      ) : null}
      {/* <Text>g</Text> */}

      <View
        style={{
          width: "90%",
          flexDirection: "row",
          display: "flex",
          marginTop: 30,

          marginVertical: 5,
        }}
      >
        <Text
          style={{
            color: "gray",
            fontWeight: "bold",
            fontSize: 15,
          }}
        >
          By signing in , your agree to our{" "}
        </Text>
        <Text
          style={{
            color: "#006A42",
            fontWeight: "bold",
            fontSize: 15,
          }}
        >
          Term & Condition
        </Text>
      </View>
      <View
        style={{
          width: "90%",
          flexDirection: "row",
          display: "flex",

          marginBottom: 25,
          marginVertical: 5,
        }}
      >
        <Text
          style={{
            color: "gray",
            fontWeight: "bold",
            fontSize: 15,
          }}
        >
          and{" "}
        </Text>
        <Text
          style={{
            color: "#006A42",
            fontWeight: "bold",
            fontSize: 15,
          }}
        >
          Privacy Policy
        </Text>
      </View>
      <TouchableOpacity
      // {/* <Btn
      //   Textcolor={"white"}
      //   bgcolor={Darkgreen}
      //   {isLoading ?(hh):(btnlabel="Sign Up")}/>
      //   */}

        onPress={() => {
          if (!emailError && !passwordError && !confirmPasswordError && !phoneerror && !fullNameerror) {
            // Perform sign-up logic here
            // console.log('Email:', email);
            // console.log('Password:', password);
            // console.log('Confirm Password:', confirmPassword);
            setIsLoading(true)
            handleRegister();
            // navigation.navigate("Login");
          } else {
            alert("Please fix the validation errors");
          }
        }}
        style={{
          backgroundColor:'#00be5e',
         width:350,
         padding:10,
         alignItems:'center',
         marginVertical:10,
  
         borderRadius:20
  
      }}
      >
        {isLoading ?
        (<ActivityIndicator color={'#fff'} size={22} />):
        (<Text style={{
          color:'white',
          fontSize:22,
          fontWeight:'bold',
          }}>SignUp
 
      </Text>)}
           
      </TouchableOpacity>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: "gray",
          }}
        >
          {" "}
          Already Have Account
        </Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#006A42",
              marginLeft: 10,
              marginTop: -2,
            }}
          >
            {" "}
            Login
          </Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          color: "#006A42",
          marginVertical: 10,
        }}
      >
        {" "}
        Or
      </Text>
      <TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <FontAwesome
            name="apple"
            size={26}
            color="gray"
            style={{
              fontWeight: "bold",
            }}
          />
          <Text
            style={{
              marginLeft: 10,
              marginBottom: 15,
              fontSize: 20,
              color: "gray",
              fontWeight: "bold",
              //   marginTop:5
            }}
          >
            Continue with Apple
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Ionicons
            name="ios-logo-google"
            size={24}
            color="gray"
            style={{
              fontWeight: "bold",
            }}
          />
          <Text
            style={{
              marginLeft: 10,
              marginBottom: 15,
              fontSize: 20,
              color: "gray",
              fontWeight: "bold",
            }}
          >
            Continue with Google
          </Text>
        </View>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Signup;
