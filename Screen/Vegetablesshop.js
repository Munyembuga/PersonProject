import { View, Text,StyleSheet,Image,TextInput,FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { EvilIcons } from '@expo/vector-icons';
import data from './ShopsJon';
import { TouchableOpacity } from 'react-native-gesture-handler';



const Vegetablesshop = ({route}) => {
  const {title} = route.params
  const navigation = useNavigation();
  navigation.setOptions({
    title: title,
  })
  const filteredData = data.filter((item)=>item.Categories === title)
  console.log("filter data",filteredData)
  return (
    <View>
      <View>
        <View style={styles.search}>
        <TextInput placeholder='search' style={{
       marginLeft:15,
       fontSize:20
       
        }}
        placeholderTextColor="black"/>
        <EvilIcons name="search" size={24} color="black" style={{
          fontWeight:'bold'
        }}/>
        </View>
      {/* <Text>{title}</Text> */}
     
      <FlatList 
      data={filteredData}
      numColumns={2}
      keyExtractor ={(item)=> item.id} 
      renderItem={({ item }) =>(
        <TouchableOpacity onPress={() => navigation.navigate("Details",{item:item})}>
        <View style={styles.container}>
          <Image source={item.image} style={styles.image}/>
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
        color:'Gray'

      }}>{item.price}/Kg</Text>
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
        {item.discount}
      </Text>
      <Text style={{
        
        marginLeft:10,
        fontWeight:'700',
        color:'black',
        fontSize:18,
        fontWeight:'400'

      }}
      >{item.afterdiscount}</Text>
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
    marginLeft:15


  },
  image:{
    width:150,
    height:190,
    objectFit:'contain'
  },
  shopdown:{
    flexDirection:'row',
    marginTop:10
  },
  search:{
    width:'80%',
    height:20,
    flexDirection:'row',
    marginVertical:20,
    justifyContent:'space-between'
  }
})



export default Vegetablesshop