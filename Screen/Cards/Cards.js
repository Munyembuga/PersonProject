import { View, Text, Image, StyleSheet,FlatList,ActivityIndicator ,ScrollView} from "react-native";
import React,{useState,useEffect} from "react";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCard,incrementAmount,setItemcards } from "./sliceCards";
import { setAuthToken,setAuthLoaded,setAuthStatus } from "../Autho/Slice";
import { getItemAsync } from "expo-secure-store";
import { useIsFocused } from '@react-navigation/native';
import NoCards from "./noCards";
import axios from "axios";
import CardsBtn from "./cardsBtn";

const Cards = () => {
  const isFocused = useIsFocused()
  const dispatch = useDispatch();
  const {authToken} =useSelector((state) => state.auth);
  const[userCards,setUserCards] =useState([])
  const [count,setcount] =  useState(0)
  const [isLoading,setIsLoading] = useState(false)
  console.log(isLoading);

  const fetchCards =() =>{
    axios({
      method:'GET',
      url: `https://grocery-9znl.onrender.com/api/v1/cart/`,
      headers:{
          Authorization:`Bearer ${authToken}`,
      },
  }).then((response) =>{
    setUserCards(response.data.data.items)
    console.log(response.data.data.items,"user cards")
    // console.log(response.data.data.items,"user cards")
  }).catch((error)=>{
    console.errlogor(error,"error to fetch");
  })
  }

  useEffect(()=>{
    console.log("Perfect")
    fetchCards()
  },[isFocused, count,isLoading])
  
  console.log(count)

const incrementAmountCards = (itemId) => {
  
  const index = userCards.findIndex((cartItem) => cartItem.grocery._id === itemId);
  setIsLoading(true)
  axios({
    method: 'PATCH',
    url: `https://grocery-9znl.onrender.com/api/v1/cart/updateItem/${itemId}`,
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
    data: {
      count: userCards[index].count + 1,
    },
  })
    .then((response) => {
      
      alert("sucess")
      setcount(count+1)
      const updatedUserCards = [...userCards];
      updatedUserCards[index] = response.data.data.item;
      setUserCards(updatedUserCards);
      
    console.log(response.data, "Item count updated successfully");
     
  })
    .catch((error) => {
      console.log("Error updating item count:", error.response.data);
    })
   .finally(()=>{
     setIsLoading(false)
     
   })
  
};


const decrementAmountCards = (itemId) => {
  setIsLoading(true)
  const index = userCards.findIndex((cartItem) => cartItem.grocery._id === itemId);

  if (userCards[index].count > 1) {
    axios({
      method: 'PATCH',
      url: `https://grocery-9znl.onrender.com/api/v1/cart/updateItem/${itemId}`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      data: {
        count: userCards[index].count - 1,
      },
    })
      .then((response) => {
        alert("sucess")
        setcount(count-1)
        const updatedUserCards = [...userCards];
        updatedUserCards[index] = response.data.data.item;
        setUserCards(updatedUserCards);
        
        console.log(response.data, "Item count updated successfully");
        setIsLoading(false)
        
      })
      .catch((error) => {
        console.log("Error updating item count:", error.response.data);
      })
      .finally(()=>{
        setIsLoading(false)
        
      })
  } else {
    // Handle the case where count is 1 and user tries to decrease further (optional)
    console.log("Item count cannot be less than 1");
  }
};
  const [total, setTotal] = useState(0); // Initialize total to 0

  useEffect(() => {
    // Calculate total price based on item count
    const calculatedTotal = userCards.reduce(
      (accumulator, item) => accumulator + item.grocery.price * item.count,
      0
    );
    setTotal(calculatedTotal);
  }, [userCards]); // Update total whenever userCards changes


  const navigation = useNavigation();

  if (userCards.length === 0) {
    return <NoCards />;
  }
  return (
   
    <ScrollView>
<View>
   <View>
    
    </View>
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
        Carts
      </Text>
      <FlatList 
    data={userCards}
    numColumns={1}
    keyExtractor ={(item)=> item._id} 
    renderItem={({item}) =>( 
      // <CardsBtn  item={item._id}/>
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
            {isLoading ?(<ActivityIndicator  
            color={'#17c568'} size={22}/>) 
              : 
            <Text
              style={{
                marginHorizontal: 10,
              }}
            >
             {item.count}
            </Text>
            }
            <TouchableOpacity  onPress={() => {incrementAmountCards(item.grocery._id)}}>
              <AntDesign name="plus" size={20} color="#17c568" />
            </TouchableOpacity>
          </View>
        </View>
        {/* </View> */}
      </View>

      
    )
  }
    />

      
      <View
        style={{
          marginTop: 30,
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              color: "#b5b5b5",
              fontSize: 20,
              marginLeft: 30,
              marginTop: 8,
            }}
          >
            Total
          </Text>
          <Text
            style={{
              marginLeft: 220,
              color: "black",
              fontSize: 25,
              fontWeight: "bold",
            }}
          >
            ${total}
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Paymentform",
        
        {
        totalAmount:total,
        bottomTabBarVisible: true,}
        )}>
          <View
            style={{
              backgroundColor: "#17c568",
              width: "70%",
              height: 30,
              alignItems: "center",
              borderRadius: 5,
              marginVertical: 25,
              marginHorizontal: 50,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Checkout
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      
    </View>


 </View>
 </ScrollView>

  )
};
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

export default Cards;
