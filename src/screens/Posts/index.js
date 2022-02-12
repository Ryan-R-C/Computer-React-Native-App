import React, { useEffect } from 'react';
import { Linking, TouchableOpacity, View } from 'react-native';

import { Image, Text, SafeAreaView, KeyboardAvoidingView } from 'react-native';

import globalStyles from '../../globalStyles';

import Comment from '../../components/Comment';
import TextFormatedRegular from '../../components/TextFormated';
import styles from './styles';


export default function Posts({ _id, title, summary, media, link, authors}) {
    return (
      <SafeAreaView
      onPress={() => Linking.canOpenURL('http://google.com')}
      style={
          globalStyles.postBox
      }
      >
      {/* <Text style={{color: 'blue'}}
        onPress={() => Linking.openURL('http://google.com')}
        >
        Google
      </Text> */}        
      <TouchableOpacity
      onPress={() => Linking.openURL(link)}
      >
        <Image source={{uri: media}}
         style={styles.image}
         />
      </TouchableOpacity>
     <View
     style={
      globalStyles.containerTextPostBox
    }
     >
      <TextFormatedRegular
        style={
          globalStyles.title
        }
      >
        { title }
      </TextFormatedRegular>
            {/*
      <TextFormatedRegular
        style={
          globalStyles.text
        }
      >
        { summary }
      </TextFormatedRegular> */}
      {/* <Comment /> */}
     </View>

      <TextFormatedRegular
          style={
            globalStyles.text
          }
        >
     { authors.map(
            author => <TextFormatedRegular>{author}</TextFormatedRegular>
          ) }
        </TextFormatedRegular>


      </SafeAreaView>
        )
    }