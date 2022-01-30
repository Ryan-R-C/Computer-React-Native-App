import React from 'react';
import { SafeAreaView } from 'react-native';

import globalStyles from './src/globalStyles';

import LandingPage from './src/screens/LandingPage'


import { 
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold 
} from '@expo-google-fonts/poppins'


export default function App() {
  const [fontsLoaded] = useFonts({
      'PoppinsRegular': Poppins_400Regular, 
      'PoppinsBold': Poppins_700Bold 
    })
  return (
    <SafeAreaView
    style={
      globalStyles.Globalbox
    }
    >
      <LandingPage
      />
    </SafeAreaView>
  );
}
