/**
 * Info Style sheet
 */
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    title: {
        height:40,
        padding: 5,
        fontSize: 20,
        alignSelf: 'stretch',
        textAlign: 'center',
        backgroundColor: '#5c6bc0',
        color: '#fff'
    },
    info_container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    info_wrapper: {
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
        flex: 1,
        margin: 20,
    }
});
