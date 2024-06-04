import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../../screens/auth/Home';
import SignIn from '../../screens/auth/SignIn';
import SignUp from '../../screens/auth/SignUp';

/** STACK NAVIGATION COMPONENT */
function Stack() {

  /** RETURN STACK NAVIGATION */
  const { Navigator, Screen } = createNativeStackNavigator();
  return (
    <Navigator screenOptions={{
      headerShown: false,
      animation: 'slide_from_right'
    }}>
      <Screen 
        name="Home"
        component={Home}
      />

      <Screen
        name="SignIn"
        component={SignIn}
      />

      <Screen 
        name="SignUp"
        component={SignUp}
      />
    </Navigator>
  );
}

export default Stack;