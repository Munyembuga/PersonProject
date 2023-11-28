import { View, Text,StyleSheet,Image,ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useIsFocused } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Homescreen from '../Ancountscreen'
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthoProfile,setAuthToken,setAuthStatus
 } from '../Autho/Slice';
 import * as SecureStore from 'expo-secure-store';
//  import { setAuthoProfile } from '../Autho/Slice';
 
 import { deleteItemAsync } from 'expo-secure-store';
import { store } from '../Autho/configueStore';

const Profile = () => {
  const isFocused = useIsFocused()
  const [user,setUser] = useState(null)
  const dispatch=useDispatch();
  const navigation= useNavigation();

  const fetchData = async ()=>{
    try{
      const authToken= await SecureStore.getItemAsync("authToken")
      const authProfile = await SecureStore.getItemAsync("authProfile")
      // console.log(authProfile1)
      // console.log(authToken1)
      // const dis = dispatch(setAuthoProfile(true));

      if (authToken && authProfile) {
       
        setUser({
          authToken: authToken,
          authProfile: JSON.parse(authProfile),
          
         
         
        });
        
      }
      console.log(user.authProfile.email,"ggg")
      // console.log(user.authProfile, "ggg"); // This will log the correct email

    }
      catch (error) {
        console.log(error, 'Error fetching credentials from secure store');
      }
    }
 

  
  useEffect(()=>{
    console.log("Fetching data...");
    fetchData()
  },[isFocused])

    
  // const selector=useSelector((state) => state.auth.authProfile)
  // console.log(selector,"Credintial")
console.log(user,'error emailg')


  const handleLogout =()=>{
    deleteItemAsync('authProfile'),
    deleteItemAsync("authToken"),
    dispatch(setAuthToken(null));
    dispatch(setAuthoProfile(null));
    dispatch(setAuthStatus(false));

  }

  return (
    <View>
      <View>
        <Text style={{
          marginLeft:20,
          fontSize:18,
          fontWeight:'500',
        }}>My Account</Text>
      </View>
      <View style={styles.Imagecontainer}>
        <Image source={require('../../assets/Profileimage.jpg')} style={{
          width:100,
          height:100,
          borderRadius:50,
          
       
        }}/>
        <Text style={{
          fontSize:20,
          color:'black',
          fontWeight:'500'

        }}>
          {/* Jonathan Doe */}
          {user?.authProfile.fullName}
        </Text>
        <Text style={{
          fontSize:15,
          color:'gray',
          fontWeight:'500',
          marginTop:3

        }} 
        >
          {/* jonathandoe@gmail.com */}
          {/* {selector.email} */}
          {user?.authProfile.email}
        </Text>
        <TouchableOpacity  onPress={()=>navigation.navigate("EditProfile")}>
        <View style={styles.editcontainer}>
         <MaterialCommunityIcons name="account-edit" size={24} color="white" style={{
           marginTop:-2
         }}/>
          <Text style={{
            color:'white',
            marginLeft:10
          }}>Edit Profile</Text>
        </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate("EditProfile")}>
      <View style={{
        marginTop:40,
      }} >
        <Text style={{
          marginLeft:20,
          color:'black',
          fontSize:17,
          fontWeight:'500',
         
        }}>Profile Settings</Text>
       
        <View style={{
          flexDirection:'row',
          justifyContent:'space-between',
          marginHorizontal:20,
          color:'gray'
        }}>
        <Text>Change Your Basic Profile</Text>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="#00be5e" />
        </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate("Promos")}>
      <View style={{
        marginTop:10,
      }}>
        <Text style={{
          marginLeft:20,
          color:'black',
          fontSize:17,
          fontWeight:'500',
          
        }}>Promos</Text>
       
        <View style={{
          flexDirection:'row',
          justifyContent:'space-between',
          marginHorizontal:20,
          color:'b5b5b5'
        }}>
        <Text>Last Promo from us</Text>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="#00be5e" />
        </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("Myaddress")}>
      <View style={{
        marginTop:10,
      }}>
        <Text style={{
          marginLeft:20,
          color:'black',
          fontSize:17,
          fontWeight:'500',
          
        }}>My address</Text>
       
        <View style={{
          flexDirection:'row',
          justifyContent:'space-between',
          marginHorizontal:20,
          color:'b5b5b5'
        }}>
        <Text>Your Profile</Text>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="#00be5e" />
        </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={{
        marginTop:10,
      }}>
        <Text style={{
          marginLeft:20,
          color:'black',
          fontSize:17,
          fontWeight:'500',
          
        }}>Terms,Privacy & Policy</Text>
       
        <View style={{
          flexDirection:'row',
          justifyContent:'space-between',
          marginHorizontal:20,
          color:'b5b5b5'
        }}>
        <Text>Think you may want know</Text>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="#00be5e" />
        </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={{
        marginTop:10,
      }}>
        <Text style={{
          marginLeft:20,
          color:'black',
          fontSize:17,
          fontWeight:'500',
          
        }}>Helps & Support </Text>
       
        <View style={{
          flexDirection:'row',
          justifyContent:'space-between',
          marginHorizontal:20,
          color:'gray'
        }}>
        <Text>Get support from us</Text>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="#00be5e" />
        </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogout}>
      <View>
        <Text style={{
          marginLeft:140,
          fontSize:25,
          color:'#00be5e',
          fontWeight:'400'
        }}>Logout</Text>
      </View>
      </TouchableOpacity>
      {/* <Homescreen/> */}
    </View>
  )
}

const styles = StyleSheet.create({
  Imagecontainer:{
 
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    marginTop:5
   
  },
  editcontainer:{
    flexDirection:'row',
    width:150,
    backgroundColor:'#00be5e',
    color:'white',
    textAlign:'center',
    paddingLeft:26,
    borderRadius:5,
    height:30,
    paddingTop:5,
    marginTop:15
  }
})

export default Profile