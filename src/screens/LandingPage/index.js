import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, FlatList, KeyboardAvoidingView, Platform } from 'react-native';


import globalStyles from '../../globalStyles';

import styles from './styles';

import Comment from '../../components/Comment'

import Posts from '../Posts'

const appData = [
    {
        id: 1,
        title: `The computers before screens`,
        content: `learn why there is so many "prints" in programming languages and how our lives are a little easy and cheap now...`,
    },
    {
        id: 2,
        title: `Why Machintosh was revolucionary`,
        content: `where "Windows" got it's name and why Steve Jobs where a genius...`,
    },
    {
        id: 3,
        title: `The revolution data`,
        content: `Why so many jobs in nowadays are being extinct and so much more are being created...`,
    },
    {
      id: 4,
      title: `The revolution data`,
      content: `Why so many jobs in nowadays are being extinct and so much more are being created...`,
    },
    {
      id: 5,
      title: `The revolution data`,
      content: `Why so many jobs in nowadays are being extinct and so much more are being created...`,
    },
    {
      id: 6,
      title: `The revolution data`,
      content: `Why so many jobs in nowadays are being extinct and so much more are being created...`,
    },
    {
      id: 7,
      title: `The revolution data`,
      content: `Why so many jobs in nowadays are being extinct and so much more are being created...`,
    },
    {
      id: 8,
      title: `The revolution data`,
      content: `Why so many jobs in nowadays are being extinct and so much more are being created...`,
    },

]

export default function LandingPage() {
    return (
      <SafeAreaView 
      style={
        globalStyles.subBox
      }
      >
        <Text
        style={
          styles.text,
          globalStyles.mainTitle
        }
        >This is the landing page!</Text>
        <Text
          style={styles.text}
        >Lets code!</Text>

          <FlatList 
          data={appData}
          renderItem={
            ({item}) => (
              <Posts {...item} />
              )
            }
            keyExtractor={({id}) => String(id)}
              />

      </SafeAreaView>
    );
  }
  
