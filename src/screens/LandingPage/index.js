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
import Search              from '../../components/Search';
import newsSearch          from '../../service/newsSearch';

export default function LandingPage() {
  const [newsDatas,   setNewsDatas] = useState([])
  const [lang,        setLang] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const loadNews = async (lang) => {
    const data = await newsData(lang)
      setNewsDatas(data)
  }

  const searchNews = async (lang, search) => {
    if(!search){
      loadNews(lang)
    }
    let newsFromUserSearch = await newsSearch(lang, search)
    setNewsDatas(newsFromUserSearch)
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
        
      <Search
        setStateSearch={setSearchQuery}
        stateSearch={searchQuery}
        actionOnSubmit={
          () => {
            searchNews(lang, searchQuery)
          }
        }
      />

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
  
