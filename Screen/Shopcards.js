import { View, Text, Image,StyleSheet, Pressable, TouchableOpacity,FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Shopsbtn from './Shopsbtn'
import Overview from './Shopsheader'
  
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import { useSelector } from 'react-redux';
 
    const Shopcards = () => {
    const navigation = useNavigation();
    const {authToken} =useSelector((state) => state.auth);
    const [category,setCategory] = useState([])
    const fetchGrocery= async () =>{
        axios({
            method:'GET',
            url: ` https://grocery-9znl.onrender.com/api/v1/category/`,
            headers:{
                Authorization:`Bearer ${authToken}`,
            },
        })
        .then((response) =>{
            // console.log(response,"Response")
            setCategory(response.data.data)
        })
        .catch((error)=>{
            // console(error,"error"),
            alert(error.response.data.message)
        })
    }
    useEffect(()=>{
        if(authToken){
            fetchGrocery()
        }
    }),[authToken]
    return (
        <View style={{
            marginHorizontal:10
        }}>

            
        <FlatList
       
            data={category}
            numColumns={4}
            // keyExtractor ={(item)=> item.id} 

            // console.log(category)
            renderItem={({ item }) =>(
                < TouchableOpacity onPress={()=>{navigation.navigate("Vegetables",item)}}>

                <View style={styles.container}>
                    <Image source={{uri:item.picture}} style={styles.image}/>
                <Text style={{
                    fontWeight:'bold',
                    alignItems:'center',
                    textAlign:'center'
                    
                 }}
                 >{item.name}</Text>
                   </View>
                   </ TouchableOpacity>

            )
         }
       
                
            />

            {/* <Image source={require('../assets/Vegetables1.png')} style={styles.image}/>
            <Text style={{
               fontWeight:'bold',
               alignItems:'center',
               textAlign:'center'
               
            }}
            onPress={()=> navigation.navigate("Shopsbtn")}>Vegetables</Text>
        <Text>Shopcards</Text> */}
        </View>
       
    )
    }
    const styles = StyleSheet.create({
        image:{
            width:85,
            height:120,
            objectFit:'contain'
        },
        container:{
            width:95,
            height:140,
            // borderWidth:1,
            marginTop:10,
            // borderColor:'white'
            marginVertical:10,
           
        }
    
    })

    export default Shopcards