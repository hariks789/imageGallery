/**
 * Gallery Component
 * For mobile View show potrait view with 2 images per row.
 * For tablet View show landscape view with 4 images per row.
 */
import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    ListView,

} from 'react-native';
import styles from './style';
import ImageList from '../imageList/imageList';
export default class Gallery extends Component {
  render() {
    return (
        <ImageList navigator={this.props.navigator}/>
    );
  }
}