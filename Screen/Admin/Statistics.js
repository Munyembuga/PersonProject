import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

const Statistics = () => {
  return (
    <View style={{
        marginTop:60,
    }}>
        <View>
            <Text
            style={{
                
                color:'gray',
                fontSize:20,
                fontWeight:'600',
                marginBottom:30,
                textAlign:'center'
            }}>Statistics</Text>
        </View>
    <View style={styles.containerChart}>
      
      <LineChart
    data={{
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [15,20,30,6,20,25]
        }
      ]
    }}
    width={370} // from react-native
    height={220}
    // yAxisLabel="$"
    // yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      decimalPlaces:0, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(250, 250, 25, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
     
        </View>
        <View style={styles.containerChart2}>
        <ProgressChart
  data={{
    labels: ["Vegetables", "Fruits", "Milks && Eggs","Meats",'Breads'], // optional
    data: [0.4, 0.6, 0.8,0.8,0.1]
  }
    
  }
  width={350}
  height={220}
  strokeWidth={16}
  radius={32}
  chartConfig={{
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "#fb8c00",
    backgroundGradientTo: "#ffa726",
    decimalPlaces:0, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(250, 250, 25, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#ffa726"
    }
  }}
  hideLegend={false}
/>
        </View>
    </View>
   
  )
}
const styles = StyleSheet.create({
    containerChart:{
      
        // marginHorizontal:20
        marginLeft:10,
        marginRight:10
    },
    containerChart2:{
        marginTop:80,
        // marginHorizontal:20
        // marginLeft:10,
        // marginRight:10,
        alignItems:'center'
    }
})

export default Statistics