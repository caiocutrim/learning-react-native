import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
class InputUser extends Component {
  constructor() {
    super();
    this.state = {
      textValue:'Hello'
    }
  }
  onChangeText(value) {
    this.setState({
      textValue:value
    });
  }
  render() {
    let {textValue} = this.state;
    return (
      <View>
        <TextInput 
          placeholder="User name"
          value={textValue}
          onChangeText={value => this.onChangeText(value)}
        />
        <Text>{textValue}</Text>
      </View>
    )
  }
}

export default InputUser;
