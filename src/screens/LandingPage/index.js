import React, { useEffect } from 'react';

import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView, FlatList } from 'react-native';


import globalStyles from '../../globalStyles';

import Comment from '../../components/Comment'

import Posts from '../Posts'

import TextFormatedRegular from '../../components/TextFormated';
import newsData from '../../service/loadNews';

const appData = [
    {
        id: 1,
        title: `The computers before screens`,
        summary: `learn why there is so many "prints" in programming languages and how our lives are a little easy and cheap now...`,
    },
    {
        id: 2,
        title: `Why Machintosh was revolucionary`,
        summary: `where "Windows" got it's name and why Steve Jobs where a genius...`,
    },
    {
        id: 3,
        title: `The revolution data`,
        summary: `Why so many jobs in nowadays are being extinct and so much more are being created...`,
    },
    {
      id: 4,
      title: `The revolution data`,
      summary: `Why so many jobs in nowadays are being extinct and so much more are being created...`,
    },
    {
      id: 5,
      title: `The revolution data`,
      summary: `Why so many jobs in nowadays are being extinct and so much more are being created...`,
    },
    {
      id: 6,
      title: `The revolution data`,
      summary: `Why so many jobs in nowadays are being extinct and so much more are being created...`,
    },
    {
      id: 7,
      title: `The revolution data`,
      summary: `Why so many jobs in nowadays are being extinct and so much more are being created...`,
    },
    {
      id: 8,
      title: `The revolution data`,
      summary: `Why so many jobs in nowadays are being extinct and so much more are being created...`,
    },

]

export default function LandingPage() {
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
          data={appData}
          renderItem={
            ({item}) => (
              <Posts {...item} />
              )
            }
            keyExtractor={({id}) => String(id)}
            // ListHeaderComponent={
              //   () => ()}
              />
          {/* </KeyboardAvoidingView> */}
      </SafeAreaView>
    );
  }
  
