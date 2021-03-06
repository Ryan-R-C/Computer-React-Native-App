import React from 'react';
import { View } from 'react-native';


import { 
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold 
} from '@expo-google-fonts/poppins'

import Routes from './src/Routes';


export default function App() {
  const [fontsLoaded] = useFonts({
      'PoppinsRegular': Poppins_400Regular, 
      'PoppinsBold': Poppins_700Bold 
    })

  if(!fontsLoaded){
    return <View/>
  }

  return (
    <Routes />
  );
}
