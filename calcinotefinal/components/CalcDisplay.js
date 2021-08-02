
import React from 'react';
import { StyleSheet, View, Text }from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';

export default class CalcDisplay extends React.Component {

  static defaultProps = {
    display: "",
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.display}>{this.props.display}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:  { paddingBottom: RFValue(20), },
  display:    { fontSize: RFValue(70), color: "blue", textAlign: "right", },
})