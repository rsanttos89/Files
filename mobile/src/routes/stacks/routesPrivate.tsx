import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from '../../screens/private/Dashboard';

/** STACK NAVIGATION COMPONENT */
function RoutesPrivete() {

  /** RETURN STACK NAVIGATION */
  const { Navigator, Screen } = createNativeStackNavigator();
  return (
    <Navigator>
      <Screen 
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
}

export default RoutesPrivete;