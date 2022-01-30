import React, { useEffect, useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView, FlatList } from 'react-native';


import globalStyles from '../../globalStyles';

import Comment from '../../components/Comment'

import Posts from '../Posts'

import TextFormatedRegular from '../../components/TextFormated';
import newsData from '../../service/newsData';

export default function LandingPage() {
  const [newsDatas, setNewsDatas] = useState([])

  useEffect(
    async () => {
      const data = await newsData()
      console.log("data")
      console.log(data)
      setNewsDatas(data)
    }, []
  )
    return (
      <SafeAreaView 
      style={
        globalStyles.subBox
      }
      >
        {/* <StatusBar style="auto" /> */}
        <TextFormatedRegular
        style={
          globalStyles.text,
          globalStyles.mainTitle
        }
        >This is the landing page!</TextFormatedRegular>
        <Text
          style={globalStyles.text}
        >Lets code!</Text>


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
  
