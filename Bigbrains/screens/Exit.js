import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ActivityIndicator, Image, View, Text, ScrollView, FlatList, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { TextInput, Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import AsyncStorage from '@react-native-async-storage/async-storage';
// <View style={styles.container}>
const Exit = (props) => {
  console.log(props);
  const myitems = [
    {
      name: 'Adopt chow chow',
      type: 'cat',
      breed: 'persian',
      age: '3',
      description: 'moving out dye to the megerncy cant but mre pets in my',
      contactNumber: '03229437619',
      contactName: 'abdullah',
      image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aXBob25lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
   

  ]
  const logout = (props) => {
    AsyncStorage.removeItem('token').then(() => {
      props.navigation.replace('login');
    });
  }

  return (
    <View style={styles.mainCon}>
     
        <Button
        style={styles.btnStyle}
        mode="contained"
        onPress={() => logout(props)}
      >
        LOG OUT
        </Button>

    </View>
  );
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
    marginTop:50
    
  },
  btnStyle: {
    marginLeft: 18,
    marginRight: 18,
    marginTop: 50,
    backgroundColor: "black",
    textShadowColor: "white",
    borderRadius: 35,
  },

});

export default Exit;