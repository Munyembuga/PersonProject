import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Cards = ({route}) => {
  const {item} =route.params;
  console.log(item)

  const navigation=useNavigation()
  return (
    <View>
      <Text
        style={{
          marginTop: 50,
          marginLeft: 30,
          color: "black",
          fontSize: 20,
          fontWeight: "bold",
          marginBottom: 30,
        }}
      >
        Cards
      </Text>
      <View style={styles.ContainerCards}>
        <View>
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
            {item.discount}
          </Text>
          <Image
            source={item.image}
            style={{
              width: 90,
              height: 90,
              objectFit: "contain",
            }}
          />
        </View>
        <View
          style={{
            marginLeft: 30,
            flexDirection: "column",
          }}
        >
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
           {item.name}
          </Text>
          <Text
            style={{
              color: "#b5b5b5",
              fontSize: 15,
              marginVertical: 8,
            }}
          >
            {item.package}
          </Text>
          <Text
            style={{
              color: "#17c568",
              fontWeight: "bold",
              fontSize: 25,
              // marginVertical:10
            }}
          >
            ${item.price}
          </Text>
        </View>
        <View
          style={{
            marginLeft: 60,
            flexDirection: "column",
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <MaterialIcons name="delete" size={14} color="#ffb82e" />
            <Text
              style={{
                marginLeft: 10,
                color: "#ffb82e",
                fontWeight: "bold",
              }}
            >
              Delete
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 20,
            }}
          >
            <TouchableOpacity>
            <AntDesign name="minus" size={20} color="#b5b5b5" />

            </TouchableOpacity>
            <Text
              style={{
                marginHorizontal: 10,
              }}
            >
              4
            </Text>
            <TouchableOpacity>
            <AntDesign name="plus" size={20} color="#17c568" />

            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{
         marginTop:350,
       }}
       
      >
        <View style={{
       flexDirection:'row'
        }} >
          <Text style={{
            color:'#b5b5b5',
            fontSize:20,
            marginLeft:30,
            marginTop:8
          }}>Total</Text>
          <Text style={{
            marginLeft:220,
            color:'black',
            fontSize:25,
            fontWeight:"bold"
          }}>$87</Text>
        </View>
        <TouchableOpacity onPress={() =>navigation.navigate("Paymentform")}>

       
        <View style={{
          backgroundColor:'#17c568',
          width:'70%',
          height:30,
          alignItems:'center',
          borderRadius:5,
          marginVertical:25,
          marginHorizontal:50
        }}>
          <Text style={{
            color:'white',
            fontSize:20,
            fontWeight:'bold',

          }}>Checkout</Text>
        </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  ContainerCards: {
    flexDirection: "row",
    marginLeft: 30,
  },
});

export default Cards;
