import { StatusBar } from "expo-status-bar";
import React,{useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import { Button, TextInput } from "react-native-paper";
import AsyncStorage from '@react-native-async-storage/async-storage';
function LoginScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const sendCredentials = async () => {
    fetch("https://bbrains.herokuapp.com/signin", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({

        "email": email,
        "password": password,
      })
    })
      .then(res => res.json())
      .then( async data => {
        try {
          await AsyncStorage.setItem('token',data.token)
          props.navigation.replace("profile")
        
        } catch (e) {
          console.log(e);
        }

      })

  }
  return (
    <View style={styles.mainD}>
      <KeyboardAvoidingView behavior="position">
        <StatusBar
          style="dark"
          backgroundColor="black"
          barStyle="light-content"
        />
        <Image
          style={styles.logoStyle}
          source={require("../assets/logoBlack.png")}
        />

        <Text style={styles.subIntro}>Proceed with your</Text>
        <Text style={styles.intro}> Login</Text>

        <TextInput
          style={styles.textInpStyle}
          theme={{ colors: { primary: "red" } }}
          underlineColor=""
          label="Email"
          mode="flat"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.textInpStyle}
          theme={{ colors: { primary: "red" } }}
          secureTextEntry={true} 
          label="Password"
          mode="flat"
          onChangeText={(text) => setPassword(text)}
        />
        <Button
          style={styles.btnStyle}
          mode="contained"
          onPress={() => sendCredentials()}
        >
          SIGN IN
        </Button>
        <TouchableOpacity>
          <Text
            onPress={() => props.navigation.navigate("signup")}
            style={styles.subText}
          >
            I'm a new user <Text style={styles.spIn}> Sign Up</Text>{" "}
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      </View>
  );
}


const styles = StyleSheet.create({
    mainD:{
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
        marginLeft: 15,
        marginTop: 10,
        color: "#3b3b3b",
        fontWeight: "bold"
    },
    spIn: {
        fontWeight: "bold",
    
        color: "blue"
    },
    subIntro: {
        marginTop: 10,
        fontSize: 20,
        marginLeft: 18,
        color: "black"
    },
    selfClosing: {
        borderBottomColor: "red",
        borderBottomWidth: 2,
        marginLeft: 120,
        marginRight: 100,
        marginTop: 0,
        marginBottom: 5
    },
    txtLabel: {
        marginTop: 10,
        marginLeft: 15,
    },
    titleM: {
        fontSize: 30,
        marginLeft: 18,
        marginTop: 15,
        textAlign: "center"
    },
    bckBtn: {
        backgroundColor: "white"
    },
    bckBtnHead: {
        backgroundColor: "white",
        borderBottomColor: "white"
    },
    textInpStyle: {
        marginLeft: 18,
        marginRight: 18,
        marginTop: 10,
        backgroundColor: "white"
    },
    btnStyle: {
        marginLeft: 18,
        marginRight: 18,
        marginTop: 30,
        backgroundColor: "black",
        textShadowColor: "white",
        borderRadius: 35,
    },
    subText: {
        fontSize: 15,
        marginLeft: 18,
        marginTop: 10,
        textAlign: "center"
    },
    logoStyle: {
        marginLeft: 125,
        marginTop: 100,
        height: 140,
        width: 130,
        marginBottom: 20
    }
});

export default LoginScreen;