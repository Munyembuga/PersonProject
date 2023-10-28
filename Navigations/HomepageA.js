import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View, Text } from 'react-native';
import { FontAwesome5 ,FontAwesome,Zocial,MaterialCommunityIcons ,Foundation } from '@expo/vector-icons';
import Home from '../Screen/Home';
import Shops from '../Screen/Orders/Shops';
import Cards from '../Screen/Cards/Cards';
import Profile from '../Screen/Profile/Profile';
import Homescreen from '../Screen/Ancountscreen';
import OrderTabs from '../Screen/Orders/OrderTabs';
const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
    return (
        <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: '#08c25e',
          tabBarLabelStyle: {
            fontSize: 16,
            // marginTop:10,
            // marginBottom:2,
             // Adjust the font size of the tab names
          },
        }}
      >
       
            <Tab.Screen name="Shops"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                       
                        // <FontAwesome name="shopping-basket" size={34} color={color} style={{
                        //     marginBottom:-4
                        // } }/>
                        <FontAwesome5 name="shopping-cart"  size={30} color={color}
                        style={{
                            
                            marginTop:-12
                        } }/>
                        
                     
                        
                      
                        
                    ),
                    headerShown:false
                }}

            
            />
            <Tab.Screen
                name="Cards"
                component={Cards}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Zocial name="cart" size={40} color={color} 
                        
                        style={{
                           
                            marginTop:-18
                        } }/>
                    ),
                    headerShown:false
                }}
            />
            <Tab.Screen 
                name="Orders"
                component={OrderTabs}
                options={{
                    tabBarIcon:({color})=>(
                        <FontAwesome name="shopping-bag" size={34} 
                        color={color}
                        style={{
                           
                            marginTop:-18
                        } }
                         />
                        // <Foundation name="shopping-cart" size={34} color={color} />
                    )
                }}
            />
             <Tab.Screen 
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon:({color})=>(
                        <MaterialCommunityIcons name="account" size={34} 
                        color={color}
                        style={{
                           
                            marginTop:-18
                        } }
                        />
                    )
                }}
            />
        </Tab.Navigator>




    )
}

export default HomeNavigator