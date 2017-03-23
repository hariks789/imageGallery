/**
 * Style sheet
 */
 import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#5c6bc0',
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
        flex:1,
        margin:20,
    }
});