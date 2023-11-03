import { StyleSheet, Text, View,Image,ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { MaterialIcons,MaterialCommunityIcons,Entypo  } from '@expo/vector-icons';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Paymentform = ({route}) => {
    const{totalAmount,cartsId} =route.params
    const[isLoading,setIsLoading] =useState(false)
    const navigation=useNavigation()
    console.log(totalAmount,"total amountshhs")
    console.log(cartsId,"Cart Id s")
    const {authToken} =useSelector((state) => state.auth);
    const handlecheckOut = async()=>{
        setIsLoading(true)
        axios({
            method:"POST",
            url:` https://grocery-9znl.onrender.com/api/v1/cart/checkout`,
            data:{
                "cartId":cartsId,
                "phone": "0783309196",
                "deliverTo": "Kimironko",
                "totalAmount":totalAmount
            },
            headers:{
                Authorization:`Bearer ${authToken}`,
            },

        })
        .then((response) =>{
            alert("sucess Check out")
            console.log(response,"sucess to add")
            // navigation.navigate('Vegetables')

        }).catch((error) =>{
            alert("Fail to Add Carts")
            console.log(error.response.data,"fail to check Out ")
            // navigation.navigate('Vegetables')
        }).finally(()=>{
            setIsLoading(false)
        })
      
       

    }



  return (
    <View style={{
        flexDirection:'column',
        marginLeft:17

    }}>
      {/* <Text>Paymentform</Text> */}
      <View>
          <Text style={{
              color:'black',
              fontSize:17,
              fontWeight:'bold',
              
          }}>Destination</Text>
          <View style={{
              flexDirection:'row',
              marginRight:70,
          }}>
              
              <Image source={require('../../assets/paymentIcon/paymentIcon2.png')} style={{
                  width:120,
                  height:120,
                  objectFit:'contain',
                  margin:10,

              }}/>
               <Text style={{
              fontSize:16,
              marginRight:80,
              marginTop:10
          }}>Cecilia Chapman 777-2880 Nulla 
          St Mankato Mississippi 96522 (257)563-7041</Text>
         
          </View>
          <View>
              <Text>pick up time</Text>
            
          </View>
          <View style={{
              flexDirection:'row',
              marginBottom:20,
              marginTop:20
          }}>
          <MaterialCommunityIcons name="clock-time-five-outline" size={24} color="#08c25e" />
          <Text style={{
              marginLeft:20
          }}>Fri,September 12,2022-12:30</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24}
           color="#08c25e" style={{
              marginLeft:90
          }}/>
          </View>
          <View style={{
              flexDirection:'row',
          }}>
          <MaterialCommunityIcons name="timer-settings-outline"
           size={24} color="#08c25e" style={{
             
          }} />
          <Text style={{
              marginLeft:20
          }}>Fri,September 12,2022-12:30</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24}
           color="#08c25e" style={{
              marginLeft:90
          }}/>
          </View>
      </View>
      <View>
         {/* <Text>Total</Text> */}
          <View style={{
              flexDirection:'row',
              marginBottom:20,
              marginTop:40
          }}>
              <Text 
               style={{
               
                fontSize:22,
                color:'#000',
                fontWeight:'bold'
            }}
              >Total</Text>
              <Text style={{
                  marginLeft:220,
                  fontSize:22,
                  color:'#000',
                  fontWeight:'bold'
              }}>
                  {/* $98 */}
                  ${totalAmount}

              </Text>
          </View>
      </View>
      
      <View>
          <Text>Payment method</Text>
          <TouchableOpacity>
      <View style={{
              flexDirection:'row',
              marginBottom:20,
              marginTop:20
          }}>
          <Entypo name="credit-card" size={24} color="#08c25e" />
          <Text  style={{
        marginLeft:20,
        marginTop:3
        
    }}
          > Add Payment Method</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24}
           color="#08c25e" style={{
              marginLeft:130
          }}/>
      </View>
      </TouchableOpacity></View>
    
      
      <View >
          <Text style={{
            //   marginLeft:20,

          }}>Promo code</Text>
          <TouchableOpacity>
      <View style={{
              flexDirection:'row',
              marginBottom:20,
              marginTop:20
          }}>
      <MaterialCommunityIcons name="timer-sand-empty" size={24} color="#08c25e" 
     />    
        <Text  style={{
        marginLeft:20,
        marginTop:6
        
    }}
        > Add Promo code</Text>
        <MaterialIcons name="keyboard-arrow-right" size={24}
           color="#08c25e" style={{
              marginLeft:160
          }}/>
      </View>
      </TouchableOpacity></View>
     
      
      <View style={{
          width:"90%",
          height:30,
          backgroundColor:'#08c25e',
          borderRadius:3,
          marginTop:40
          
      }}>
          <TouchableOpacity onPress={()=> {handlecheckOut()}}>
            {isLoading?
            (<ActivityIndicator color={"#fff"} size={22}/>)
            :
            ( <Text style={{
                textAlign:'center',
                color:'white',
                paddingTop:4,
                fontWeight:'600'
            }}>Place Order</Text>)
            }
            
          </TouchableOpacity>
      </View>
    </View>
  )
}

export default Paymentform

const styles = StyleSheet.create({})