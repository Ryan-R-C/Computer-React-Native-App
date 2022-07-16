//react and dependencies
import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';

//styles
import globalStyles from '../../globalStyles';

//service
import newsData from '../../service/newsData';
import newsSearch from '../../service/newsSearch';

//utils
import getLang from '../../utils/getLang';


//components
import Posts from '../Posts'
import Search from '../../components/Search';

{/*
It is possible to get the os and use it as a condition!
  Platform.OS == "ios" ? "padding" : "height"
*/}


export default function LandingPage() {
  const [newsDatas, setNewsDatas] = useState([])
  const [lang, setLang] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const loadNews = async (lang) => {
    const data = await newsData(lang)
    setNewsDatas(data)
  }

  const searchNews = async (lang, search) => {
    if (!search) {
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


      <FlatList
        data={newsDatas}
        renderItem={
          ({ item }) => (
            <Posts {...item} />
          )
        }
        keyExtractor={({ _id }) => String(_id)}
      />
    </SafeAreaView>
  );
}

