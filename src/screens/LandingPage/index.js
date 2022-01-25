import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, FlatList } from 'react-native';

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
]

export default function LandingPage() {
    return (
      <SafeAreaView style={styles.container}>
        {/* <StatusBar style="auto" /> */}
        <Text>This is the landing page!</Text>
        <Text>Lets code!</Text>
          <FlatList 
          data={appData}
          renderItem={
            ({item}) => (
              <Posts {...item} />
            )
          }
          /> 
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });