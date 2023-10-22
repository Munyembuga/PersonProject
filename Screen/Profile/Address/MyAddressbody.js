import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {  useNavigation } from '@react-navigation/native'
useNavigation
const MyAddressbody = () => {
    const navigation=useNavigation();
  return (
    <View>
      <View style={{
          alignItems:'flex-end'
      }}><TouchableOpacity onPress={() =>navigation.navigate("AddAdress")}>
          <Text style={{
              color:'#08c25e',
              fontSize:17,
              fontWeight:'400',
              marginRight:30
          }}>Add</Text>
          </TouchableOpacity >
      </View>
      <View style={{
          flexDirection:'column',
          marginLeft:30,
          marginTop:30
          }}>
          <View style={{
              flexDirection:'row'
          }}>
              <Text style={{
                  color:'black',
                  fontSize:17,
                  fontWeight:'600',
              }}>My Home</Text>
              <View style={{
                  backgroundColor:'#08c25e',
                  width:60,
                  height:25,
                  marginLeft:200,
                  borderRadius:4
              }}>
                  <Text style={{
                      paddingTop:2,
                      color:'white',
                      fontSize:14,
                      textAlign:"center"
                  }}>Primary</Text>
              </View>
          </View>
          <View>
              <Text style={{
                  color:'gray'
              }}>1001 Veterans Blvd</Text>
              <Text style={{
                  color:'gray'
              }}>Redwoods City, CA 94063</Text>
          </View>
      </View>
   
      <View style={{
          flexDirection:'column',
          marginLeft:30,
          marginTop:30
          }}>
          <View style={{
              flexDirection:'row'
          }}>
              <Text style={{
                  color:'black',
                  fontSize:17,
                  fontWeight:'600',
              }}>Parent's house</Text>
            
          </View>
          <View>
              <Text style={{
                  color:'gray'
              }}>1001 Veterans Blvd</Text>
              <Text style={{
                  color:'gray'
              }}>Redwoods City, CA 94063</Text>
          </View>
      </View>
    </View>
  )
}

export default MyAddressbody