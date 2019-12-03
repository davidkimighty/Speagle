import React from 'react';
import PropTypes from 'prop-types';
React.PropTypes = PropTypes;
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class PageTwo extends React.Component {
    static contextTypes = {
        routes: PropTypes.object.isRequired,
    };
    render() {
        const { routes } = this.context;
        return (
            <View style={{ margin: 128 }}>
                <Text>This is PageTwo!</Text>
                <Text onPress={Actions.pop()}>{this.props.text}</Text>
            </View>
        )
    }
}