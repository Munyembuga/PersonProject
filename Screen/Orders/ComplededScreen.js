import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import { useSelector } from "react-redux";

const CompletedScreen = () => {
  const navigation = useNavigation();
  const { authToken } = useSelector((state) => state.auth);
  const [history, setHistory] = useState([]);

  const getHistory = () => {
    axios({
      method: 'GET',
      url: `https://grocery-9znl.onrender.com/api/v1/cart/orderhistory`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
      .then((response) => {
        console.log(response.data.data, "Response Orders complededdddss");
        setHistory(response.data.data);
      })
      .catch((error) => {
        console.log(error.response, "error to Completed Order");
      });
  };

  useEffect(() => {
    getHistory();
  }, []);

  return (
    <FlatList
      data={history}
      numColumns={1}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.infoRow}>
              <Text style={styles.label}>Date:</Text>
              <Text style={styles.value}>{item.date}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.label}>Transaction ID:</Text>
              <Text style={styles.value}>{item.transactionId}</Text>
            </View>
            <Text style={styles.deliveryAddress}>{item.deliveryAddress}</Text>
            <View style={styles.statusContainer}>
              <Text style={styles.statusLabel}>Status:</Text>
              <Text style={styles.value}>{item.orderStatus}</Text>
            </View>
            <Text style={styles.totalPaymentLabel}>Total Payment:</Text>
            <Text style={styles.totalPaymentValue}>$ {item.totalAmount}</Text>
          </View>
        </ScrollView>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    width: "90%",
    minHeight: 200,
    marginVertical: 10,
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
    marginRight: 10,
  },
  value: {
    fontSize: 16,
    color: "#333333",
  },
  deliveryAddress: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
    marginTop: 8,
  },
  statusContainer: {
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  statusLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#17c568",
    marginRight: 10,
  },
  totalPaymentLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
    marginTop: 22,
  },
  totalPaymentValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    marginTop: 7,
  },
});

export default CompletedScreen;



// import { useNavigation } from "@react-navigation/native";
// import axios from "axios";
// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import { View, Text, StyleSheet,TouchableOpacity,Image } from "react-native";
// import { FlatList } from "react-native";
// import { ScrollView } from "react-native";
// import { useSelector } from "react-redux";

// const CompletedScreen = () => {
//     const navigation= useNavigation();
//     const {authToken} =useSelector((state) => state.auth);
//     const[history,setHistory] = useState([])
//     const getHistory =() =>{
//       axios({
//         method:'GET',
//         url: `https://grocery-9znl.onrender.com/api/v1/cart/orderhistory`,
//         headers:{
//             Authorization:`Bearer ${authToken}`,
//         },
//     }).then((response) =>{

//     console.log(response.data.data,"Response Orders complededdddss")
//     setHistory(response.data.data)
//     console.log(history,"history")
   
//     }).catch((error)=>{
//       console.log(error.response,"error to Completed Order");
//     })
//     }
//     useEffect(()=>{
//       console.log("Perfect")
//       getHistory()
//     },[])


//   return (
   
//     <FlatList 
//     data={history}
//     numColumns={1}
//     keyExtractor ={(item)=> item._id} 
//     renderItem={({item}) =>( 
//       <ScrollView>
// <View style={styles.container}>
     
//      <View style={{
//        marginLeft:10,
//        marginTop:10,
//        flexDirection:'row'
       
//      }}>
//        <Text style={{
//          fontSize:17,
//          fontWeight:'bold',
//          color:'gray'
//        }}>Date :</Text>
//        <Text  style={{
//          fontSize:17,
//          fontWeight:'600',
//          color:'gray',
//          marginLeft:10
//        }}>
//       {item.date}
     
//        </Text>
//      </View>
//      <View style={{
//        flexDirection:'row',
//        marginLeft:10
//    }}>

//        <View style={{
//          flexDirection:'column',
//          flex:1
//        }}>
//        <View style={{
//          // flexDirection:'row',
//          marginTop:20,
//          // marginLeft:20
//        }}>
//          <Text style={{
//            fontWeight:'bold',
//            fontSize:20,
//            color:'gray'
//          }}>transaction ID:</Text>
//          <Text style={{
//            fontWeight:'400',
//            fontSize:14,
//            color:'gray',
//            // marginLeft:10,
//            marginTop:3,
//          }}>
//           {item.transactionId}
//            {/* GN1289TN */}
//          </Text>
         
//        </View>
     
//          <View style={{
      
      
     
//     }}>
//          <Text style={{
//             fontWeight:'bold',
//             fontSize:20,
//             color:'gray',
//            marginTop:8,
//            // marginLeft:10
//          }}>Deliver to</Text>
//          <Text 
//          style={{
//            fontWeight:'400',
//            fontSize:22,
//            color:'#000',
//            marginTop:1,
           
//          }}>
//            {/* Dome */}
//            {item.deliveryAddress}
        
//          </Text>
     
//          </View>
//          </View>
//          <View style={{
//            flex:1,
//            flexDirection:'column',
//            marginLeft:80
//          }}>
//            <View style={{
//              width:120,
//              height:35,
//              backgroundColor:"#cccccc",
//              textAlign:'center',
//              borderRadius:8,
//              marginTop:16,
             
//            }}>
//              <Text style={{
//            color:'#17c568',
//            fontSize:19,
//            fontWeight:'bold',
          
//            textAlign:'center',
//            paddingTop:2
          
           
//          }}>
//            {item.orderStatus}
//            {/* Ready to collect */}
//          </Text>
//            </View>
//            <View>
//              <Text style={{
//          fontWeight:'bold',
//          fontSize:20,
//          color:'gray',
//            marginTop:22,
//          }}>Total Payment:</Text>
//              <Text style={{
//            color:'#000',
//            fontSize:20,
//            fontWeight:'700',
//            marginTop:7,
//          }}>
//             $ {item.totalAmount}
//            {/* $3648 */}
//          </Text>
         
//            </View>
//          </View>
        
       
//      </View>
  

//     </View>
//     </ScrollView>
//     )}

    
//     />
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#FFFFFF',
//     width: '90%',
//     minHeight: 200,
//     marginVertical: 10,
//     borderRadius: 10,
//     padding: 15,
//     shadowColor: '#000000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 4,
//   },
//   infoRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 8,
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333333',
//     marginRight: 10,
//   },
//   value: {
//     fontSize: 16,
//     color: '#333333',
//   },
//   deliveryAddress: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333333',
//     marginTop: 8,
//   },
//   statusContainer: {
//     marginTop: 16,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   statusLabel: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#17c568',
//     marginRight: 10,
//   },
//   totalPaymentLabel: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333333',
//     marginTop: 22,
//   },
//   totalPaymentValue: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#000000',
//     marginTop: 7,
//   },
  
// });

// export default CompletedScreen;
