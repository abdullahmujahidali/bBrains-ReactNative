import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState} from 'react';
import { StyleSheet, ActivityIndicator, Image,View,Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, TextInput } from 'react-native-paper';

// <View style={styles.container}>
export default function LoadingScreen(props) {
    
    const detectLogin = () =>{
        const token = AsyncStorage.getItem('token')
        if (token) {
            props.navigation.navigate("profile")
        }
        else {
            props.navigation.navigate("login")
        }
    }
    useEffect(() => {
       detectLogin()
      }, [])
    return (
        <View style={styles.container}>
        <ActivityIndicator size="large" color="black">
         
        </ActivityIndicator>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
  
});
