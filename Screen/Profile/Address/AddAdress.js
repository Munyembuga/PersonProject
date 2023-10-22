import { View, Text,TextInput } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';


const AddAdress = () => {
  return (
    <View style={{
      flexDirection:'column',
      marginLeft:30,
      marginTop:30
    }}>
     
      <View >
        <Text style={{
          color:'gray',
          fontSize:16
        }}>Label:</Text>
        <TextInput placeholder='Ex: My Home' placeholderTextColor={"black"}
         keyboardType="numbers-and-punctuation" style={{
           fontSize:19,
           fontWeight:'500',
           borderBottomWidth:3,
           borderBottomColor:'gray',
           width:'80%'
         }} />
      </View>
      <View style={{
        marginTop:35
      }}>
        <Text style={{
          color:'gray',
          fontSize:16
        }}>Street:</Text>
        <TextInput placeholder='Ex: 1949 Virgil Street' placeholderTextColor={"black"}
         keyboardType="numbers-and-punctuation" style={{
           fontSize:19,
           fontWeight:'500',
           borderBottomWidth:3,
           borderBottomColor:'gray',
           width:'80%'
         }} />
      </View>
      <View style={{
        marginTop:35
      }}>
        <Text style={{
          color:'gray',
          fontSize:16
        }}>Cicty:</Text>
        <TextInput placeholder='Ex: Tawas City' placeholderTextColor={"black"}
         keyboardType="numbers-and-punctuation" style={{
           fontSize:19,
           fontWeight:'500',
           borderBottomWidth:3,
           borderBottomColor:'gray',
           width:'80%'
         }} />
      </View>
      <View style={{
        marginTop:35
      }}>
        <Text style={{
          color:'gray',
          fontSize:16
        }}>Zip Code:</Text>
        <TextInput placeholder='Ex: 1949' placeholderTextColor={"black"}
         keyboardType="phone-pad"  style={{
           fontSize:19,
           fontWeight:'500',
           borderBottomWidth:3,
           borderBottomColor:'gray',
           width:'80%'
         }} />
      </View>
      <View style={{
        marginTop:70,
        flexDirection:'row'
      }}>
        <Text style={{
          color:'black',
          fontSize:18,
          fontWeight:'700'
        }}> Set as primary </Text>
        <View style={{
          marginLeft:130,
          backgroundColor:'#17c568',
          width:30,
          height:30,
          borderRadius:2,
          alignItems:'center'
          
        }}>
        <Entypo name="check" size={24} color="white" />
        </View>

      </View>
      <TouchableOpacity>
      <View style={{
        width:'80%',
        height:40,
        backgroundColor:'#17c568',
        borderRadius:8,
        marginLeft:1,
        marginTop:80,
      }}>
        <Text style={{
          color:'white',
          fontSize:20,
          fontWeight:'500',
          paddingTop:5,
          textAlign:'center'
        }}>Save</Text>
      </View>
      </TouchableOpacity>
      
    </View>
  )
}

export default AddAdress