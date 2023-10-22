import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import Field from './Field'
import Btn from './Btn'
import { MaterialIcons } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import { Darkgreen } from './Constant'
import { FontAwesome } from '@expo/vector-icons';


const Signup = (props) => {
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
          marginTop:20,
         
      }}
      >Get start up</Text>
      
      <Text style={{
        fontSize:19,
        marginTop:18,
        
        color:'gray',
        fontWeight:'300'
        }}>
          Create to your account! </Text>
          <View style={{
              flexDirection:'row'
          }}>
          <Field placeholder="Email" keyboardType={'email-address'}/>
          <MaterialIcons name="email" size={24} color="#006A42"  style={{
              justifyContent:'flex-end',
              marginTop:30
          }}/>
          </View>
          {/* <Text>g</Text> */}
         <View style={{
              flexDirection:'row'
          }}>
         <Field placeholder="Password " secureTextEntry={true}/>
         <Entypo name="eye-with-line" size={24} color="#006A42" 
          style={{
            justifyContent:'flex-end',
            marginTop:30
        }}/>
         </View>
         {/* <Text>g</Text> */}
         <View style={{
              flexDirection:'row'
          }}>
         <Field placeholder=" Confirm password " secureTextEntry={true}/>
         <Entypo name="eye-with-line" size={24} color="#006A42" 
          style={{
            justifyContent:'flex-end',
            marginTop:30
        }}/>
         </View>
         {/* <Text>g</Text> */}
         
          <View style={{
              
              width:'90%',
              flexDirection:'row',
              display:'flex',
              marginTop:30,
             
              marginVertical:5,
              
           
          }}>
              <Text style={{
                  color:'gray',
                  fontWeight:'bold',
                  fontSize:15,
                  
              }}>
                  By signing in , your agree to our{" "}
                  
              </Text>
              <Text 
              style={{
                color:'#006A42',
                fontWeight:'bold',
                fontSize:15,}}>Term & Condition</Text>
                
            

          </View>
          <View style={{
              
              width:'90%',
              flexDirection:'row',
              display:'flex',
            
              marginBottom:10,
              marginVertical:5,
              
           
          }}>
              <Text style={{
                  color:'gray',
                  fontWeight:'bold',
                  fontSize:15,
                  
              }}>
                  and{" "}
                  
              </Text>
              <Text 
              style={{
                color:'#006A42',
                fontWeight:'bold',
                fontSize:15,}}>Privacy Policy</Text>
                
            

          </View>
          
          <Btn Textcolor={'white'} bgcolor={Darkgreen} btnlabel={'Sign Up'}
          Press ={() => alert("Successfull To Create Accout")}/>
          <View style={{
              display:'flex',
              justifyContent:'center',
              flexDirection:'row'
          }}>
              <Text style={{
                  fontSize:20
              }}> Already Have Account</Text>
              <TouchableOpacity
              onPress={()=> props.navigation.navigate("Login")}
              >
                  <Text 
                  style={{
                      fontSize:20,
                      fontWeight:'bold',
                      color:"#006A42",

                  }}> Login</Text>
              </TouchableOpacity>
          </View>
          <Text style={{
              color:'#006A42'
          }}> Or</Text>
          <View style={{
              flexDirection:'row'
          }}>
          <FontAwesome name="apple" size={24} color="black" />
          <Text  style={{
              marginLeft:10,
              marginBottom:15,
              fontSize:18
          }} 
          >Continue with Apple</Text>
          </View>
         <View>
            
         <Text
          style={{
            marginLeft:10,
            marginBottom:15,
            fontSize:18
        }} 
         >Continue with Google</Text>
         </View>
    </View>
  )
}

export default Signup