import React, { useState } from 'react';
import { Linking, TouchableOpacity, View, Image, SafeAreaView, Share, Platform, Clipboard } from 'react-native';

import { AntDesign, Entypo } from '@expo/vector-icons';
import globalStyles from '../../globalStyles';

// import Clipboard from '@react-native-clipboard/clipboard';

import TextFormatedRegular from '../../components/TextFormated';
import styles from './styles';

// import Share from 'react-native-share';

export default function Posts({ title, media, link, summary }) {
  const [ displayclipboardMessage,  setDisplayclipboardMessage ] = useState(false)

  const shareContent = async () => {
    try{
        // share exception for does not supported share function devices!
        if(Platform.OS === 'web'){
          const textToClipBoard = `${title}! click ${link} `
          setDisplayclipboardMessage(true)

          setTimeout(() => {
            setDisplayclipboardMessage(false)
          }, 2000);

          return Clipboard.setString(textToClipBoard);
        }

        const shareOpt = {
          message: title,
          title: title,
          url: link
        }

        return await Share.share(shareOpt)
    }

    catch(err){
      console.log("error =>", err);
      alert("Share are not supported in this browser")
    }


  }

  return (
    <SafeAreaView
      style={
        globalStyles.postBox
      }
    >

      <TouchableOpacity
        onPress={() => Linking.openURL(link)}
      >
        <Image source={{ uri: media }}
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
            styles.newsTitle
          }
        >
          {title}
        </TextFormatedRegular>
      </View>


      <View
        style={styles.actionsContainer}
      >
        <View
          style={styles.iconsContainer}
        >
          {/* Function not avaliable! */}
          {/* <TouchableOpacity style={styles.icon}>
              <AntDesign  name="hearto" size={24} color="white" />
            </TouchableOpacity> */}

          <TouchableOpacity
            style={styles.icon}
            onPress={() => shareContent()}
          >
            {
            !displayclipboardMessage ? (
                <AntDesign name="sharealt" size={24} color="white" />
              ) : (
                <AntDesign name="checkcircleo" style={styles.clipAdvice} size={24} color="#0f9f0f" />
              )
            }
            
          </TouchableOpacity>

          <TouchableOpacity style={styles.lastIcon}>
            <Entypo name="dots-three-vertical" size={24} color="white" />
          </TouchableOpacity>
          

        </View>
      </View>


    </SafeAreaView>
  )
}