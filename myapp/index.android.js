import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet} from 'react-native';

class MyApp extends Component {
  render() {
    return (
      <View style={{
        flex: 1, 
        flexDirection: 'column',
        justifyContent:'space-between',
      }}>
        <View style={{width:50, height:50, backgroundColor: 'powderblue'}}/>
        <View style={{width:50, height:50, backgroundColor: 'skyblue'}}/>
        <View style={{width:50, height:50, backgroundColor: 'steelblue'}}/>
      </View>
    );
  }
}
AppRegistry.registerComponent('myapp', () => MyApp);
