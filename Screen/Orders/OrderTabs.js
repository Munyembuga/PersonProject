import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// import InProgressScreen from "./InProgressScreen";
import Onprogress from "./Onprogress";
import CompletedScreen from "./ComplededScreen";
import CanceledScreen from "./CanceledScreen";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();

const OrderTabs = () => {
  return (
   
    <Tab.Navigator
      initialRouteName="CompletedScreen"
      tabBarOptions={{
        activeTintColor: "#17c568",
        inactiveTintColor: "#b5b5b5",
        labelStyle: { fontSize: 14, fontWeight: "bold" },
        indicatorStyle: { backgroundColor: "#17c568" },
      }}
    >
      <Tab.Screen
        name="CompletedScreen"
        component={CompletedScreen}
        options={{ tabBarLabel: "Completed" }}
      />
      {/* <Tab.Screen
        name="InProgress"
        component={InProgressScreen}
        options={{ tabBarLabel: "On Progress" }}
      /> */}
        <Tab.Screen
        name="Onprogress"
        component={Onprogress}
        options={{ tabBarLabel: "On progrss" }}
      />
      <Tab.Screen
        name="CanceledScreen"
        component={CanceledScreen}
        options={{ tabBarLabel: "Canceled" }}
      />
    </Tab.Navigator>
   
  );
};

export default OrderTabs;
