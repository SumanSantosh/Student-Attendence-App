import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Style,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
} from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';

import CalendarPicker from 'react-native-calendar-picker';

export default class CalendarScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }

  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';

    return (
      <View style={styles.theme}>
        <SafeAreaView style={styles.androidSafeArea} />
        <View
          style={{
            flex: 0.15,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#D5A000',
          }}>
          <Image style={styles.logo} source={require('../assets/calenderlogo.png')} />
          <Text style={styles.titleText}> Calendar </Text>
        </View>

        <View style={styles.container}>
          <CalendarPicker onDateChange={this.onDateChange} textStyle={{fontSize:12,fontWeight:"bold"}} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  androidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  logo: {
    height:RFValue(100),
    width: RFValue(100),
  },

  theme: {
    flex: 1,
    backgroundColor: "#4949FC",
  },

  titleText: {
    color: '#20232a',
    textAlign: 'center',
    fontSize: RFValue(45),
    fontWeight: 'bold',
  },

  container: {
    flex: 0.85,
    backgroundColor: '#FFCA2A',
  },
});
