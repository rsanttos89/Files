import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

import Routes from './src/routes';
import Provider from './src/context/auth';

export default function App() {
  return (
    <Provider>
      <SafeAreaView style={{flex: 1, backgroundColor: '#1B1F25'}}>
        <Routes />
        <StatusBar style="light" backgroundColor='#1B1F25' />
      </SafeAreaView>
    </Provider>
  );
}