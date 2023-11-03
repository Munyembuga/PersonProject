import { View, Text, Touchable, TouchableOpacity,ActivityIndicator } from 'react-native'
import React,{useState} from 'react'
import { MaterialIcons,Ionicons } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import Field from './Field'
import Btn from './Btn'
import { Darkgreen } from './Constant'
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import {setItemAsync} from 'expo-secure-store';
import { useDispatch } from "react-redux";
import * as SecureStore from 'expo-secure-store';
import axios from "axios";
import {setAuthoProfile,
  setAuthStatus,
  setAuthToken
 } from "./Autho/Slice";


const Login = (props) => {
    const navigation=useNavigation();
    const dispatch = useDispatch();
    const [isLoading,setIsLoading] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
   
    
     
    
    const handleEmailChange = (text) => {
      setEmail(text);
      // Email validation
      if (!isValidEmail(text)) {
        setEmailError('Invalid email address');
      } else {
        setEmailError('');
      }
    };
    
    const handlePasswordChange = (text) => {
      setPassword(text);
      // Password validation
      if (text.length === null) {
        setPasswordError('Password must be at least 6 characters long');
      } 
     else if (text.length < 6) {
        setPasswordError('Password must be at least 6 characters long');
      } 
      else {
        setPasswordError('');
      }
    };
    
    
    const isValidEmail = (email) => {
      // Regular expression for email validation
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleLogin = async () => {
      axios({
        method: "POST",
        url: ` https://grocery-9znl.onrender.com/api/v1/auth/login`,
        data: {
          email,
          password,
        },
      })
        .then((response) =>  {
          
          dispatch(setAuthoProfile(response.data.user));
          // console.log(response.data.user,"auto profileendjj")
          // console.log(authProfile,'jdkskkds')
          dispatch(setAuthToken(response.data.access_token))
          dispatch(setAuthStatus(true));
          SecureStore.setItemAsync("authToken",response.data.access_token)
          SecureStore.setItemAsync("authProfile",JSON.stringify( response.data.user))
          setIsLoading(false)
          console.log(response.data);
          
          alert(response.data.message);
        })
        .catch((error) => {
          console.log(error,'Error to login');
          setIsLoading(false)
          alert(error.response.data.message);
        });
    };

  return (
    <View 
    style={{
        alignItems:'center',
        backgroundColor:'white',
        
    }}>
      <Text 
      style={{
          fontSize:30,
          fontWeight:'bold',
          color:'black',
          marginTop:80,
         
      }}
      >Welcome Back</Text>
      
      <Text style={{
        fontSize:19,
        marginTop:18,
        
        color:'gray',
        fontWeight:'300'
        }}>
          Login to your account! </Text>
          <View style={{
              flexDirection:'row',
              borderBottomWidth:2,
              borderBottomColor:'#006A42'
          }}>
          <Field Iconname="email"
           placeholder="Email"
           keyboardType={'email-address'}
           onChangeText={handleEmailChange}
           value={email}
           />
          <MaterialIcons name="email" size={24} color="#006A42"  style={{
              justifyContent:'flex-end',
              marginTop:40
          }}/>
          </View>
          {emailError ? <Text style={{ color: 'red',
          marginLeft:-200
         }}>{emailError}</Text> : null}
          <View style={{
              flexDirection:'row',
              borderBottomWidth:2,
              borderBottomColor:'#006A42'
          }}>
          <Field placeholder="Password " 
          secureTextEntry={!showPassword}
          onChangeText={handlePasswordChange}
          value={password}
          />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={{ justifyContent: 'flex-end', marginTop: 30, marginLeft: -30 }}
        >
          {showPassword ? (
            <Entypo name="eye" size={24} color="#006A42"   style={{
              justifyContent:'flex-end',
              marginLeft:26
              // marginTop:30
          }} />
          ) : (
            <Entypo name="eye-with-line" size={24} color="#006A42" 
            style={{
              justifyContent:'flex-end',
              marginLeft:26
              // marginTop:30
          }}
            />
          )}
        </TouchableOpacity>
          </View>
          {passwordError ? <Text style={{ color: 'red',
          marginLeft:-60
         }}>{passwordError}</Text> : null}
          <View style={{
              alignItems:'flex-end',
              paddingRight:16,
              width:'78%',
              marginBottom:100
          }}>
              <Text style={{
                  color:'#006A42',
                  fontWeight:'bold',
                  fontSize:17,
                  marginTop:10

              }}>
                  Forget Password
              </Text>
          </View>

          <TouchableOpacity
      // {/* <Btn
      //   Textcolor={"white"}
      //   bgcolor={Darkgreen}
      //   {isLoading ?(hh):(btnlabel="Sign Up")}/>
      //   */}

        onPress={() => {
          if (!emailError && !passwordError) {
            // Perform sign-up logic here
            // console.log('Email:', email);
            // console.log('Password:', password);
            // console.log('Confirm Password:', confirmPassword);
            setIsLoading(true);
            handleLogin();
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
          }}>Login
 
      </Text>)}
           
      </TouchableOpacity>



          {/* <TouchableOpacity 
          //  onPress={handleLogin}
           >
          <Btn Textcolor={'white'} 
          bgcolor={Darkgreen} 
          btnlabel={'Login'}
          Press={() => {
            if (!emailError && !passwordError ) {
              // Perform sign-up logic here
            //   alert('Login Successfully ');
            {handleLogin}
              
            } else {
              alert('Please fix the validation errors');
            }
          }}
          /></TouchableOpacity> */}
          <View style={{
              display:'flex',
              justifyContent:'center',
              flexDirection:'row',
              marginTop:10,
          }}>
              <Text style={{
                  fontSize:16,
                  color:'gray',
                 
              }}> Don't have Account</Text>
              <TouchableOpacity
              onPress={()=> props.navigation.navigate("SignUp")}
              >
                  <Text 
                  style={{
                      fontSize:20,
                      fontWeight:'bold',
                      color:Darkgreen,
                      marginTop:-4,
                      marginLeft:10,

                  }}> SignUp</Text>
              </TouchableOpacity>
          </View>
          <Text style={{
              color:'#006A42',
              marginVertical:10,
          }}> Or</Text>
          <TouchableOpacity>
          <View style={{
              flexDirection:'row'
          }}>
          <FontAwesome name="apple" size={26} color="gray" style={{
              fontWeight:'bold'
          }} />
          <Text  style={{
              marginLeft:10,
              marginBottom:15,
              fontSize:20,
              color:'gray',
              fontWeight:'bold',
            //   marginTop:5
          }} 
          >Continue with Apple</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
         <View style={{
              flexDirection:'row'
          }}>
         <Ionicons name="ios-logo-google"
          size={24} color="gray"
          style={{
            fontWeight:'bold'
        }}
           />
         <Text
          style={{
            marginLeft:10,
            marginBottom:15,
            fontSize:20,
              color:'gray',
              fontWeight:'bold',
        }} 
         >Continue with Google</Text>
         </View>
         </TouchableOpacity>
    </View>
  )
}

export default Login