import React, { useEffect } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, KeyboardAvoidingView } from 'react-native';

import globalStyles from '../../globalStyles';

import Comment from '../../components/Comment';
import TextFormatedRegular from '../../components/TextFormated';


export default function Posts({ id, title, summary}) {
    return (
      <SafeAreaView
      style={
          globalStyles.postBox
      }
      >

        <TextFormatedRegular
        style={
          globalStyles.text
      }
        >
          { id }
        </TextFormatedRegular>

        <TextFormatedRegular
          style={
            globalStyles.title
          }
        >
          { title }
        </TextFormatedRegular>
        
        <TextFormatedRegular
          style={
            globalStyles.text
          }
        >
          { summary }
        </TextFormatedRegular>
        {/* <Comment /> */}


      </SafeAreaView>
        )
    }