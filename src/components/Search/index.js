import { Text,  TextInput, View, Keyboard } from 'react-native';
import globalStyles from '../../globalStyles';
import { AntDesign } from '@expo/vector-icons'; 
import React, { useEffect, useState } from 'react';


export default function Search({ setStateSearch, stateSearch, actionOnSubmit }){
    // const [searchQuery, setSearchQuery] = useState('')

    return (
    <View
        style={globalStyles.search}
    >
        <View
            style={globalStyles.searchIcon}
            onClick={
            () => actionOnSubmit()
            }
        >
            <AntDesign name="search1" size={24} color="white" />
        </View>
        <TextInput 
            keyboardType='default'
            selectTextOnFocus
            style={
                // Platform.select({
                //   web: {
                //     outlineStyle: 'none',
                //   }})
                //   ,
                globalStyles.searchInput
            }

            onChangeText={text => setStateSearch(text)}
            defaultValue={stateSearch}
            onSubmitEditing={
                () => {
                console.log("enter hjahahahahahhahah")
                }
            }


        />
      </View>
    )
}
