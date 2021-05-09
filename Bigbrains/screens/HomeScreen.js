import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, ActivityIndicator, Image, View, Text, ScrollView, FlatList, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { TextInput, Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import AsyncStorage from '@react-native-async-storage/async-storage';
// <View style={styles.container}>
const HomeScreen = (props) => {
  const [data, setData] = useState([])
    useEffect(() => {
    fetch("https://bbrains.herokuapp.com/allpost", {
      headers: {
        "Authorization": "Bearer " + AsyncStorage.getItem("token")
      }
    }).then(res => res.json())
      .then(result => {
        console.log(result)
        setData(result.posts)
      })
  }, [])

  console.log(props);
    const logout = () => {
    AsyncStorage.removeItem('token').then(() => {
      props.navigation.replace('login');
    });
  }
  const renderIntem = (item) => {
    return (
      <View style={styles.newC}>
      <Card style={styles.card}>
        <Card.Title title={item.title} />
        <Card.Content>
          <Paragraph>{item.subject}</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: item.photo }} />
        <Card.Actions>
          <Button>View Post </Button>
          <Button>View User Profile</Button>
        </Card.Actions>
      </Card>
      </View>
    )
  }

  return (
    <View style={styles.mainCon}>

      <Text style={styles.mainHead}>POST</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => renderIntem(item)}
      />

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

export default HomeScreen;