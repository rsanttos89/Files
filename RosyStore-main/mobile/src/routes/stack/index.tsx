import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/** PAGES */
import TabNavigator from '../tabs';
import Form from '../../screens/Form';

/** STACK NAVIGATION COMPONENT */
function Stack() {

  /** RETURN STACK NAVIGATION */
  const { Navigator, Screen } = createNativeStackNavigator();
  return (
    <Navigator>
      {/* <Screen 
        name="TabNavigator"
        component={TabNavigator}
        options={{ headerShown: false }}
      /> */}

      <Screen 
        name="Form"
        component={Form}
        options={{ headerShown: false,  title: 'CADASTRAR PRODUTO' }}
      />
    </Navigator>
  );
}

export default Stack;