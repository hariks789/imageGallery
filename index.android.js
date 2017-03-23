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
import Info from './info';
import styles from './styles';

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

AppRegistry.registerComponent('imageGallery', () => imageGallery);
