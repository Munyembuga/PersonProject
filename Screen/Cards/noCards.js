import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const noCards = () => {
  const navigation= useNavigation();
  return (
    <View style={styles.container}>
     
      {/* Your completed orders content goes here */}
      <Text style={{
        marginLeft:30,
        fontSize:20,
        fontWeight:'bold',
        color:'black',
      }}>My Cards</Text>
      <View>
        {/* <View style={{
          flexDirection:'row',
          justifyContent:'space-around',
          marginTop:30

        }}>
          <TouchableOpacity>
            <Text style={{
              fontSize:17,
              color:'#b5b5b5'
            }}>Completed</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{
              fontSize:17,
              color:'#b5b5b5'
            }}>On Progress</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{
              fontSize:17,
              color:'#b5b5b5'
            }}>Canceled</Text>
          </TouchableOpacity>
        </View> */}
        <View style={{
          alignItems:'center',
          justifyContent:'center',
          marginTop:170
          // margin:'auto'

        }}>
          <Image source={require('../../assets/OrderImage/Ordershop.png')} style={{
            
           
          }}/>
          <Text style={{
            fontSize:18,
            marginTop:10

          }}>You don't have any Card yet</Text>
          <TouchableOpacity onPress={ () =>navigation.navigate("Shops")}>
          <View style={{
            width:150,
            height:30,
            backgroundColor:'#08c25e',
            borderRadius:10,
            marginTop:30
          }}>
            
            <Text style={{
              color:'white',
              paddingLeft:40,
              paddingTop:2,
              fontWeight:'400',
              fontSize:17
            }}>Shop Now</Text>
          </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop:-150
  },
});

export default noCards