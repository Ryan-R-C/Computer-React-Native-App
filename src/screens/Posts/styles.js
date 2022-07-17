

import { StyleSheet } from 'react-native';
import { colors } from '../../globalStyles';


const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.secondBackgroundColor,
    },
    image: {
        borderRadius: 5,
        height: 300,
        width: '100%',
    },

    newsTitle:{
        paddingHorizontal: 20,
        textAlign: "left",
        color: '#B7BABE',
        fontSize: 20,

    },

    actionsContainer:{
        display: 'flex',
        flexDirection: 'row-reverse',
        paddingHorizontal: 10,
        paddingBottom: 20,

        
    },

    clipAdvice:{
        

    },


    iconsContainer:{
        display: 'flex',
        flexDirection: 'row',
        
    },

    icon:{
        paddingRight: 20,
        // on mobile devices the cursos does not work, it crashes the metro!
        // cursor: 'pointer'
        
    },

    lastIcon:{
        paddingRight: 0,
    }


})

export default styles