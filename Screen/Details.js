import { View, Text,StyleSheet,Image,ActivityIndicator } from 'react-native'
import React, { useContext, useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { addCards } from './Cards/storeCards'
import { useDispatch, useSelector } from 'react-redux'
import { setAuthLoaded, setAuthToken,setAuthStatus } from './Autho/Slice'
import { setAddCards } from './Cards/sliceCards'
import axios from 'axios'

const Details = ({route}) => {
    const item = route.params
    console.log(item,"item")
    const navigation=useNavigation();
    const dispatch = useDispatch();
    const [isLoading,setIsLoading] = useState(false)
    const selectCards =useSelector((state) => state.cards.card)
    const {authToken} =useSelector((state) => state.auth);
    const AddcardsItem = async()=>{
        setIsLoading(true)
        axios({
            method:"POST",
            url:` https://grocery-9znl.onrender.com/api/v1/cart/add`,
            data:{
                groceryId:item._id, // Assuming item.id is the ID of the grocery item
                count: 1,
            },
            headers:{
                Authorization:`Bearer ${authToken}`,
            },

        })
        .then((response) =>{
            alert("sucess")
            console.log(response,"sucess to add")
            navigation.navigate('Vegetables')

        }).catch((error) =>{
            alert("Fail to Add Carts")
            console.log(error,"fail to add cars")
            navigation.navigate('Vegetables')
        }).finally(()=>{
            setIsLoading(false)

        })
       

    }




    // const addCardsData= (item) =>{
    //     dispatch(setAddCards(item))
       
    // }
    // console.log(addCardsData,"gogss")
    


    
    //  console.log(selectCards,"goosss")
    // const cardsdata=()=>{
    //     return 
    // }
   
    // console.log(item)
  return (
    <View>
      
      <View>
          <Image source={{uri:item.picture} } 
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

              }}> 
              {/* {item.discount} */}
              10%
              </Text>
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
          }}> {item.amount}</Text>
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
            <TouchableOpacity onPress ={ () => 
            
            {
                AddcardsItem() 
           
            }

           
                // addCardsData(item)
                // navigation.navigate("Cards",item)
                }>
                    <View  style={styles.cardsbtn}>
             {/* <TouchableOpacity> */}
             {isLoading?(<ActivityIndicator color={'#fff'} size={22}/>)
             :( <Text style={{
                 color:'#fff'
             }}>
                Add cards
            </Text>)
             }

            </View>
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