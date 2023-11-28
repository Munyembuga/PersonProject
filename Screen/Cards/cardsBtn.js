import { View, Text,StyleSheet,Image,ActivityIndicator } from 'react-native'
import React from 'react'

const cardsBtn = (route) => {
    const item =route.params
  return (
    <View>
      <Text>cardsBtn</Text>
      <View style={styles.ContainerCards}
      
      >
        <View style={{
          flexDirection:'column',
          flex:1
        }}>
          <Text
            style={{
              backgroundColor: "#fbb62d",
              width: 40,
              height: 20,
              borderRadius: 3,
              color: "white",
              paddingLeft: 4,
            }}
          >
            {" "}
            {/* {item.discount} */}
            10%
            
           
          </Text>
          <Image
            source={{uri: item.grocery.picture}}
            style={{
              width: 90,
              height: 90,
              objectFit: "contain",
              // marginLeft:-10
            }}
          />
        </View>
        {/* <View style={{
          flexDirection:'row',
        }}> */}
         
        <View
          style={{
            // marginLeft: -50,
            flexDirection: "column",
            flex:1,
            marginLeft:40
          
            // justifyContent:'center'
          }}
        >
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
          {item.grocery.name}
            {/* Oranges */}
          </Text>
          <Text
            style={{
              color: "#b5b5b5",
              fontSize: 15,
              marginVertical:8,
            }}
          >
            {item.grocery.amount}
            {/* 200gr/package */}
          </Text>
          <Text
            style={{
              color: "#17c568",
              fontWeight: "bold",
              fontSize: 25,
              // marginVertical:10
            }}
          >
            $ {item.grocery.price}
            {/* $19.6 */}
          </Text>
        </View>
        <View
          style={{
            // marginLeft: 26,
            flexDirection: "column",
            flex:1,
            marginLeft:20,
            marginTop:18
            // justifyContent:'center'
            // justifyContent:'space-between'
          }}
        >
          <TouchableOpacity >

         
          <View
            style={{
              flexDirection: "row",
              marginRight:10
           
            }}
          >
            <MaterialIcons name="delete" size={24}
             color="#ffb82e" />
            <Text
              style={{
                marginLeft: 10,
                color: "#ffb82e",
                fontWeight: "bold",
                fontSize:16
              }}
            >
              Delete
            </Text>
          </View>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              marginTop: 20,
            }}
          >
            <TouchableOpacity
              onPress={() =>{decrementAmountCards(item.grocery._id)}}
            >
              <AntDesign name="minus" size={20} 
              color="#b5b5b5" />
            </TouchableOpacity>
            {/* {isLoading ?(<ActivityIndicator  
            color={'black'} size={22}/>) 
              : 
            <Text
              style={{
                marginHorizontal: 10,
              }}
            >
             {item.count}
            </Text>
            } */}
             <Text
              style={{
                marginHorizontal: 10,
              }}
            >
             {item.count}
            </Text>
            
            <TouchableOpacity  onPress={() => {incrementAmountCards(item.grocery._id)}}>
              <AntDesign name="plus" size={20} color="#17c568" />
            </TouchableOpacity>
          </View>
        </View>
        {/* </View> */}
      </View>

    
    </View>
  )
}
const styles = StyleSheet.create({
    ContainerCards: {
      flexDirection: "row",
      marginLeft: 20,
      justifyContent:"space-between",
      
      backgroundColor:'#2021',
      borderRadius: 8,
      paddingVertical: 10,
      marginVertical: 10,
      // marginHorizontal:10,
      paddingHorizontal: 25,
      marginRight:20
  
     
  
    },
  });

export default cardsBtn