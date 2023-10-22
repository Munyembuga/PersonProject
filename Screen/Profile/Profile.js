import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Homescreen from '../Ancountscreen'
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


const Profile = () => {
  const navigation= useNavigation();
  return (
    <View>
      <View>
        <Text style={{
          marginLeft:20,
          fontSize:18,
          fontWeight:'bold',
        }}>My Account</Text>
      </View>
      <View style={styles.Imagecontainer}>
        <Image source={require('../../assets/Profileimage.jpg')} style={{
          width:100,
          height:100,
          borderRadius:50,
          
       
        }}/>
        <Text style={{
          fontSize:20,
          color:'black',
          fontWeight:'bold'

        }}>Jonathan Doe</Text>
        <Text style={{
          fontSize:15,
          color:'gray',
          fontWeight:'500',
          marginTop:3

        }} >jonathandoe@gmail.com</Text>
        <TouchableOpacity  onPress={()=>navigation.navigate("EditProfile")}>
        <View style={styles.editcontainer}>
         <MaterialCommunityIcons name="account-edit" size={24} color="white" style={{
           marginTop:-2
         }}/>
          <Text style={{
            color:'white',
            marginLeft:10
          }}>Edit Profile</Text>
        </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate("EditProfile")}>
      <View style={{
        marginTop:40,
      }} >
        <Text style={{
          marginLeft:20,
          color:'black',
          fontSize:17,
          fontWeight:'700',
         
        }}>Profile Settings</Text>
       
        <View style={{
          flexDirection:'row',
          justifyContent:'space-between',
          marginHorizontal:20,
          color:'b5b5b5'
        }}>
        <Text>Change Your Basic Profile</Text>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="#00be5e" />
        </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate("Promos")}>
      <View style={{
        marginTop:10,
      }}>
        <Text style={{
          marginLeft:20,
          color:'black',
          fontSize:17,
          fontWeight:'700',
          
        }}>Promos</Text>
       
        <View style={{
          flexDirection:'row',
          justifyContent:'space-between',
          marginHorizontal:20,
          color:'b5b5b5'
        }}>
        <Text>Last Promo from us</Text>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="#00be5e" />
        </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("Myaddress")}>
      <View style={{
        marginTop:10,
      }}>
        <Text style={{
          marginLeft:20,
          color:'black',
          fontSize:17,
          fontWeight:'700',
          
        }}>My address</Text>
       
        <View style={{
          flexDirection:'row',
          justifyContent:'space-between',
          marginHorizontal:20,
          color:'b5b5b5'
        }}>
        <Text>Your Profile</Text>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="#00be5e" />
        </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={{
        marginTop:10,
      }}>
        <Text style={{
          marginLeft:20,
          color:'black',
          fontSize:17,
          fontWeight:'700',
          
        }}>Terms,Privacy & Policy</Text>
       
        <View style={{
          flexDirection:'row',
          justifyContent:'space-between',
          marginHorizontal:20,
          color:'b5b5b5'
        }}>
        <Text>Think you may want know</Text>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="#00be5e" />
        </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={{
        marginTop:10,
      }}>
        <Text style={{
          marginLeft:20,
          color:'black',
          fontSize:17,
          fontWeight:'bold',
          
        }}>Helps & Support </Text>
       
        <View style={{
          flexDirection:'row',
          justifyContent:'space-between',
          marginHorizontal:20,
          color:'b5b5b5'
        }}>
        <Text>Get support from us</Text>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="#00be5e" />
        </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View>
        <Text style={{
          marginLeft:20,
          fontSize:15,
          color:'#b5b5b5'
        }}>Logout</Text>
      </View>
      </TouchableOpacity>
      {/* <Homescreen/> */}
    </View>
  )
}

const styles = StyleSheet.create({
  Imagecontainer:{
 
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    marginTop:5
   
  },
  editcontainer:{
    flexDirection:'row',
    width:150,
    backgroundColor:'#00be5e',
    color:'white',
    textAlign:'center',
    paddingLeft:26,
    borderRadius:5,
    height:30,
    paddingTop:5,
    marginTop:15
  }
})

export default Profile