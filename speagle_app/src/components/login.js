import React from 'react';
import {
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';


import { View, Text, Heading, TextInput, Button, NavigationBar } from '@shoutem/ui';
import { connectStyle } from '@shoutem/theme';


class Login extends React.Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    attemptLogin() {
        async function login() {
            try {
              let response = await fetch(
                'https://facebook.github.io/react-native/movies.json',
              );
              let responseJson = await response.json();
              return responseJson.movies;
            } catch (error) {
              console.error(error);
            }
          }
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.background} behavior="padding">
                <View style={styles.head}>
                    <NavigationBar
                        styleName="clear"
                        hasHistory
                        navigateBack={Actions.welcome}
                    />
                </View>
                <View style={styles.body}>
                    <Heading>Login</Heading>
                    <TextInput
                        placeholder="email"
                        onChangeText={(email) => this.setState({ email })}
                        value={this.state.email}
                    />
                    <TextInput
                        placeholder="password"
                        secureTextEntry
                        onChangeText={(password) => this.setState({ password })}
                        value={this.state.password}
                    />
                    <Button styleName="full-width">
                        <Text>LOGIN</Text>
                    </Button>
                </View>
                <View style={styles.foot}>

                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        padding: 30,
        backgroundColor: 'white'
    },
    head: {
        flex: 0.3,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    body: {
        flex: 1,
        backgroundColor: 'white'
    },
    foot: {
        flex: 0.3,
        backgroundColor: 'white',
    },
})

export default connect(({ routes }) => ({ routes }))(Login)