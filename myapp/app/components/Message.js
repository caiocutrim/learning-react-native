import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableHighlight} from 'react-native'; 
class Message extends Component { 
  onPress() {
  }
  render() {
    const {message} = this.props;
    return (
      <TouchableHighlight 
        onPress={this.onPress}
        underlayColor="blue">
        <View style={styles.myView}>
          <Text style={styles.myText}>{message}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}
const styles = StyleSheet.create({
  myText: {
    color:'#fff',
    top:4,
    alignSelf:'center',
    fontSize: 18,
  },
  myView: {
    alignItems:'center',
    backgroundColor: '#09f',
    height:40
  }
});
export default Message;

