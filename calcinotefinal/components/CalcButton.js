
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize'

export default class CalcButton extends React.Component {

  static defaultProps = {
    onPress: function() { },
    title: "",
    color: "white",
    backgroundColor: "black",
    radius: RFValue(30),

    style: { },
  }


  render() {
    var r = this.props.radius;
    var w = this.props.radius * 2;
    var h = this.props.radius * 2;
    var bc = this.props.backgroundColor;

    return (
      <TouchableOpacity onPress={this.props.onPress} 
        style={[styles.container, { width: w, height: h, borderRadius: r, backgroundColor: "blue" }, { ...this.props.style }]}>
        <Text style={[styles.text, { color: this.props.color }]}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: { alignItems: "center", justifyContent: "center", margin: RFValue(7), },
  text: { fontSize: RFValue(30), fontWeight: "bold", },
});