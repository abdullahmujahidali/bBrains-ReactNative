import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AppNavigator from './navigation/AppNavigator';
import AuthNavigator from './navigation/AuthNavigator';

export default function App() {
  const [user, setUser] = useState('');
  const [IsReady, setIsReady] = useState(false);
  const RestoreUser = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      setUser(true);
    } else {
      setUser(false);
    }
  };

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={RestoreUser}
        onFinish={() => setIsReady(true)}
        onError={() => {}}
      />
    );
  }

  return (
    <NavigationContainer>
      {!user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}