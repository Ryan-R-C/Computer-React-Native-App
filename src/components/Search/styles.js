
import { StyleSheet } from 'react-native';

import { colors, windowHeight } from "../../globalStyles"

const styles = StyleSheet.create({
    
    text: {
        color: '#B7BABE',
        fontSize: 16,
        textAlign: 'justify',
        padding: 0.01 * windowHeight
    },
    
    search: {
        backgroundColor: 'rgb(32, 33, 36)',
        backgroundColor:  colors.darkerBackgroundColor,
        borderWidth: 1,
        borderColor: 'rgb(95, 99, 104)',
        borderRadius: 24,
        display: 'flex',
        flexDirection: 'row',
        height: 44,
        justifyContent: 'center',
        marginVertical: 24,
        maxWidth: 906,
        width: "90%",
    },

    searchIcon:{
        alignItems: 'center',
        alignSelf: 'center',
        color: '#e8eaed',
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        justifyContent: 'center',
        margin: 0,
        padding: 10,
    },

    searchInput: {  
        borderColor: '#000000',
        borderWidth: 0,
        color: '#e8eaed',
        flex: 1,
        fontSize: 16,   
        height: 34,
        margin: 0,
        padding: 5,
        height: '100%',
    }
})


export default styles