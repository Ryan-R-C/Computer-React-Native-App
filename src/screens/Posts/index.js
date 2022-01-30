import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, KeyboardAvoidingView } from 'react-native';

import styles from './styles';
import globalStyles from '../../globalStyles';

import Comment from '../../components/Comment';

export default function Posts({ id, title, content}) {
    return (
      <SafeAreaView
      style={
          globalStyles.postBox
      }
      >
      <Text
      style={
        styles.text
    }
      >
        { id }
      </Text>
      <Text
        style={
            styles.text
        }
      >
        { title }
      </Text>
      <Text
        style={
        styles.text
        }
      >
        { content }
      </Text>
      {/* <Comment /> */}
      </SafeAreaView>
        )
    }