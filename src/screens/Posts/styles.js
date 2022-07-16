

import {StyleSheet, TouchableOpacity} from 'react-native';



import { colors } from '../../globalStyles';


const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.secondBackgroundColor,
    },
    image: {
        width: '100%',
        height: 300,
        
        borderRadius: 5,
        // marginVertical: 10,
        // borderRadius: 10
    },

    actionsContainer:{
        display: 'flex',
        flexDirection: 'row-reverse',
        paddingBottom: 20,  
        
    },


    iconsContainer:{
        display: 'flex',
        flexDirection: 'row',
        
    },

    icon:{
        paddingRight: 20,
        // cursor: 'pointer'
        
    },

    lastIcon:{
        paddingRight: 0,
        // cursor: 'pointer'
    }


})

export default styles