import { View, Text,TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import OrderTabs from './OrderTabs'
 
const Shops = () => {
  const navigation=useNavigation()
  return (
    <View>
      <OrderTabs/>
      {/* <Text style={{
        marginLeft:30,
        fontSize:20,
        fontWeight:'bold',
        color:'black',
      }}>My Orders</Text>
      <View>
        <View style={{
          flexDirection:'row',
          justifyContent:'space-around',
          marginTop:30

        }}>
          <TouchableOpacity>
            <Text style={{
              fontSize:17,
              color:'#b5b5b5'
            }}>Completed</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{
              fontSize:17,
              color:'#b5b5b5'
            }}>On Progress</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{
              fontSize:17,
              color:'#b5b5b5'
            }}>Canceled</Text>
          </TouchableOpacity>
        </View>
        <View style={{
          alignItems:'center',
          justifyContent:'center',
          marginTop:170
          // margin:'auto'

        }}>
          <Image source={require('../../assets/OrderImage/Ordershop.png')} style={{
            
           
          }}/>
          <Text style={{
            fontSize:18,
            marginTop:10

          }}>You don't have any order yet</Text>
          <TouchableOpacity onPress={ () =>navigation.navigate("Shops")}>
          <View style={{
            width:150,
            height:30,
            backgroundColor:'#08c25e',
            borderRadius:10,
            marginTop:30
          }}>
            
            <Text style={{
              color:'white',
              paddingLeft:40,
              paddingTop:2,
              fontWeight:'400',
              fontSize:17
            }}>Shop Now</Text>
          </View>
          </TouchableOpacity>
        </View>
      </View> */}
    </View>
  )
}

export default Shops