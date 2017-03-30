/**
 * image Gallery App
 * https://github.com/geethujp/imageGallery
 * author: Geethu Jose
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  View
} from 'react-native';
import App from './components/app/app'; // import all components to be routed here
import Gallery from './components/gallery/gallery.js';
import Info from './components/info/info.js';

export default class imageGallery extends Component {
  render() {

    return (
      <Navigator
        initialRoute={{ id: 'App', name: 'App' }}
        renderScene={this.renderScene.bind(this)}
        configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromRight}
      />
    );
  }
  renderScene = (route, navigator) => {
    if (route.id === 'App') {
      return (
        <App navigator={navigator}/>
      );
    } else if (route.id === 'Gallery') {
      return (
        <Gallery navigator={navigator}/>
      );
    }
     else if (route.id === 'Info') {
      return (
        <Info navigator={navigator}/>
      );
    }
  //Add all routes here in else if conditions
  //navigator is passed as a prop, add all necessary props you need to pass along with it

  }
}

AppRegistry.registerComponent('imageGallery', () => imageGallery);