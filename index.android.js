/**
 * image Gallery App
 * https://github.com/geethujp/imageGallery
 * author: Geethu Jose
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
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#5c6bc0',
  },
});

AppRegistry.registerComponent('imageGallery', () => imageGallery);
