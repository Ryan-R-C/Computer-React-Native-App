import React, { useEffect } from 'react';

import { Image, Text, SafeAreaView, KeyboardAvoidingView } from 'react-native';

import globalStyles from '../../globalStyles';

import Comment from '../../components/Comment';
import TextFormatedRegular from '../../components/TextFormated';
import styles from './styles';


export default function Posts({ id, title, summary, media}) {
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
        
      <Image source={{uri: media}}
       style={styles.image} />

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