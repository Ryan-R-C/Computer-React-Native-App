import React from 'react';
import { Linking, TouchableOpacity, View } from 'react-native';

import { Image,  SafeAreaView  } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons'; 
import globalStyles from '../../globalStyles';

import TextFormatedRegular from '../../components/TextFormated';
import styles from './styles';


export default function Posts({ title, media, link  }) {
    return (
      <SafeAreaView
      onPress={() => Linking.canOpenURL('http://google.com')}
      style={
          globalStyles.postBox
      }
      >

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
     </View>

      <TextFormatedRegular
          style={
            globalStyles.text
          }
        >
        <View
        style={styles.actionsContainer} 
        >
          <View
          style={styles.iconsContainer}
          >
            <TouchableOpacity style={styles.icon}>
              <AntDesign  name="hearto" size={24} color="white" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.icon}>
              <AntDesign  name="sharealt" size={24} color="white" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.lastIcon}>
              <Entypo  name="dots-three-vertical" size={24} color="white" />
            </TouchableOpacity>
          
          </View>
        </View>
        </TextFormatedRegular>


      </SafeAreaView>
        )
    }