
import {Dimensions, StyleSheet} from 'react-native';
/*
  --main-color: #1494414,
  --main-background-color: #0E1220,
  --second-background-color: #101828,
  --text-color: #B7BABE,
  --default-black: #0E1220,
  --default-white: #B7BABE,
  --default-shadow: 0 2px 4px #0000004d,
*/

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
        flex: 1,

    },
    postBox: {
        backgroundColor: '#101828',
        display: 'flex',
        borderRadius: 10,
        marginHorizontal: 0.05 * windowWidth,
        marginVertical: 0.018 * windowHeight,
        shadowColor:'#171717', 
        shadowOffset: {width:-2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        maxWidth: 900,
        // overflow: 'hidden'
        
    },
    containerTextPostBox:{
        paddingTop: 0.05 * windowWidth,
        paddingLeft: 0.05 * windowWidth,
        paddingBottom: 0.05 * windowWidth,
        paddingRight: 0.05 * windowWidth,
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
        fontSize: 18,
        textAlign: 'center',
    },
    text: {
        color: '#B7BABE',
        fontSize: 16,
        textAlign: 'justify',
        padding: 0.01 * windowHeight
    },
})

export const colors = {
    mainColor: '#1494414',
    mainBackgroundColor: '#0E1220',
    secondBackgroundColor: '#101828',
    textColor: '#B7BABE',
    defaultBlack: '#0E1220',
    defaultWhite: '#B7BABE',
    defaultShadowColor: '#0000004d',
    defaultShadowDimensions: '0 2 4',
}

export default globalStyles