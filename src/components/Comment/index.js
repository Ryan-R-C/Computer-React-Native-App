import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { TextInput } from 'react-native';

import styles from './styles';


export default function Comment() {
    return (
      <TextInput 
      keyboardType='default'
      selectTextOnFocus
      style={
          styles.Comment
      }

      />
        )
    }