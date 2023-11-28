import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Onprogress = () => {
  return (
    <View style={styles.container}>
      {/* <Text>Onprogress Orders</Text> */}
      {/* Your completed orders content goes here */}
      <View>
        <View style={{
          flexDirection:'row',
          marginTop:20,
          marginLeft:20
        }}>
          <Text style={{
            fontWeight:'bold',
            fontSize:19,
            color:'gray'
          }}>Order ID:</Text>
          <Text style={{
            fontWeight:'400',
            fontSize:15,
            color:'gray',
            marginLeft:10,
            marginTop:3,
          }}>GN1289TN</Text>
           <Text style={{
            fontWeight:'400',
            fontSize:15,
            color:'gray',
            marginLeft:10,
            marginTop:3,
          }}>Order Accpted</Text>
        </View>
        <View  style={{
       
          flexDirection:'column',
          marginTop:20,
          marginLeft:20
        }}>
          <View style={{
       
       flexDirection:'row',
      
     }}>
          <Text style={{
            fontWeight:'400',
            fontSize:19,
            color:'gray',
            // marginLeft:10
          }}>Deliver to</Text>
        <Text style={{
            fontWeight:'400',
            fontSize:19,
            color:'gray',
            marginLeft:95
          }}>Total Payment</Text>
          </View>
          <View style={{
       
       flexDirection:'row',
      
     }}>
          <Text style={{
            fontWeight:'600',
            fontSize:23,
            color:'#000',
            marginTop:10,
          
          }}>My Dome</Text>
          <Text style={{
            fontWeight:'600',
            fontSize:23,
            color:'#000',
            marginTop:10,
            marginLeft:76
          
          }}>$129</Text>
          </View>
         
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    //  justifyContent: "center",
    alignItems:'flex-start',
    backgroundColor:'#2021',
    width:'90%',
    height:150,
    marginLeft:14,
    marginTop:24,
    borderRadius:10,
    borderWidth:4,
    borderColor:'#2021'
  },
});

export default Onprogress;
