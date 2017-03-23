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
import App from './components/app/app';

export default class imageGallery extends Component {
  render() {
    return (
      <App/>
    );
  }
}

AppRegistry.registerComponent('imageGallery', () => imageGallery);
