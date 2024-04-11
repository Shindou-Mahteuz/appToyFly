import React from 'react';
import Navigation from './Navigation';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 3000);

function App() {
  return (
    <Navigation />
  );
}

export default App;