import React from 'react';
import { StatusBar } from 'expo-status-bar';

import Routes from './src/routes';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <Routes />
      <StatusBar style="dark" backgroundColor='#fff' />
    </SafeAreaView>
  );
}