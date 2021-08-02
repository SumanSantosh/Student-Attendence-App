import React,{Component} from "react";
import {Text,View,StyleSheet,Style,TouchableOpacity,Image,SafeAreaView,Platform,StatusBar} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default class HomeScreen extends Component{
  render(){
    return(
      <View style = {styles.theme}>
        
        <SafeAreaView style={styles.androidSafeArea}/> 
          <View style = {{flex:0.15, flexDirection:'row', alignItems:'center', backgroundColor:'#D5A000'}}>
          <Image style={styles.logo} source={require('../assets/logo.png')} />
          <Text style = {styles.titleText}> CalCiNote </Text>
          </View>
        
          <View style = {{flex:0.85, marginTop:RFValue(50)}}>
            <TouchableOpacity style = {styles.button}
              onPress={()=>{
                this.props.navigation.navigate("Calculator")
              }}
            >
              <Image source = {require("../assets/Calcilogo.png")} style = {styles.buttonImage}/>
              <Text style = {styles.buttonText}>Calculator</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.button}
              onPress={()=>{
                this.props.navigation.navigate("Calendar")
              }}
            >
              <Image source = {require("../assets/calenderlogo.png")} style = {styles.buttonImage}/>
              <Text style = {styles.buttonText}>Calendar</Text>
            </TouchableOpacity>
          </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  
    androidSafeArea:{
      marginTop:Platform.OS==="android"?StatusBar.currentHeight:0
     },

  logo: {
    height: RFValue(100),
    width: RFValue(100),
  },

  theme:{
    flex:1,
    backgroundColor:"#4949FC"
  },
  
  titleText: {
    color: "#20232a",
    textAlign: "center",
    fontSize: RFValue(45),
    fontWeight: "bold"
  },
  
  button:{
   margin:RFValue(35),
   width:'80%',
   height:RFValue(100),
   alignSelf:'center',
   alignItems:'center',
   backgroundColor:'#FFCA2A',
   borderRadius:25,
   flexDirection:"row",
  },
  buttonText:{
    textAlign:'center',
    fontSize: RFValue(20)
  },

  buttonImage:{
    width:RFValue(100),
    height:RFValue(100),
    paddingLeft:RFValue(20),
  }

});
