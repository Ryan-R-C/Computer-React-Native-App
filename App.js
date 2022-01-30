import React from 'react';
import { SafeAreaView } from 'react-native';

import globalStyles from './src/globalStyles';

import LandingPage from './src/screens/LandingPage'

export default function App() {
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
