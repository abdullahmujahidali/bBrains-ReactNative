import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, ActivityIndicator, Image, View, Text, ScrollView, FlatList, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import AccountScreen from '../screens/AccountScreen';
import Exit from '../screens/Exit';
import { Entypo } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function AppNavigator() {
  return <Tab.Navigator  screenOptions={({ route }) => ({
    tabBarIcon: ({  color }) => {
      let iconName;

      if (route.name === 'Home') {
        iconName = 'home'
      } 
      else if (route.name === 'create'){
        iconName = 'plus';
      }
      else if (route.name === 'Profile'){
        iconName = 'user';
      }
      else if (route.name === 'Exit'){
        iconName = 'plus';
      }
      // You can return any component that you like here!
      return <View style={styles.botBar}><Entypo name={iconName} color={color} size={33} /></View>
    },
  })}
  tabBarOptions={{
    activeTintColor: 'black',
    inactiveTintColor: 'gray',
    style: {backgroundColor: '#fff',},
  }} 
   >
  <Tab.Screen name='Profile' component={AccountScreen}
   />
  <Tab.Screen name='Home' component={HomeScreen} />
  <Tab.Screen name='Exit' component={Exit} />
</Tab.Navigator>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    fontSize: 18,
    justifyContent: 'center',
  }, 
  mainCon: {
    backgroundColor: '#fff',
    marginTop:50,
  },
  btnStyle: {
    marginLeft: 18,
    marginRight: 18,
    marginTop: 50,
    backgroundColor: "black",
    textShadowColor: "white",
    borderRadius: 35,
  },
  newC:{
    borderBottomColor: 'black',
    borderBottomWidth: 1,    
  },
  mainHead:{
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    marginBottom: 5,
    fontFamily: 'Al Nile'
  },

});
export default AppNavigator;