import React,{Component} from "react";
import {Text,View} from "react-native";
import {NavigationContainer} from "@react-navigation/native" 
import {createStackNavigator} from "@react-navigation/stack"

import HomeScreen from "./Screens/HomeScreen";
import  CalculatorScreen from "./Screens/CalculatorScreen";
import CalendarScreen from "./Screens/CalendarScreen";

const Stack = createStackNavigator()

export default class App extends Component{
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName ="Home" screenOptions = {{headerShown:false}}>
          <Stack.Screen name ="Home" component ={HomeScreen}/>
          <Stack.Screen name ="Calculator" component ={CalculatorScreen}/>
          <Stack.Screen name ="Calendar" component ={CalendarScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
