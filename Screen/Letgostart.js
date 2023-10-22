import { View,Link, Text,Image,ImageBackground,StyleSheet, Pressable, Button } from 'react-native'
import React from 'react'
import Signup from './Signup';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




  
export default function Letgostart() {
  return (
   
      <ImageBackground source={
          require('../assets/imgage.jpg')}
          style={{
              width:'100%',
              height:'100%',
              position:'absolute'
          }} >
    <View style={styles.container}>
       
        <Image style={{
            width:550,
            height:150,
            }} source={require('../assets/splash.png')}/>  
        <Text style={styles.text}>Your Daiy needed</Text>
      
     
        <Pressable style={{marginTop:180}}>
          <Text style ={{
          width:300,
          backgroundColor:'green', 
          color:'white',
          textAlign:'center' ,
          padding:10,
        
         
          }} 
          
          >Get start</Text>
          <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />

      </Pressable>
    
        </View>
       
        </ImageBackground>
      

   
  );
}


const styles = StyleSheet.create({
    text:{
        fontSize:20,
        fontWeight:'bold',
        marginTop:30,
    },
    container:{
        flex: 1,
        alignItems: 'center',
        marginHorizontal:30,
        marginTop:300,
       
    
    },
  
    
})