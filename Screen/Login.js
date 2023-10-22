import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import Field from './Field'
import Btn from './Btn'
import { Darkgreen } from './Constant'
import { FontAwesome } from '@expo/vector-icons';

const Login = (props) => {
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
              flexDirection:'row'
          }}>
          <Field Iconname="email" placeholder="Email" keyboardType={'email-address'}/>
          <MaterialIcons name="email" size={24} color="#006A42"  style={{
              justifyContent:'flex-end',
              marginTop:40
          }}/>
          </View>
          <View style={{
              flexDirection:'row'
          }}>
          <Field placeholder="Password " secureTextEntry={true}/>
          <Entypo name="eye-with-line" size={24} color="#006A42" 
          style={{
            justifyContent:'flex-end',
            marginTop:40
        }}
          />
          </View>
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
           >
          <Btn Textcolor={'white'} bgcolor={Darkgreen} btnlabel={'Login'}
          Press ={() => alert("Successfull Login")}
          /></TouchableOpacity>
          <View style={{
              display:'flex',
              justifyContent:'center',
              flexDirection:'row'
          }}>
              <Text style={{
                  fontSize:20
              }}> Don't have Account</Text>
              <TouchableOpacity
              onPress={()=> props.navigation.navigate("SignUp")}
              >
                  <Text 
                  style={{
                      fontSize:20,
                      fontWeight:'bold',
                      color:Darkgreen,

                  }}> SignUp</Text>
              </TouchableOpacity>
          </View>
          <Text style={{
              color:'#006A42'
          }}> Or</Text>
          <View style={{
              flexDirection:'row'
          }}>
          <FontAwesome name="apple" size={24} color="black" />
          <Text style={{
              marginLeft:10,
              marginBottom:15,
              fontSize:18
          }}>Continue with Apple</Text>
          </View>
         <View>
             
         <Text  style={{
              marginLeft:10,
              marginBottom:15,
              fontSize:18
          }}
         >Continue with Google</Text>
         </View>
    </View>
  )
}

export default Login