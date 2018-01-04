// Import a library to help create a component
import React, {Component} from 'react';
import {View} from 'react-native';
// my custom components
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
// create a component
const App  = () => (
  <View style={{flex:1}}>
    <Header headerText={'Albums'}/>
    <AlbumList/>
  </View>
);
export default App;
