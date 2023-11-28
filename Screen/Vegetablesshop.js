import { View, Text,StyleSheet,Image,TextInput,FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { EvilIcons } from '@expo/vector-icons';
import data from './ShopsJon';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';
import { useSelector } from 'react-redux';



const Vegetablesshop = ({route}) => {
  const category = route.params
  const navigation = useNavigation();
  // navigation.setOptions({
  //   title: title,
  // })
  // const filteredData = data.filter((item)=>item.Categories === title)
  // console.log("filter data",filteredData)
  const {authToken} =useSelector((state) => state.auth);
    const [grocery,setGrocery] = useState([])
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredGrocery, setFilteredGrocery] = useState([]);
    const fetchGrocery= async () =>{
        axios({
            method:'GET',
            url: ` https://grocery-9znl.onrender.com/api/v1/grocery/bycategory/${category._id}`,
            headers:{
                Authorization:`Bearer ${authToken}`,
            },
        })
        .then((response) =>{
            // console.log(response,"Response")
            setGrocery(response.data.data)
        })
        .catch((error)=>{
            console(error,"error"),
            alert(error.response.data.message)
        })
    }
    useEffect(()=>{
        if(authToken){
            fetchGrocery()
        }
    }),[authToken]
    useEffect(() => {
      // Filter grocery items based on the search query
      const filteredData = grocery.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredGrocery(filteredData);
    }, [searchQuery, grocery]);
  return (
    <View>
      <View>
        <View style={styles.search}>
        <TextInput placeholder='search'
        onChangeText ={(text) => setSearchQuery(text)}
        value={searchQuery} 
       style={{
       marginLeft:15,
       fontSize:20,
      
       
        }}
        placeholderTextColor="black"/>
        <EvilIcons name="search" size={24} color="black" style={{
          fontWeight:'bold',
          marginRight:10,
          textAlign:'center',
          marginTop:2
        }}/>
        </View>
      {/* <Text>{title}</Text> */}
     
      <FlatList 
      data={filteredGrocery}
      numColumns={2}
      keyExtractor ={(item)=> item.id} 
      renderItem={({ item }) =>(
        <TouchableOpacity onPress={() => {navigation.navigate("Details",item)}}>
        <View style={styles.container}>
          <Image source={{uri:item.picture}} style={styles.image}/>
          <Text style={{
        alignItems:'center',
        marginLeft:10,
        fontWeight:'700',
        color:'black',
        fontSize:20,


      }}>{item.name}</Text>
       <Text
       style={{
        marginLeft:10,
        fontWeight:'400',
        color:'gray',

      }}>{item.amount}</Text>
      <View style={styles.shopdown}>
      <Text style={{
        backgroundColor:'#febd3d',
        color:'white',
        width:35,
        height:25,
        marginHorizontal:10,
        borderRadius:5,
        textAlign:'center'
      }}
      >
        {/* {item.discount} */}
        10%
      </Text>
      <Text style={{
        
        marginLeft:10,
        fontWeight:'700',
        color:'black',
        fontSize:18,
        fontWeight:'400'

      }}
      >${item.price}</Text>
      <Text
      style={{
        width:25,
        height:25,
        backgroundColor:'#08c25e',
        color:'white',
        marginLeft:20,
        textAlign:'center',
        borderRadius:5,
        
      }}>
        +
      </Text></View>
      
        </View>
        </TouchableOpacity>

      )}

      />
{/* 
      <View style={styles.container}>
     <Image source={require('../assets/Vegetables/Karoti.png')} style={styles.image}/>
      <Text style={{
        alignItems:'center',
        marginLeft:10,
        fontWeight:'700',
        color:'black',
        fontSize:20,


      }}>Karoti</Text>
      <Text
       style={{
    
        marginLeft:10,
        fontWeight:'400',
        color:'Gray'

      }}>$1.4/Kg</Text>
      <View style={styles.shopdown}>
      <Text style={{
        backgroundColor:'#febd3d',
        color:'white',
        width:35,
        height:25,
        marginHorizontal:10,
        borderRadius:5,
        textAlign:'center'
      }}
      >
        10%
      </Text>
      <Text style={{
        
        marginLeft:10,
        fontWeight:'700',
        color:'black',
        fontSize:18,
        fontWeight:'400'

      }}
      >$1.4</Text>
      <Text
      style={{
        width:25,
        height:25,
        backgroundColor:'#08c25e',
        color:'white',
        marginLeft:40,
        textAlign:'center',
        borderRadius:5,
        
      }}>
        +
      </Text></View>
      </View> */}
     
      </View>
      

    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    // borderColor:'Gray',
    // borderWidth:2,
    width:180,
    height:300,
    marginLeft:10,
    backgroundColor:'#2021',
    marginHorizontal:4,
    marginVertical:2


  },
  image:{
    width:150,
    height:190,
    objectFit:'contain',
    marginLeft:10
  },
  shopdown:{
    flexDirection:'row',
    marginTop:10
  },
  search:{
    width:'85%',
    height:26,
    flexDirection:'row',
    marginVertical:20,
    justifyContent:'space-between',
    backgroundColor:'#2021',
    marginLeft:10,
    borderRadius:20
  }
})



export default Vegetablesshop