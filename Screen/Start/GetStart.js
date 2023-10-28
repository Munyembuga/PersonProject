import { View, Text, Image,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Login from '../Login';
// import { TouchableOpacity } from 'react-native-gesture-handler';
 const log = ()=>{
     <Login/>
 }
const GetStart = () => {
    const navigation=useNavigation();

  return (
    <View>
        <View style={styles.containericon}>
  
      <Image source={require('../../assets/TitlePhoto.png')} 
      style={styles.iconimage}/>
      <Text style={{
          fontSize:30,
          fontWeight:'800',
          color:'black',
          marginTop:29,
      }}> Gocery</Text>
    </View>
    <View style={{
        width:'90%'
    }}>
        <Image source={require('../../assets/Vegetables/FreshGevan.png')} style={{
            width:300,
            height:490,
            objectFit:'contain',
            marginLeft:50,
            marginTop:-30
        }}
        />
    </View>
    <TouchableOpacity>
    <View style={{
        backgroundColor:'black',
        width:'85%',
        height:40,
        borderRadius:7,
        marginLeft:32,
        flexDirection:'row',
       alignItems:'center',
         marginTop:-10
    }}>
        <FontAwesome name="apple" size={24} color="white" style={{
            textAlign:'center',
            // marginLeft:32,
            paddingLeft:80
        }}/>
        <Text style={{
            color:'white',
            fontSize:17,
            fontWeight:'400',
            // paddingTop:3,
            textAlign:'center',
            paddingLeft:20
        
        }}>Sign up with Apple</Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity>
    <View style={{
        backgroundColor:'white',
        width:'85%',
        height:40,
        borderRadius:7,
        marginLeft:32,
        flexDirection:'row',
       alignItems:'center',
       marginTop:10
    }}>
        <FontAwesome name="apple" size={24} color="#000000" style={{
            textAlign:'center',
            // marginLeft:32,
            paddingLeft:80
        }}/>
        <Text style={{
            color:'#000000',
            fontSize:17,
            fontWeight:'400',
            // paddingTop:3,
            textAlign:'center',
            paddingLeft:20
        
        }}>Sign up with Google</Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
    <View style={{
        backgroundColor:'#17c568',
        width:'85%',
        height:40,
        borderRadius:7,
        marginLeft:32,
        flexDirection:'row',
       alignItems:'center',
       marginTop:10
    }}>
       
        <Text style={{
            color:'white',
            fontSize:17,
            fontWeight:'400',
            // paddingTop:3,
            textAlign:'center',
            
            paddingLeft:140
        
        }}>Sign up </Text>
    </View>
    </TouchableOpacity>
    
    <View style={{ 
       width:'85%',
       marginLeft:32,
       alignItems:'center',
       marginTop:10,
       flexDirection:'row'
    }}>
       
        <Text style={{
            color:'gray',
            fontSize:17,
            fontWeight:'400',
            // paddingTop:3,
            textAlign:'center',
            paddingLeft:20
        
        }}>Already Have an Account</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={{
            color:'#17c568',
            fontSize:17,
            fontWeight:'400',
            paddingLeft:20
        
            
        }}
        >Login</Text>
         </TouchableOpacity>
    </View>
   
    </View>
  )
}
const styles = StyleSheet.create({
    iconimage:{
        width:70,
        height:70,

    },
    containericon:{
       
        flexDirection:'row',
        marginLeft:20,
        marginTop:30

    }
})

export default GetStart