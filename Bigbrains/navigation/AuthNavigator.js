import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoadingScreen from '../screens/LoadingScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import Exit from '../screens/Exit';
import SignUp from '../screens/SignupScreen';
import AccountScreen from '../screens/AccountScreen';

const Stack = createStackNavigator();

function AuthNavigator() {
    return (
      <Stack.Navigator
        headerMode="none"
        screenOptions={{
          headerStyle: { elevation: 0 },
          cardStyle: { backgroundColor: '#fff' },
        }}>
        <Stack.Screen name="loading" component={LoadingScreen}></Stack.Screen>
        <Stack.Screen name="profile" component={AccountScreen}></Stack.Screen>
        <Stack.Screen name="home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="Exit" component={Exit}></Stack.Screen>


  
        <Stack.Screen name="login" component={LoginScreen}></Stack.Screen>
        <Stack.Screen name="signup" component={SignUp}></Stack.Screen>
      </Stack.Navigator>
    );
  }
  
  export default AuthNavigator;