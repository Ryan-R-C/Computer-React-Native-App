import { Text,  TextInput, View, Keyboard, Platform } from 'react-native';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons'; 
import React, { useEffect, useState } from 'react';


export default function Search({ setStateSearch, stateSearch, actionOnSubmit }){
    // const [searchQuery, setSearchQuery] = useState('')

    return (
    <View
        style={styles.search}
    >
        <View
            style={styles.searchIcon}
            onClick={
            () => actionOnSubmit()
            }
        >
            <AntDesign name="search1" size={24} color="white" />
        </View>
        <TextInput 
            keyboardType='default'
            selectTextOnFocus
            style={[
                Platform.select({
                  web: {
                    outlineStyle: 'none',
                  }})
                  ,
                styles.searchInput
            ]
            }

            onChangeText={text => setStateSearch(text)}
            defaultValue={stateSearch}
            onSubmitEditing={
                () => actionOnSubmit()
            }


        />
      </View>
    )
}
