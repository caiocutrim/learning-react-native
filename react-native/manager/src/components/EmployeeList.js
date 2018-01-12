import React, {Component} from 'react';
import {connect} from 'react-redux';
import {employessFetch} from '../actions';
import {View, Text} from 'react-native';
class EmployeeList extends Component {
  render() {
    return (
      <View>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
      </View>
    );
  }
}
export default EmployeeList;