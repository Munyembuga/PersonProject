import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context'
import Shopcards from './Shopcards';

const Home = () => {
  return (

    <SafeAreaView>
        <View>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
        <Image source={require('../assets/splash.png')} style={{width:150,height:150,marginTop:-20}}/>
        <Ionicons name="notifications" size={24} color="black" style={{alignItems:'flex-end',marginTop:40,marginRight:30}}/>
    
      </View>
      <View style={{
        backgroundColor:'#00be5e',
        width:'100%',
        height:180,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
        }}>
            <View style={{
                flexDirection:'column',
                
                marginLeft:30,
               

                
            }}>
                <Text style={{
                     color:'white',
                     fontWeight:'bold',
                     
                     fontSize:20,}}
                     >Gocery</Text>
                <Text
                style={{
                    color:'white',
                    fontWeight:'bold',
                    fontSize:20,}}>Discount</Text>
                <Text style={{
                    color:'white',
                    fontWeight:'bold',
                    fontSize:20,}}>25% All</Text>
                <Text style={{
                    color:'white',
                    fontWeight:'bold',
                    fontSize:20,}}>Fruits</Text>
                    <Text style={{
                    backgroundColor:'#ff7d00',
                    fontWeight:'bold',
                    fontSize:20,
                    color:'white',
                    width:150,
                    textAlign:'center',
                    marginTop:18,
                    borderRadius:10,
                    paddingTop:5,
                    paddingBottom:5,

                    }}>Check now</Text>
            </View>
            <View>
       <Image source={require('../assets/Header1.png') }
       style={{
           width:150,
           height:200,
           marginRight:39,
           marginTop:0,
           objectFit:"contain"


       }}/></View>
      </View>
      <View>
      <Shopcards />
      </View>
      </View>
      
    </SafeAreaView>
  )
}

export default Home