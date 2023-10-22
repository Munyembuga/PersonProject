import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
// import ShareExample from '../Date'

const EditProfile = () => {
  return (
    <View style={{
        marginLeft:30
    }}>
      <Text>EditProfile</Text>
      <View style={{
          alignItems:'center',
          marginTop:50,
          
      }}>
          <Image source={require('../../assets/Profileimage.jpg')} 
           style={styles.image}/>
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

      <View style={{
          marginTop:50,
          
      }}>

          <Text style={{
              fontSize:20
          }}> Name</Text>
          <TextInput placeholder='Munyembuga' style={{
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
          <TextInput placeholder='munyembuga@gmail.com'  style={{
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
             <TextInput placeholder='22/10/2023' keyboardType='numbers-and-punctuation' style={{
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
             <TextInput placeholder='+25078888888' keyboardType='phone-pad' style={{
              fontSize:20,
              marginLeft:5,
              borderBottomColor:'#00be5e',
              borderBottomWidth:2,
              width:300
          }}/>
      </View>
      <TouchableOpacity>
      <View style={{
          backgroundColor:'#00be5e',
          width:"60%",
          height:30,
          borderRadius:10,
          marginTop:70,
          marginLeft:45,
        alignItems:'center'
          
          

          
      }}>
          <Text style={{
              color:'white',
              fontSize:20,
              paddingLeft:45

          }}>Upadte Profile</Text>
      </View>
      </TouchableOpacity>
      
      
    </View>
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