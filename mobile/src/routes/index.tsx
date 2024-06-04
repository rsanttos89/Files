import React, { useEffect, useRef, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

import RoutesAuth from './stacks/auth';
import RoutesPrivete from './stacks/routesPrivate';

import { userProfile, userSessiont } from '../context/auth';

export default function Routes() {
  const { profile } = userProfile();
  const [isLoading, setIsLoading] = useState(true);
  const { session, setSession } = userSessiont();
  const animation = useRef(null);

  const handleSignInWith = async () => {
    try {
      const user = await AsyncStorage.getItem('@user');
      if (!user) {
        setTimeout(() => {
          setSession(false);
        }, 1000);
      }
    } catch (error) {
      console.error(error); // Handle the error appropriately here
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  const userSession = () => {
    if (profile) {
      setTimeout(() => {
        setSession(true);
      }, 1000);
    }
  };

  useEffect(() => {
    handleSignInWith();
    userSession();
  }, [profile]);

  if(isLoading) {
    return (
      <View style={{
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
        backgroundColor: '#1B1F25',
        paddingVertical: 75,
        paddingHorizontal: 16,
      }}>
        <LottieView
          autoPlay
          ref={animation}
          style={{
            backgroundColor: '#1B1F25',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          source={require('../assets/loading.json')}
        />
      </View>
    )
  }

  if (!session) {
    return (
      <NavigationContainer>
        <RoutesAuth />
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <RoutesPrivete />
    </NavigationContainer>
  );
}