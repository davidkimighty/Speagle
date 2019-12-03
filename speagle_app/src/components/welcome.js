import React from 'react';
import PropTypes from 'prop-types';
React.PropTypes = PropTypes;
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
    View,
    StyleSheet,
} from 'react-native';
import { Text, Heading } from '@shoutem/ui';
import { connectStyle } from '@shoutem/theme';




class Welcome extends React.Component {
    static navigationOptions = {
        header: null,
    };


    render() {
        const { routes } = this.context;
        return (
            <View style={styles.background}>
                <View style={styles.head}>

                    <Heading>Welcome to</Heading>
                    <Heading>Speagle!</Heading>
                    <Text style={styles.title_speagle}>Speagle!</Text>
                </View>
                <View style={styles.body}>

                </View>
                <View style={styles.foot}>
                    <View style={styles.btn_colored}>
                        <Text onPress={Actions.login} style={styles.btn_colored_text}>
                            Login
                        </Text>
                    </View>
                    <View style={styles.btn_blank}>
                        <Text onPress={Actions.rootTabBar} style={styles.btn_blank_text}>
                            Join
                        </Text>
                    </View>
                    
                </View>
            </View>
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
    btn_colored: {
        marginBottom: 13,
        marginLeft: 30,
        marginRight: 30,
        padding: 13,
        backgroundColor: '#272735',
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#272735'
    },
    btn_blank: {
        marginBottom: 13,
        marginLeft: 30,
        marginRight: 30,
        padding: 13,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#272735'
    },
    btn_colored_text: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'white',
        textAlignVertical: 'center',
        textAlign: 'center'
    },
    btn_blank_text: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#272735',
        textAlignVertical: 'center',
        textAlign: 'center'
    },
    title_welcome: {
        fontSize: 25,
        textAlignVertical: 'center',
        textAlign: 'center'
    },
    title_speagle: {
        fontWeight: 'bold',
        fontSize: 50,
        color: '#272735',
        textAlignVertical: 'center',
        textAlign: 'center'
    },
})

export default connect(state => ({
    routes: state.routes
}), null)(Welcome);