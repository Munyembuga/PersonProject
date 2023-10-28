import { View, Text ,StyleSheet,Image} from 'react-native'
import React from 'react'
import Promos1 from './Promos1'
import Promos2 from './Promos2'
import Promos3 from './Promos3'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import prom from './PromoJson'

const Promos = () => {
    const navigation = useNavigation()
     const renderItem =({item,index}) =>{ 
        const backgroundColors = ['#FFC0CB', '#FFD700', '#98FB98', '#87CEEB', '#FFA07A'];

    // Get a background color based on the item's index
    const backgroundColor = backgroundColors[index % backgroundColors.length];
    return(
        <ScrollView>
        <View>
      
{/* <Promos1/> */}


   <View style={[styles.Promoscontainer,{backgroundColor}]}>
       <View style={styles.Promosbtn}>
           <Text style={{
               fontSize:20,
               color:'white',
               fontWeight:'700',
               
           }}>
               {/* ORANGES */}
           {item.name}
           </Text>
           <Text  style={{
               fontSize:20,
               color:'white',
               fontWeight:'700',
               
           }}>10% OFF</Text>
             <TouchableOpacity onPress={()=>navigation.navigate("PromosDetails",item)}>

           <View style={{
               backgroundColor:'#ffb82e',
               width:120,
               height:30,
               borderRadius:4,
               marginTop:30
           }}>
           <Text  style={{
               fontSize:20,
               color:'#fff',
               fontWeight:'bold',
               paddingLeft:24
               
           }}>Buy now</Text>
           </View>
           </TouchableOpacity>
         
       </View>
       <View>
           <Image source={item.image} style={{
               width:130,
               height:150,
               objectFit:'contain',
               marginLeft:70,
               marginTop:10,

               
           }}/>
       </View>
       
   </View>
   <View style={{
       marginLeft:20,
       marginTop:10
   }}>
       <Text style={{
           color:'black',
           fontWeight:'bold'
       }}>Bananas 5% Off Promos </Text>
       <Text style={{
           color:'#b5b5b5',
           fontWeight:'bold'
       }}>Available until 24 july 2024</Text>
   </View>
   
 </View>
 </ScrollView>
        
    )

     }
  return (

    <View>
        <FlatList
        data={prom}
        keyExtractor={(item) => item.id}
        renderItem={renderItem} 
      />
       
      
           </View>
  )
}
 const styles = StyleSheet.create({
    Promoscontainer:{
        flexDirection:'row',
        display:'flex',
        backgroundColor:'#00be5e',
        borderRadius:9,
        marginLeft:15,
        marginRight:15,
        marginTop:20,
        height:155

        
    },
    Promosbtn:{
        marginLeft:30,
        marginTop:20
    }

    
})

export default Promos