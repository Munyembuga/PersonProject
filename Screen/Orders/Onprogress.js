
import { useIsFocused } from "@react-navigation/native";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Touchable } from "react-native";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet, FlatList,ActivityIndicator } from "react-native";
import { useSelector } from "react-redux";

const Onprogress = () => {
  const[isLoading,setIsLoading] =useState(false)
  const[dataOngoing,setDataOngoing] =useState([])
  const {authToken} =useSelector((state) => state.auth);
  const isFocused=useIsFocused()
  const getOrdes =() =>{
    axios({
      method:'GET',
      url: `https://grocery-9znl.onrender.com/api/v1/cart/ongoingorders`,
      headers:{
          Authorization:`Bearer ${authToken}`,
      },
  }).then((response) =>{
  console.log(response.data.data,"Response Orders on Progress")
  setDataOngoing(response.data.data)
  console.log(dataOngoing,"Response Orders on one")
  console.log(dataOngoing._id,"Response Orders onddd one")
 
  }).catch((error)=>{
    console.log(error.response,"error to fetch Orders");
  })
  }

  const confirmOrders = async(orderId)=>{
    setIsLoading(true)
    axios({
        method:"POST",
        url:` https://grocery-9znl.onrender.com/api/v1/cart/confirmdelivery/${orderId}`,
       
        headers:{
            Authorization:`Bearer ${authToken}`,
        },

    })
    .then((response) =>{
        alert("Sucess to Confirm Order")
        console.log(response,"sucess to confirm")
       

    }).catch((error) =>{
        alert("Fail to Confirms")
        console.log(error.response.data,"fail to confirm Order")
       
    }).finally(()=>{
      setIsLoading(false)
    })
   

}


  useEffect(()=>{
    console.log("Perfect")
    getOrdes()
    confirmOrders()
  },[isFocused])
  
  return (
   
    <FlatList 
    data={dataOngoing}
    numColumns={1}
    keyExtractor ={(item)=> item._id} 
    renderItem={({item}) =>( 

    <View style={styles.container}>
     
      <View style={{
        marginLeft:10,
        marginTop:10,
        flexDirection:'row'
        
      }}>
        <Text style={{
          fontSize:17,
          fontWeight:'bold',
          color:'gray'
        }}>Date :</Text>
        <Text  style={{
          fontSize:17,
          fontWeight:'600',
          color:'gray',
          marginLeft:10
        }}>
       {item.date}
        </Text>
      </View>
      <View style={{
        flexDirection:'row',
        marginLeft:10
    }}>

        <View style={{
          flexDirection:'column',
          flex:1
        }}>
        <View style={{
          // flexDirection:'row',
          marginTop:20,
          // marginLeft:20
        }}>
          <Text style={{
            fontWeight:'bold',
            fontSize:20,
            color:'gray'
          }}>transaction ID:</Text>
          <Text style={{
            fontWeight:'400',
            fontSize:14,
            color:'gray',
            // marginLeft:10,
            marginTop:3,
          }}>{item.transactionId}
            {/* GN1289TN */}
          </Text>
           {/* <Text style={{
            fontWeight:'400',
            fontSize:15,
            color:'gray',
            marginLeft:10,
            marginTop:3,
          }}>Order Accpted</Text> */}
        </View>
        {/* <View  style={{
       
          flexDirection:'column',
          marginTop:20,
          marginLeft:20
        }}> */}
          <View style={{
       
       
      
     }}>
          <Text style={{
             fontWeight:'bold',
             fontSize:20,
             color:'gray',
            marginTop:8,
            // marginLeft:10
          }}>Deliver to</Text>
          <Text 
          style={{
            fontWeight:'400',
            fontSize:22,
            color:'#000',
            marginTop:1,
            
          }}>
            {/* Dome */}
            {item.deliveryAddress}
         
          </Text>
        {/* <Text style={{
            fontWeight:'400',
            fontSize:19,
            color:'gray',
            marginLeft:95
          }}>Total Payment</Text> */}
          </View>
          </View>
          <View style={{
            flex:1,
            flexDirection:'column',
            marginLeft:80
          }}>
            <View style={{
              width:120,
              height:35,
              backgroundColor:"#cccccc",
              textAlign:'center',
              borderRadius:8,
              marginTop:-28,
              
            }}>
              <Text style={{
            color:'#17c568',
            fontSize:19,
            fontWeight:'bold',
            // marginTop:16,
            // paddingLeft:10,
            textAlign:'center',
            paddingTop:2
           
            
          }}>
            {item.orderStatus}
            {/* Ready to collect */}
          </Text>
            </View>
            <View>
              <Text style={{
          fontWeight:'bold',
          fontSize:20,
          color:'gray',
            marginTop:22,
          }}>Total Payment:</Text>
              <Text style={{
            color:'#000',
            fontSize:20,
            fontWeight:'700',
            marginTop:7,
          }}>
             $ {item.totalAmount}
            {/* $3648 */}
          </Text>
          <TouchableOpacity onPress={() =>{confirmOrders(item._id)}}>
          <View style={{
            backgroundColor:'#17c568',
            width:30,
            height:30,
            borderRadius:4,
            marginLeft:30,
            marginTop:10
          }}>
            {isLoading? 
          <ActivityIndicator color={"#fff"} size={22}/>
          :( <Text style={{
            color:'#fff',
            fontSize:17,
            fontWeight:'800'
        }}> ok</Text>)  
          }
           
          </View>
          </TouchableOpacity>
            </View>
          </View>
         
        
      </View>
    </View>
    )}
  />

 
  );
};

const styles = StyleSheet.create({
  container: {
   
      backgroundColor: "#FFFFFF",
      width: "95%",
      minHeight: 200,
      marginVertical: 10,
      borderRadius: 10,
      padding:5,
      shadowColor: "#000000",
      marginHorizontal:7,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 4,
    },
 
});

export default Onprogress;
