import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, StyleSheet } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { useEffect, useState } from "react";
import Homepage from './Screen/Homepage';
import MyTabs from './Screen/Homepage';
import Router from './Navigations/Routers';
import { NavigationContainer } from '@react-navigation/native';
import GetStart from './Screen/Start/GetStart';
 
import { store } from './Screen/Autho/configueStore';
import { Provider } from 'react-redux';
import { useFonts } from 'expo-font';

import * as SplashScreen from 'expo-splash-screen';


const slides = [
  {
    key: 1,
    title: " Easy Shopping",
    text: "Fresh groceries at your \n doorstep in the next",
    image: require("./assets/1.jpg"),
    backgroundColor: "#59b2ab",
  },
  {
    key: 2,
    title: "Easy Order",
    text: "Other cool stuff \n to Ordering Goods",
    image: require("./assets/2.jpg"),
    backgroundColor: "#febe29",
  },
  {
    key: 3,
    title: "Let's GO",
    text: "I'm already out of Grorecies",
    image: require("./assets/3.jpg"),
    backgroundColor: "#22bcb5",
  },
];

export default App = () => {
  const [showRealApp, setShowRealApp] = useState(false);
  
  const [fontsLoaded] = useFonts({
    
    'Updock': require('./assets/fonts/Updock-Regular.ttf'),
    'Sunrise': require('./assets/fonts/WaitingfortheSunrise-Regular.ttf'),
    'Oswald': require('./assets/fonts/static/Oswald-Regular.ttf'),
    'Agbalumo': require('./assets/fonts/Agbalumo-Regular.ttf'),
    'Dancing': require('./assets/fonts/DancingScript-VariableFont_wght.ttf'),
  })
  useEffect(()=>{
    async function prepare(){
      await SplashScreen.preventAutoHideAsync()
    }
    prepare();
  },[])
  if(!fontsLoaded){
    return null;

  }
  else{
    SplashScreen.hideAsync();
  }


  const RenderItem = (item) => {
    console.log(item.title, "Item from function");
    return (
      <View style={styles.slide}>
      
        <Image style={styles.image} source={item.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  const bottomButton = () => {
    return <Homepage/>
      

  };

  return showRealApp ? (
    <Provider store={store}>
<NavigationContainer>
       <Router/>
</NavigationContainer>
</Provider>


  ) : (
    
    <AppIntroSlider
      data={slides}
      onDone={() => setShowRealApp(true)}
      renderItem={(item) => RenderItem(item.item)}
      bottomButton={bottomButton}
    />
  
    
  );
};

const styles = StyleSheet.create({
  slide: {
    height: "80%",
    
    alignItems: "center",
    marginTop:50,
  },
  title: {
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom:10,
    marginTop:80,
    fontSize:30,
    fontFamily:'Agbalumo',
  },
  text: {
    color: "gray",
    textAlign: "center", 
    marginTop:30,
    fontSize:20,
    fontFamily:'Dancing',
    fontWeight:'bold'
  },container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    marginTop:80,
    
    
  }
});



