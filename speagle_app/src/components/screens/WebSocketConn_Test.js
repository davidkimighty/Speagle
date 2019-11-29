import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'


class ButtonBasics extends Component {
    _onPressButton() {
        const socket = new WebSocket('ws://localhost:8000/ws/chat/bob/');

        socket.onopen = () => {
            // connection opened
            console.log('Open!')
            socket.send(
                JSON.stringify({
                    'message': 'hello from client'
                })
            ); // send a message
        }
    }
    render() {
        return (
            <View style={btnStyles.container}>
                <View style={btnStyles.buttonContainer}>
                    <Button 
                        onPress={this._onPressButton}
                        title="Connect"
                    />
                </View>
            </View>
        );
    }
}


class WebSocketConn_Test extends Component {
    render () {
        return (
            <View style={{flex: 1}}>
                <ButtonBasics />
            </View>
        )
    }
}
export default WebSocketConn_Test;


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