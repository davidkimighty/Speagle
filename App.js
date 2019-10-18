import React, { Component } from 'react';
import { AppRegistry, Text, View, Image } from 'react-native';
// We are making our custom component to make use of it everywhere we want 
class SayHi extends Component {
  render() {
    return (
      <View>
        <Text>Hello, {this.props.firstname} {this.props.lastname}</Text>
        <Image
          style={{width: 50, height: 50}}
          source={this.props.image}
        />
      </View>
    );
  }
}
export default class GreetingPeople extends Component {
  render() {
    let picture = { uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' };
    return (
      <View style={{justifyContent: 'center',alignItems: 'center', flex:1}}>
        <SayHi firstname='Hyunwoo' lastname='Kim' />
        <SayHi firstname='Dapea' lastname='Mo' />
        <SayHi image={picture} />
      </View>
    );
  }
}