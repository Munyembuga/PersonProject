import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
useNavigation
const Trackorder = () => {
  const navigation =useNavigation()
  return (
    <View>
      <View style={{
        width:'95%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#08c25e',
        height:'75%',
        marginLeft:10,
        borderTopEndRadius:16,
        borderTopLeftRadius:16,
        // position:'absolute'
      }}>
        <View style={{
          width:50,
          height:50,
          backgroundColor:'white',
          borderRadius:10
        }}>
          <Entypo name="check" size={24} color="#08c25e" style={{
            textAlign:'center',
            paddingTop:10
          }} />
        </View>
        <View style={{
          marginTop:20
        }}>
        <Text style={{
          color:'white',
          fontSize:20,
          fontWeight:'600',
          textAlign:'center',
        }} >Kitani, your order </Text>
        <Text  style={{
          color:'white',
          fontSize:20,
          fontWeight:'600',
          textAlign:'center',
        }}>has been successsful </Text>
        </View>
        <View style={{
          marginTop:20
        }}>
          <Text style={{
          color:'white',
          fontSize:13,
          fontWeight:'400',
          textAlign:'center',
        }}>Check your order status My Order</Text>
          <Text style={{
          color:'white',
          fontSize:13,
          fontWeight:'400',
          textAlign:'center',
        }}>About next steps information</Text>
        </View>
        
      </View>
      <View style={{
        width:'95%',
        backgroundColor:'#fff',
        marginLeft:10,
      
        borderTopEndRadius:16,
        borderTopLeftRadius:16,
        height:180,
        marginTop:-10,
        
        

      }}>
        <View style={{
          marginTop:30,
          marginLeft:15

        }}>
          <Text  style={{
            color:'black',
            fontSize:16,
            fontWeight:'bold',
           
          }}>Preparing your order</Text>
          <Text  style={{
            color:'gray',
            fontSize:13,
            fontWeight:'bold',
            marginTop:10,
         
          }}>Your order will be prepared and will coming soon</Text>
        </View>
        <TouchableOpacity onPress={()=> navigation.navigate("OrderTabs")}>
        <View style={{
          backgroundColor:'#08c25e',
          width:'90%',
          height:40,
          borderRadius:10,
          alignItems:'center',
          marginTop:30,
          marginLeft:15
        }}>
          <Text style={{
            color:'white',
            fontSize:18,
            fontWeight:'bold',
            paddingTop:5
          }}>Track my order</Text>
        </View>
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default Trackorder

const styles = StyleSheet.create({})