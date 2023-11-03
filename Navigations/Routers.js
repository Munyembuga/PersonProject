import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from '@react-navigation/native'
// import Landing from '../Sreens/Landing'
import Home from "../Screen/Home";
import Profile from "../Screen/Profile/Profile";
import Shops from "../Screen/Orders/Shops";
import Cards from "../Screen/Cards/Cards";
import HomeNavigator from "./HomepageA";
import Vegetablesshop from "../Screen/Vegetablesshop";
// import All from '../Screen/All'
import Login from "../Screen/Login";
import SignUp from "../Screen/SignUp";
import Homescreen from "../Screen/Ancountscreen";
import Details from "../Screen/Details";
import Orders from "../Screen/Orders/Orders";
import EditProfile from "../Screen/Profile/EditProfile";
import Promos from "../Screen/Profile/Promos";
import PromosDetails from "../Screen/Profile/PromosDetails";
import Paymentform from "../Screen/Payment/Paymentform";
import Trackorder from "../Screen/Payment/Trackorder";
import Onprogress from "../Screen/Orders/Onprogress";
import CanceledScreen from "../Screen/Orders/CanceledScreen";
import CompletedScreen from "../Screen/Orders/ComplededScreen";
import OrderTabs from "../Screen/Orders/OrderTabs";
import Myaddress from "../Screen/Profile/Address/Myaddress";
import AddAdress from "../Screen/Profile/Address/AddAdress";
import GetStart from "../Screen/Start/GetStart";
import { useSelector, useDispatch } from "react-redux";
import { getItemAsync, setItemAsync } from "expo-secure-store";
import {
  setAuthStatus,
  setAuthLoaded,
  setAuthToken,
  setAuthoProfile,
} from "../Screen/Autho/Slice";
import * as SplashScreen from "expo-splash-screen";
import BottomtabAdmin from "../Screen/Admin/BottomtabAdmin";
import Statistics from "../Screen/Admin/Statistics";
import ProfleAdmin from "../Screen/Admin/ProfleAdmin";

const Stack = createStackNavigator();
const users = () => {
  <Stack.Navigator>
  
  </Stack.Navigator>;
};
const Router = () => {
  SplashScreen.preventAutoHideAsync();
  const { authStatus, authLoaded, authProfile } = useSelector(
    (state) => state.auth
  );
  // console.log(authProfile, "Auth profile gsajksd");
  const dispatch = useDispatch();
  console.log(authStatus, "authostatus");
  const handleAuth = async () => {
    let token = await getItemAsync("authToken");
    let profile = await getItemAsync("authProfile");
    dispatch(setAuthToken(token));
    dispatch(setAuthoProfile(JSON.parse(profile)));
    if(token)
    {
    dispatch(setAuthStatus(true))
    }
   
    dispatch(setAuthLoaded(true));
    SplashScreen.hideAsync();
};

useEffect(() => {
    handleAuth();
  },[]);
  if (!authLoaded) {
    return null;
  }
  
  console.log(authProfile, "authoProfileahjjnbdsan");
  return (
    <Stack.Navigator>
      {authStatus ? (
        <>
          {authProfile.role == "user" && (
            <>
          <Stack.Screen
            name={"HomeNavigator"}
            component={HomeNavigator}
            options={{
              headerShown: false,
            }}
          />
            <Stack.Screen
      name={"Shops"}
      component={Shops}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen name={"Carts"} component={Cards} />

    <Stack.Screen
      name={"Profile"}
      component={Profile}
      // options={{
      //     headerShown: false
      // }}
    />

    <Stack.Screen
      name={"Details"}
      component={Details}
      options={
        {
          // headerShown: false
        }
      }
    />
    <Stack.Screen
      name={"Vegetables"}
      component={Vegetablesshop}
      options={
        {
          // headerShown: false
        }
      }
    />
    <Stack.Screen
      name={"PromosDetails"}
      component={PromosDetails}
      options={{
        // headerShown: false
        title: "Promos Details",
      }}
    />

    <Stack.Screen
      name={"EditProfile"}
      component={EditProfile}
      options={{
        // headerShown: false
        title: "Edit Profile",
      }}
    />
    <Stack.Screen
      name={"Promos"}
      component={Promos}
      options={{
        // headerShown: false
        title: "Promos Available",
      }}
    />
    <Stack.Screen
      name={"Paymentform"}
      component={Paymentform}
      options={{
        // headerShown: false
        title: "Payment",
      }}
    />
    <Stack.Screen
      name={"Trackorder"}
      component={Trackorder}
      options={{
        // headerShown: false
        title: "Check Out",
      }}
    />
    <Stack.Screen
      name={"Onprogress"}
      component={Onprogress}
      options={{
        // headerShown: false
        title: "Check Out",
      }}
    />
    <Stack.Screen
      name={"CompletedScreen"}
      component={CompletedScreen}
      options={{
        // headerShown: false
        title: "Check Out",
      }}
    />
    <Stack.Screen
      name={"CanceledScreen"}
      component={CanceledScreen}
      options={{
        // headerShown: false
        title: "Check Out",
      }}
    />
    <Stack.Screen
      name={"OrderTabs"}
      component={OrderTabs}
      options={{
        // headerShown: false
        title: "Orders",
      }}
    />
    <Stack.Screen
      name={"Myaddress"}
      component={Myaddress}
      options={{
        // headerShown: false
        title: "My Address",
      }}
    />

    {/* </>
 )} */}

   

    <Stack.Screen
      name={"AddAdress"}
      component={AddAdress}
      options={{
        // headerShown: false
        title: "Add Address",
      }}
    />
          {/* <Stack.Screen name="users" component={users} /> */}
          </>
              )}
                 {authProfile.role == "manager" && (
            <>
          <Stack.Screen
      name={"BottomtabAdmin"}
      component={BottomtabAdmin}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name={"Statistics"}
      component={Statistics}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name={"ProfleAdmin"}
      component={ProfleAdmin}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name={"EditProfile"}
      component={EditProfile}
      options={{
        // headerShown: false
        title: "Edit Profile",
      }}
    />
    <Stack.Screen
      name={"Promos"}
      component={Promos}
      options={{
        // headerShown: false
        title: "Promos Available",
      }}
    />
        <Stack.Screen
      name={"Myaddress"}
      component={Myaddress}
      options={{
        // headerShown: false
        title: "My Address",
      }}
    />
          </>
              )}
        </>

        
      ) : (
        <>
          <Stack.Screen
            name={"GetStart"}
            component={GetStart}
            options={{
              headerShown: false,
              // title: "Add Address"
            }}
          />

          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen
            name={"SignUp"}
            component={SignUp}
            options={
              {
                // headerShown: false
              }
            }
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default Router;
