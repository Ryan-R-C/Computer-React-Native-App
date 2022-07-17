
import { Dimensions, StyleSheet } from 'react-native';


export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

const globalStyles = StyleSheet.create({
    fill: {
        flex: 1,
    },

    backgound: {
        backgroundColor: '#101828',
    },

    Globalbox: {
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#0E1220',
        flex: 1,
        width:'100%',
        
    },

    subBox: {
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#0E1220',
        width: '100%',
        minHeight: windowHeight,
    },

    postBox: {
        display: 'flex',
        marginHorizontal: 0.05 * windowWidth,
        marginVertical: 0.020 * windowHeight,
        maxWidth: 900,
        shadowColor: "#FFF",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 0,
    },
    containerTextPostBox:{
        paddingTop: 0.025 * windowWidth,
        // paddingLeft: 0.05 * windowWidth,
        // paddingRight: 0.05 * windowWidth,
        paddingBottom: 0.05 * windowWidth,
    },

    mainTitle: {
        paddingTop: 0.05 * windowHeight,
        marginBottom: 0,
        paddingBottom: 0,
        textAlign: 'center',
        color: 'white',
        textShadowColor: 'rgba(255,0,255,0.85)',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 5,
        fontSize: 26,
    },
    
    title: {
        color: '#B7BABE',
        fontSize: 20,
        textAlign: 'center',
    },
    text: {
        color: '#B7BABE',
        fontSize: 16,
        textAlign: 'justify',
    },
})

export const colors = {
    mainColor: '#1494414',
    mainBackgroundColor: '#0E1220',
    secondBackgroundColor: '#101828',
    darkerBackgroundColor: "#06070D",
    textColor: '#B7BABE',
    defaultBlack: '#0E1220',
    defaultWhite: '#B7BABE',
    defaultShadowColor: '#0000004d',
    defaultShadowDimensions: '0 2 4',
}

export default globalStyles