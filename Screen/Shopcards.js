    import { View, Text, Image,StyleSheet, Pressable, TouchableOpacity,FlatList } from 'react-native'
    import React from 'react'
   import Shopsbtn from './Shopsbtn'
   import Overview from './Shopsheader'
  
   import { useNavigation } from '@react-navigation/native';
    import { createNativeStackNavigator } from '@react-navigation/native-stack';

    const Shopcards = () => {
        const navigation = useNavigation();
    return (
        <View style={{
            marginHorizontal:10
        }}>
        <FlatList
       
            data={Overview}
            numColumns={4}
            keyExtractor ={(item)=> item.id} 
            renderItem={({ item }) =>(
                < TouchableOpacity onPress={()=>{navigation.navigate("Vegetables",{title:item.name})}}>

                <View style={styles.container}>
                    <Image source={item.image} style={styles.image}/>
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