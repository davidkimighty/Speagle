import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  FlatList,
  SectionList
} from 'react-native';

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

class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}

class ButtonBasics extends Component {
  _onPressButton() {
    alert('You tapped the button!')
  }

  render() {
    return (
      <View style={btnStyles.container}>
        <View style={btnStyles.buttonContainer}>
          <Button 
            onPress={this._onPressButton}
            title="Press Me"
          />
        </View>
        <View style={btnStyles.buttonContainer}>
          <Button
            backgroundColor='red'
            onPress={this._onPressButton}
            title="Press Me"
            color="red"
          />
        </View>
      </View>
    );
  }

}

export default class GreetingPeople extends Component {
  render() {
    let picture = { uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' };
    return (
      <ScrollView contentContainerStyle={{
        flex: 1,
        paddingTop: 30,
        margin: 40,
        backgroundColor: 'white'
      }}>
        <View style={styles.firstrow}>
          <Text style={styles.title}>Flex</Text>
        </View>
        <View style={styles.secondrow}>
          <SayHi firstname='Hyunwoo' lastname='Kim' />
          <SayHi firstname='Dapea' lastname='Mo' />
        </View>
        <View style={styles.thirdrow}>
          <Blink text='Blink Test' />
          <ButtonBasics />
        </View>
        <View style={styles.forthrow}>
          <ShowImage image={picture} />
          <PizzaTranslator />
          
        </View>
        <View style={listStyles.container}>
            <SectionList
              sections={[
                {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
                {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
              ]}
              renderItem={({item}) => <Text style={listStyles.item}>{item}</Text>}
              renderSectionHeader={({section}) => <Text style={listStyles.sectionHeader}>{section.title}</Text>}
              keyExtractor={(item, index) => index}
            />
          </View>
      </ScrollView>
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

const btnStyles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 0,
    backgroundColor: 'orange'
  }
});

const listStyles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})