import { View, Text,StyleSheet,TextInput } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

const Field = ({
    Iconname,
    error,
    password,
    onFocus=()=>{},
    ...props}) => {
  return (
   
           
          
      <TextInput {...props}
      style={{
          width:'80%',
          padddingHorizontal:20,
          
          borderRadius:100,
          fontSize:20,
          marginTop:20
          

      }}
      placeholderTextColor="black"
      >

      </TextInput>
     
   
  )
}

export default Field