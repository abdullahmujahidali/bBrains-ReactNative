import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, Image } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
// <View style={styles.container}>
const SignupScreen = (props) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [organization, setOrganization] = useState('');
  const [role, setRole] = useState('');
  const [country, setCountry] = useState('');
  const [intro, setIntro] = useState('');

  const sendCredentials = async () => {
    fetch("https://bbrains.herokuapp.com/signup", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "name": name,
        "email": email,
        "password": password,
        "country": country,
        "organization": organization,
        "role": role,
        "intro": intro
      })
    })
      .then(res => res.json())
      .then(data => {
        try {
           AsyncStorage.setItem('token', data.token)
        } catch (e) {
          console.log(e);
        }

      })

  }

  return (
    <View style={styles.mainD}>
      <KeyboardAvoidingView behavior="position">
        <StatusBar style="dark" backgroundColor="black" barStyle="light-content" />
        <Image style={styles.logoStyle} source={require('../assets/logoBlack.png')} />
        <Text style={styles.intro}> Create Account.</Text>
        <Text style={styles.subIntro}>Sign up to get started!</Text>
        <TextInput style={styles.textInpStyle} theme={{ colors: { primary: "red" } }}
          label="Name" mode="flat" value={name} onChangeText={(text) => setName(text)} />
        <TextInput style={styles.textInpStyle} theme={{ colors: { primary: "red" } }}
          label="Email" mode="flat" value={email} onChangeText={(text) => setEmail(text)} />
        <TextInput style={styles.textInpStyle} theme={{ colors: { primary: "red" } }}
          label="Password" mode="flat" secureTextEntry={true} value={password} onChangeText={(text) => setPassword(text)} />
        <TextInput style={styles.textInpStyle} theme={{ colors: { primary: "red" } }}
          label="Organization" mode="flat" value={organization} onChangeText={(text) => setOrganization(text)} />
        <TextInput style={styles.textInpStyle} theme={{ colors: { primary: "red" } }}
          label="Role" mode="flat" value={role} onChangeText={(text) => setRole(text)} />
        <TextInput style={styles.textInpStyle} theme={{ colors: { primary: "red" } }}
          label="Country" mode="flat" value={country} onChangeText={(text) => setCountry(text)} />
        <TextInput style={styles.textInpStyle} theme={{ colors: { primary: "red" } }}
          label="Into" mode="flat" value={intro} onChangeText={(text) => setIntro(text)} />
        <Button style={styles.btnStyle} mode="contained" onPress={() => sendCredentials()}>
          SIGN UP
  </Button>
        <TouchableOpacity>
          <Text style={styles.subText} >I'm already a member <Text onPress={() => props.navigation.navigate("login")} style={styles.spIn}> Sign In</Text> </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainD: {
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  intro: {
    fontSize: 30,
    marginLeft: 14,
    marginTop: 10,
    color: "#3b3b3b",
    fontWeight: "bold"
  },
  spIn: {
    fontWeight: "bold",
    color: "blue"
  },
  subIntro: {
    marginTop: 8,
    marginBottom: 10,
    fontSize: 20,
    marginLeft: 22,
    color: "black"
  },
  selfClosing: {
    borderBottomColor: "red",
    borderBottomWidth: 2,
    marginLeft: 18,
    marginRight: 70,
    marginTop: 0,
    marginBottom: 10
  },
  titleM: {
    fontSize: 20,
    marginLeft: 18,
    textAlign: "center",
    marginTop: 5,
  },
  textInpStyle: {
    marginLeft: 18,
    marginRight: 18,
    marginTop: 2,
    backgroundColor: "white",
    height: 50,
    width: "auto",
    borderWidth: 0,
  },
  btnStyle: {
    marginLeft: 18,
    marginRight: 18,
    marginTop: 10,
    backgroundColor: "black",
    textShadowColor: "white",
    borderRadius: 35
  },
  subText: {
    fontSize: 15,
    marginLeft: 18,
    marginTop: 10,
    textAlign: "center"
  },
  logoStyle: {
    marginLeft: 125,
    marginTop: 50,
    height: 140,
    width: 130
  }
});

export default SignupScreen;