import { View, Text,Image } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';


const PromosDetails = () => {
  return (
    <View>
      <Text>PromosDetails</Text>
      <View style={{
          flexDirection:'row',
          width:'90%',
          height:230,
          backgroundColor:'#695ccd',
          alignItems:'center',
          marginLeft:15,
          borderRadius:10,
      }}>
          <View style={{
              flexDirection:'column',
              marginLeft:20
          }}>
              <Text style={{
                  color:'white',
                  fontSize:15,
                  fontWeight:'bold',
                  marginBottom:15,
                  marginTop:-10

              }}>Gocery</Text>
              <Text  style={{
                  color:'white',
                  fontSize:18,
                  fontWeight:'500',
                  marginVertical:10,
                  
              }}>FREE DELIVERY</Text>
              <Text  style={{
                  color:'white',
                  fontSize:18,
                  fontWeight:'bold',
                  marginBottom:10
                  
              }}>EVERY PURCHASE</Text>
              <Text  style={{
                  color:'white',
                  fontSize:18,
                  fontWeight:'500',
                
                  
              }}>LONG BREAD</Text>
              <View style={{
                  backgroundColor:'#17c568',
                  width:200,
                  height:25,
                  borderRadius:4,
                  marginTop:10
              }}>
                  <Text style={{
                      paddingTop:2,
                      textAlign:'center',
                      color:'white'
                  }}>CHECK OUT</Text>
              </View>
          </View>
          <Image source={require('../../assets/Vegetables/Orange.png')} style={{
              width:120,
              height:200,
              objectFit:'contain'
          }}/>
      </View>
      <View style={{
          marginLeft:19,
          marginRight:20,
          flexDirection:'column',
          marginTop:20,
      }}>
       <Text style={{
           fontSize:24,
           color:'black',
           fontWeight:'500',


       }}>Free Delivery Every Buy Long Bread Only at New York</Text>
       <Text style={{
           color:'#b5b5b5',
           marginTop:10
       }}>Valid for 14 days</Text>
       <View style={{
           marginTop:10,
           display:'flex',
           justifyContent:'space-between',
           flexDirection:'row'
       }}>
           <Text  style={{
           color:'black',
           fontSize:16,
           fontWeight:'500'
       }}>Available until</Text>
           <Text  style={{
           color:'black',
           fontSize:16,
           fontWeight:'500'
          
       }}>16 August 2020</Text>
       </View >
       <View>
           <Text  style={{
           color:'black',
           marginTop:20,
           fontSize:18,
           fontWeight:'bold'
       }}>Highlights</Text>
       </View>
       <View>
           <Text  style={{
           color:'gray',
           marginTop:13,
           fontSize:15,
       }}>Enjoy free delivery every buy bread, only at New York.Thank you for choosing Grocery </Text>
       </View>
       <View style={{
           flexDirection:'row',
           marginTop:20

       }}>
           <MaterialIcons name="error-outline" size={24} color="#fbb62d" />
           <Text  style={{
           color:'black',
           marginLeft:16,
           fontSize:16,
           fontWeight:"700",
          
           
       }}>Terms and Conditions</Text>
       <MaterialIcons name="keyboard-arrow-right" size={24} color="black" style={{
           marginLeft:100
       }} />
       </View>
       <View style={{
           backgroundColor:'#08c25e',
           borderRadius:5,
           width:"90%",
           height:30,
           
           margin:18
       }}>
           <Text style={{
               color:'white',
               paddingTop:3,
               textAlign:'center'
           }}> Claim Promo Voucher</Text>
       </View>
      </View>
   
    </View>
  )
}

export default PromosDetails