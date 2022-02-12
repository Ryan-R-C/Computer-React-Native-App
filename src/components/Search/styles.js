
import { StyleSheet } from 'react-native';

import { windowHeight } from "../../globalStyles"

const styles = StyleSheet.create({
    
    text: {
        color: '#B7BABE',
        fontSize: 16,
        textAlign: 'justify',
        padding: 0.01 * windowHeight
    },
    search: {
        display: 'flex',
        height: 44,
        backgroundColor: 'rgb(32, 33, 36)',
        borderWidth: 1,
        borderColor: '#5f6368',
        borderTopColor: 'rgb(95, 99, 104)',
        borderRightColor: 'rgb(95, 99, 104)',
        borderBottomColor: 'rgb(95, 99, 104)',
        borderLeftColor: 'rgb(95, 99, 104)',
        borderRadius: 24,
        marginVertical: 24,
        width: 638,
        width: 'auto',
        maxWidth: 584,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    searchIcon:{
        alignSelf: 'center',
        margin: 0,
        padding: 10,
        color: '#e8eaed',
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        // cursor: 'pointer'


    },
    searchInput: {  
    margin: 0,
    padding: 0,
    color: '#e8eaed',
    flex: 1,
    height: 34,
    fontSize: 16,   
    borderColor: '#000000',
    borderWidth: 0,
    padding: 5,
    height: '100%',
    }
})


export default styles