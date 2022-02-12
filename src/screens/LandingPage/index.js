import React, { useEffect, useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView, FlatList, Platform, TextInput, View, Keyboard } from 'react-native';

import { AntDesign } from '@expo/vector-icons'; 


//  AiOutlineSearch
// import { FaSearch } from 'react-icons/fa';

import globalStyles from '../../globalStyles';

import Comment from '../../components/Comment'

import Posts from '../Posts'

import TextFormatedRegular from '../../components/TextFormated';
import newsData            from '../../service/newsData';
import getLang             from '../../utils/getLang';

export default function LandingPage() {
  const [newsDatas, setNewsDatas] = useState([])
  const [lang, setLang] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const loadNews = async (lang) => {
    const data = await newsData(lang)
      setNewsDatas(data)
      console.log(data)
  }

  useEffect(
    async () => {
      const userLanguage = getLang()
      setLang(userLanguage)
      loadNews(userLanguage)
    }, []
  )
    return (
      <SafeAreaView 
      style={
        globalStyles.subBox
      }
      >
        <StatusBar style="none" />
        
      <View
        style={globalStyles.search}
      >
        <View
          style={globalStyles.searchIcon}
          onClick={
            (e) => console.log(searchQuery)
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

            onChangeText={text => setSearchQuery(text)}
            defaultValue={searchQuery}
            onSubmitEditing={
              () => {
                console.log("enter hjahahahahahhahah")
              }
            }


          />
      </View>


        {/* <KeyboardAvoidingView
        behavior={
          Platform.OS == "ios" ? "padding" : "height"
        }
        // style={globalStyles.fill}
        > */}

          <FlatList 
          data={newsDatas}
          renderItem={
            ({item}) => (
              <Posts {...item} />
              )
            }
            keyExtractor={({_id}) => String(_id)}
            // ListHeaderComponent={
              //   () => ()}
              />
          {/* </KeyboardAvoidingView> */}
      </SafeAreaView>
    );
  }
  
