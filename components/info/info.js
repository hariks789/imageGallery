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
    render() {
        return (
            <View style = { styles.info_container }>
              <Text style = { styles.info_wrapper }>
                <Text>Mobile View </Text>
                <Text>Orientation : Potrait </Text>
                <Text>Number of images per row : 2 </Text>
              </Text>
              <Text style = { styles.info_wrapper }>
                <Text>Tablet View </Text>
                <Text>Orientation : Landscape </Text>
                <Text>Number of images per row : 4 </Text>
              </Text>
              <Button title="Proceed" color="#5c6bc0" style = { styles.proceed }/>
            </View>
        );
    }
}
