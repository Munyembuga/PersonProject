import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

const Btn = ({btnlabel,Textcolor,bgcolor,Press}) => {
  return (
    <TouchableOpacity
    onPress={Press}
    style={{
        backgroundColor:bgcolor,
       width:350,
       padding:10,
       alignItems:'center',
       marginVertical:10,

       borderRadius:20

    }}
    >
     <Text style={{
         color:Textcolor,
         fontSize:22,
         fontWeight:'bold',
         }}>
             {btnlabel}

     </Text>
    </TouchableOpacity>
  )
}

export default Btn