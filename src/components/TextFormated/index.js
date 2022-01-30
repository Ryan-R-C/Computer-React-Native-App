import React from 'react';
import { StyleSheet, Text} from 'react-native';

export default function TextFormatedRegular({ children, style }){
    let styleOfFont = styles.TextFormatedRegular

    if (style?.fontWeight === 'bold'){
        styleOfFont = styles.TextFormatedBold
    }
    
    return <Text style={[style, styleOfFont]}>
            {children}
        </Text>
}

const styles = StyleSheet.create({
    TextFormatedRegular:{
        fontFamily: "PoppinsRegular",
        fontWeight: 'normal',
    },
    TextFormatedBold:{
        fontFamily: "PoppinsBold",
        fontWeight: 'normal'
        
        }
})