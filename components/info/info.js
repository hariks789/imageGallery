/**
 * info Component
 * For mobile View show potrait view with 2 images per row.
 * For tablet View show landscape view with 4 images per row.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
import styles from './style';

export default class extends Component {
  onPress = () => {
    const { navigator } = this.props;
    navigator.push({
      id: 'Gallery'
    });
  }
  render() {
    return (
      <View style = { styles.info_container }>
      <Text style = { styles.title }>Image Gallery</Text>
        <Text style = { styles.info_wrapper }>
          <Text>Mobile View </Text>
          <Text>Orientation : Potrait </Text>
          <Text>Number of images per row : 3 </Text>
        </Text>
        <Text style = { styles.info_wrapper }>
          <Text>Tablet View </Text>
          <Text>Orientation : Landscape </Text>
          <Text>Number of images per row : 5 </Text>
        </Text>
        <Button title="Proceed" color="#5c6bc0" onPress={this.onPress} style = {styles.proceed}/>
      </View>
    );
  }
}