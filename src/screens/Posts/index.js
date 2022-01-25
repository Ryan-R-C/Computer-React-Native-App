import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, FlatList } from 'react-native';


export default function Posts({ id, title, content}) {
    return (
      <SafeAreaView>
      <Text>
        { id }
      </Text>
      <Text>
        { title }
      </Text>
      <Text>
        { content }
      </Text>
      </SafeAreaView>
        )
    }