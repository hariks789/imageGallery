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
    Button,
} from 'react-native';
export default class extends Component {
    render() {
        return (
            <View style = { styles.container }>
              <Text style = { styles.wrapper }>
                <Text>Mobile View </Text>
                <Text>Orientation : Potrait </Text>
                <Text>Number of images per row : 2 </Text>
              </Text>
              <Text style = { styles.wrapper }>
                <Text>Tablet View </Text>
                <Text>Orientation : Landscape </Text>
                <Text>Number of images per row : 4 </Text>
              </Text>
              <Button title="Proceed" color="#5c6bc0"/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapper: {
        fontSize: 16,
        textAlign: 'center',
        margin: 15,
        padding: 10,
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: '#5c6bc0',
        color: '#5c6bc0',
    },
    proceed: {
        flex:1,
        color: '#fff',
    }
})
