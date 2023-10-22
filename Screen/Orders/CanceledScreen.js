import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CanceledScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Canceled Orders</Text>
      {/* Your completed orders content goes here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default  CanceledScreen;
