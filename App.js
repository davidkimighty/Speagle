import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Image } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.container}>
        <Text>Hello, world!</Text>
                <Image source={pic} style={{width: 193, height: 110}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
       container:
       {
           flex: 1,
           backgroundColor: '#272735' // Set your own custom Color
       }
  });