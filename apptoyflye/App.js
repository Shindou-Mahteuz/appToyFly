import React from 'react';
import Sanduiche from './Sanduiche';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-gesture-handler';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 3000);

function App() {
  return (
    <Sanduiche />
  );
}

export default App;