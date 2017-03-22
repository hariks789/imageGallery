/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Info from './info.js';

export default class imageGallery extends Component {
  render() {
    return (
      <View  style = { styles.container }>
        <Text style = { styles.title }>Image Gallery</Text>
      <Info/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5c6bc0',
    color: '#fff',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
  },
});

AppRegistry.registerComponent('imageGallery', () => imageGallery);
