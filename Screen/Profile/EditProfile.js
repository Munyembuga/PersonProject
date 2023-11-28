import { View, Text,StyleSheet,Image,ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { Entypo } from '@expo/vector-icons';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
// import ShareExample from '../Date'
import  axios  from 'axios';
import * as ImagePicker from 'expo-image-picker';
// import * as ImagePicker from 'react-native-image-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { setAuthoProfile } from '../Autho/Slice';
import { setItemAsync } from 'expo-secure-store';

import * as SecureStore from 'expo-secure-store';
const EditProfile = () => {
    const dispatch=useDispatch()
    const navigation=useNavigation()
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [location, setLocation] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [image, setImage] = useState(null);
   const[isLoading,setIsLoading] =useState(false)
    const { authToken } = useSelector((state) => state.auth);
    const formData = new FormData();

    const handleNavigateProfile = () =>{
        setTimeout(()=>{
            navigation.navigate("Profile")
        },7000)
    }

  console.log(isLoading)
  
    const pickImage = async () => {

       
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
        if (status === "granted") {
          const response = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
          });
          if (!response.canceled) {
            setImage(response.assets[0].uri);
          }
        }
    
    };
  
    
  
    const updateProfile = async () => {
        
        // setIsLoading(true)
      formData.append('email', email);
      formData.append('fullName', fullName);
      formData.append('phone', phone);
      formData.append('location', location);
      formData.append('dateOfBirth', dateOfBirth);
      formData.append('picture',{
          name: new Date + "_picture",
          uri:image,
          type:'image/jpeg'

      })
  
      try {
        setIsLoading(true)
        const response = await axios.patch('https://grocery-9znl.onrender.com/api/v1/auth/users/updateProfile', formData, {
          headers: {
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'multipart/form-data',
          },
        });
        dispatch(setAuthoProfile(response.data));
   
        console.log(response.data, "jjags");
        await SecureStore.setItemAsync("authProfile",JSON.stringify(response.data))
        alert('Update Profile Success');
        navigation.navigate("Profile")
        setIsLoading(false)
      } catch (error) {
        setIsLoading(true)
        console.log(error, 'error to update');
        alert('Update Profile Failed');
        setIsLoading(false)
      }
    //   finally {
    //     setIsLoading(false);
    //   }
    };
  
  return (
      <ScrollView>
    <View style={{
        marginLeft:30
    }}>
      {/* <Text>EditProfile</Text> */}
      <TouchableOpacity onPress={()=>{pickImage()}}>

      <View style={{
          alignItems:'center',
          marginTop:50,
          
      }}>

          {image?(<Image source={{uri:image}} 
           style={styles.image}/>):
        <Image source={require('../../assets/Profileimage.jpg')} 
        style={styles.image}/>  
        }
          
          
           <View style={{
             
            //    height:30,
            
           }}>
               
           <Entypo name="camera" size={24} color="#00be5e" style={{
               marginTop:-15,
               marginLeft:50,
            //    backgroundColor:'black',
            //    width:40,
            //   height:30,
              
           }}
           />
           
           </View>

         
           
      </View>
      </TouchableOpacity >

      <View style={{
          marginTop:50,
          
      }}>

          <Text style={{
              fontSize:20
          }}> Name</Text>
          <TextInput placeholder='Munyembuga'
          onChangeText={(fullName) => setFullName(fullName)}
          
           style={{
              fontSize:20,
              marginLeft:5,
              borderBottomColor:'#00be5e',
              borderBottomWidth:2,
              width:300
          }}/>
      </View>
      <View style={{
          marginTop:20,
          
      }}>
          <Text style={{
              fontSize:20
          }}> Email</Text>
          <TextInput placeholder='munyembuga@gmail.com' 
          onChangeText={(email)=> 
          setEmail(email)}
          style={{
              fontSize:20,
              marginLeft:5,
              borderBottomColor:'#00be5e',
              borderBottomWidth:2,
              width:300
          }}/>
      </View>
      <View style={{
          marginTop:20,
          
      }}>
          <Text style={{
              fontSize:20
          }}> Location</Text>
          <TextInput placeholder='Nyarugenge'
          onChangeText={(location)=>setLocation(location)}  
         
          style={{
              fontSize:20,
              marginLeft:5,
              borderBottomColor:'#00be5e',
              borderBottomWidth:2,
              width:300
          }}/>
      </View>
      <View   style={{
          marginTop:20,
          
      }}>
      <Text  style={{
              fontSize:20,
              marginLeft:5
          }}>Date of birthday</Text>
             <TextInput placeholder='22/10/2023'
             onChangeText={(dateOfBirth) =>setDateOfBirth(dateOfBirth)}
             value={dateOfBirth}
             keyboardType='numbers-and-punctuation' style={{
              fontSize:20,
              marginLeft:5,
              borderBottomColor:'#00be5e',
              borderBottomWidth:2,
              width:300
          }}/>
     
      </View>
      <View   style={{
          marginTop:20,
          
      }}>
      <Text style={{
              fontSize:20,
              marginLeft:5
          }}>Phone number</Text>
             <TextInput placeholder='+25078888888' 
             onChangeText={(phone) => setPhone(phone)}
          
             keyboardType='phone-pad' style={{
              fontSize:20,
              marginLeft:5,
              borderBottomColor:'#00be5e',
              borderBottomWidth:2,
              width:300
          }}/>
      </View>
      <TouchableOpacity onPress={()=>{
          updateProfile()

       
        }
        
   

        }>
      <View style={{
          backgroundColor:'#00be5e',
          width:"60%",
          height:40,
          borderRadius:10,
          marginTop:30,
          marginLeft:45,
        alignItems:'center'
          
          

          
      }}>
         
        {isLoading?(<ActivityIndicator color={"#fff"} size={22}/>)
    :       <Text style={{
        color:'white',
        fontSize:20,
        paddingLeft:5,
        paddingTop:5

    }}>Upadte Profile</Text>  
    }
          
     
       
      </View>
      </TouchableOpacity>
      
      
    </View>
    </ScrollView>
  )
}
 const styles = StyleSheet.create({
     image:{
         width:100,
         height:100,
         borderRadius:50,
         objectFit:'contain',
         
     }
 })

export default EditProfile