import { View, Text ,StyleSheet,Image} from 'react-native'
import React from 'react'

const Promos2 = () => {
  return (
    <View>
      
      <View style={styles.Promoscontainer}>
          <View style={styles.Promosbtn}>
              <Text style={{
                  fontSize:20,
                  color:'white',
                  fontFamily:'bold',
                  
              }}>ORANGES</Text>
              <Text  style={{
                  fontSize:20,
                  color:'white',
                  fontFamily:'bold'
                  
              }}>% OFF</Text>
              <View style={{
                  backgroundColor:'#695ccd',
                  width:120,
                  height:30,
                  borderRadius:4,
                  marginTop:30
              }}>
              <Text  style={{
                  fontSize:20,
                  color:'#fff',
                  fontFamily:'bold',
                  paddingLeft:24
                  
              }}>Buy now</Text>
              </View>
            
          </View>
          <View>
              <Image source={require('../../assets/Vegetables/Orange.png')} style={{
                  width:130,
                  height:150,
                  objectFit:'contain',
                  marginLeft:70,
                  marginTop:20,

                  
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
  )
}
 const styles = StyleSheet.create({
    Promoscontainer:{
        flexDirection:'row',
        display:'flex',
        backgroundColor:'#fbb62d',
        borderRadius:9,
        marginLeft:5,
        marginRight:5,
        marginTop:30

        
    },
    Promosbtn:{
        marginLeft:30,
        marginTop:30
    }

    
})

export default Promos2