import React, { Component } from 'react';
import { AppRegistry, Text, View, Image } from 'react-native';
// We are making our custom component to make use of it everywhere we want 
class SayHi extends Component {
  render() {
    return (
      <View>
        <Text>Hello, {this.props.firstname} {this.props.lastname}</Text>
      </View>
    );
  }
}

class ShowImage extends Component {
  render() {
    return (
      <View>
        <Image
          style={{width: 100, height: 100}}
          source={this.props.image}
        />
      </View>
    );
  }
}

class Blink extends Component {
  componentDidMount(){
    // Toggle the state every second
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 1000);
  }

  //state object
  state = { isShowingText: true };

  render() {
    if (!this.state.isShowingText) return null;
    return (
      <View>
        <Text>{this.props.text}</Text>
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
        <ShowImage image={picture} />
        <Blink text='Blink Test' />
      </View>
    );
  }
}