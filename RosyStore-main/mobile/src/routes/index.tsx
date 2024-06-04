import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import StackNavigator from './stack';

export default function Routes() {
  return (
    <NavigationContainer>
      <StackNavigator /> 
    </NavigationContainer>
  );
}