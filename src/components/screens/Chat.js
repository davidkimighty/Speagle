import React from "react";
import {
    View,
    Text,
    AsyncStorage
} from 'react-native';
import SocketIOClient from 'socket.io-client';
import {
    GiftedChat
} from "react-native-gifted-chat";


export default class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            userId: null
        };

        this.onReceivedMessage = this.onReceivedMessage.bind(this);
        this.onSend = this.onSend.bind(this);
        this._storeMessages = this._storeMessages.bind(this);

        this.socket = SocketIOClient('http://localhost:3000');
        this.socket.on('message', this.onReceivedMessage);

    }
    componentWillMount() {
        this.setState({
            messages: [{
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            }, ],
        })
    }

    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
    }

    render() {
        return ( <
            GiftedChat messages = {
                this.state.messages
            }
            onSend = {
                messages => this.onSend(messages)
            }
            user = {
                {
                    _id: 1,
                }
            }
            />
        )
    }

    // Event listeners
    /**
     * When the server sends a message to this.
     */
    onReceivedMessage(messages) {
        this._storeMessages(messages);
    }

    /**
     * When a message is sent, send the message to the server
     * and store it in this component's state.
     */
    onSend(messages = []) {
        this.socket.emit('message', messages[0]);
        this._storeMessages(messages);
    }

    render() {
        var user = {
            _id: this.state.userId || -1
        };

        return ( <
            GiftedChat messages = {
                this.state.messages
            }
            onSend = {
                this.onSend
            }
            user = {
                user
            }
            />
        );
    }

    // Helper functions
    _storeMessages(messages) {
        this.setState((previousState) => {
            return {
                messages: GiftedChat.append(previousState.messages, messages),
            };
        });
    }
}