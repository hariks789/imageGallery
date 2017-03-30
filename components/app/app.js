/**
 * App component
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
import Info from '../info/info';
import styles from './style';
export default class extends Component {
    render() {
        return (
        <View  style = { styles.container }>
          <Info navigator={this.props.navigator}/>
        </View>
        );
    }
}