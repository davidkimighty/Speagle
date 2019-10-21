import React, { Component } from 'react';
import { AppRegistry, Text, View, Image, StyleSheet } from 'react-native';

class SayHi extends Component {
  render() {
    return (
      <View style={styles.body}>
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
          style={{
            width: 200,
            height: 150,
            borderRadius: 20
          }}
          source={this.props.image}
        />
      </View>
    );
  }
}

class Blink extends Component {
  componentDidMount(){
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 1000);
  }
  state = { isShowingText: true };

  render() {
    if (!this.state.isShowingText){
      return (
        <View>
          <Text style={styles.red}>{this.props.text}</Text>
        </View> 
      );
    } else{
      return (
        <View>
          <Text style={styles.blue}>{this.props.text}</Text>
        </View> 
      );
    }
  }
}

export default class GreetingPeople extends Component {
  render() {
    let picture = { uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' };
    return (
      <View style={styles.container}>
        <View style={styles.firstrow}>
          <Text style={styles.title}>Flex</Text>
        </View>
        <View style={styles.secondrow}>
          <SayHi firstname='Hyunwoo' lastname='Kim' />
          <SayHi firstname='Dapea' lastname='Mo' />
        </View>
        <View style={styles.thirdrow}>
          <Blink text='Blink Test' />
        </View>
        <View style={styles.forthrow}>
          <ShowImage image={picture} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    margin: 40,
    backgroundColor: 'white'
  },
  firstrow: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  secondrow: {
    flex: 1,
    backgroundColor: "#ffc857",
    justifyContent: 'center', 
    alignItems: 'center',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20
  },
  thirdrow: {
    flex: 2,
    backgroundColor: "#4b3f72",
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  forthrow: {
    flex: 3,
    backgroundColor: "#119da4",
    justifyContent: 'center', 
    alignItems: 'center',
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20
  },
  title: {
    fontWeight: 'bold',
    fontSize: 35,
    textAlignVertical: 'center',
    textAlign: 'center'
  },
  body: {
    color: 'black',
    fontSize: 20
  },
  red: {
    fontWeight: 'bold',
    color: 'red',
    fontSize: 40
  },
  blue: {
    fontWeight: 'bold',
    color: 'blue',
    fontSize: 40
  }
});