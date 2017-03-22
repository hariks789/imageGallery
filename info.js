import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
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
        borderColor: '#fff',
        color: '#fff',
    },
})
