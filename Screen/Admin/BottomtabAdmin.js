import { View, Text } from 'react-native'
import React from 'react'
import Home from '../Home';
import Profile from '../Profile/Profile';
import { FontAwesome5 ,FontAwesome,Zocial,MaterialCommunityIcons ,Foundation } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Statistics from './Statistics';
import ProfleAdmin from './ProfleAdmin';

const BottomtabAdmin = () => {
const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
        initialRouteName="Statistics"
    
        screenOptions={{
          tabBarActiveTintColor: '#08c25e',
          tabBarLabelStyle: {
            fontSize: 16,
       
          },
          tabBarStyle:{
              height:60,
     
          }
          
         
        }}
       
       
      >
       
            <Tab.Screen name="Statistics"
                component={Statistics}
                options={{
                    tabBarIcon: ({ color }) => (
                       
                        
                        <FontAwesome5 name="shopping-cart"  size={30} color={color}
                        style={{
                           
                            // marginTop:-12
                        } }/>
                        
                     
                        
                      
                        
                    ),
                    headerShown:false
                }}

            
            />
           
             <Tab.Screen 
                name="Profle"
                component={Profile}
                options={{
                    tabBarIcon:({color})=>(
                        <MaterialCommunityIcons name="account" size={30} 
                        color={color}
                        style={{
                           
                            // marginTop:-18
                        } }
                        />
                    )
                }}
            />
        </Tab.Navigator>

  )
}

export default BottomtabAdmin