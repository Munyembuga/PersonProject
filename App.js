import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, StyleSheet } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { useState } from "react";
import Homepage from './Screen/Homepage';
import MyTabs from './Screen/Homepage';
import Router from './Navigations/Routers';
import { NavigationContainer } from '@react-navigation/native';
import GetStart from './Screen/Start/GetStart';
 
import { store } from './Screen/Autho/configueStore';
import { Provider } from 'react-redux';


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
  },
  text: {
    color: "#000",
    textAlign: "center", 
    marginTop:30,
    fontSize:20,
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



