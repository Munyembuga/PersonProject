import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'


const Details = ({route}) => {
    const {item} = route.params
    const navigation=useNavigation();
   
    console.log(item)
  return (
    <View>
      
      <View>
          <Image source={
              item.image
          } 
          style={styles.image}/>
          <View style={styles.title}>
              <Text style={{
                  marginLeft:20,
                  fontSize:20,
                  fontWeight:'bold',
                  marginTop:7
              }}>
                  {item.name}
              </Text>
              <Text style={{
                  backgroundColor:'#febd3d',
                  width:40,
                  height:30,
                  alignItems:'center',
                  textAlign:'center',
                  marginTop:5,
                  borderRadius:6,
                  color:'white',
                  marginHorizontal:30,
                  paddingTop:5

              }}>{item.discount}</Text>
          </View>
          <Text style={
              styles.price
          }
          >${item.price}</Text>
          <Text style={styles.amount}> Amount</Text>
          <Text style={{
             
              color:'gray',
              fontSize:20,
              marginLeft:15,
          }}> {item.package}</Text>
          <Text style={{
              color:'#000',
              fontSize:20,
              marginLeft:15,
              marginTop:30,
              fontWeight:'700'


          }}>Description</Text>
          
              <Text style={{
                   marginLeft:14,
                   marginTop:10,
                   fontSize:14,
                   color:'gray',
                   marginRight:14
              }} >
            {item.description}
              </Text>
            <TouchableOpacity onPress ={() => navigation.navigate("Cards",{item:item})}>
                <Text style={styles.cardsbtn}>
                    Add cards
                </Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    image:{
        width:'90%',
        height:200,
        objectFit:'contain',
        marginTop:30,
        backgroundColor:'white'

    },
    title:{
        flexDirection:'row',
        marginTop:40

    },
    price:{
        marginLeft:22,
        fontWeight:'400',
        color:'#00be5e',
        fontSize:20,
        marginTop:30
    },
    amount:{
        color:'gray',
        fontSize:15,
        marginLeft:15,
        marginTop:10,
        fontWeight:'600',
    },
    cardsbtn:{
        backgroundColor:'#00be5e',
        width:'70%',
        height:30,
        textAlign:'center',
        alignItems:'center',
        marginTop:40,
        marginLeft:45,
        paddingTop:5,
        borderRadius:10,
        color:'white'
    }

})

export default Details