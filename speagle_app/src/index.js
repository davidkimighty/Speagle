import React from 'react';
import { Text, StyleSheet, } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';
import configureStore from './store/configureStore';
const store = configureStore()
const RouterWithRedux = connect()(Router);

import Login from './components/login';
import Welcome from './components/welcome';
import Register from './components/register';
import Home from './components/home';
import Search from './components/search';


const TabIcon = ({ selected, title }) => {
    return (
        <Text style={{ color: selected ? 'red' : 'black' }}>{title}</Text>
    )
}

export default class App extends React.Component {
    
    render() {
        return (
            <Provider store={store}>
                <RouterWithRedux>
                    <Scene key="root">
                        <Scene key="welcome" component={Welcome} title="Welcome" initial={true} />
                        <Scene key="login" component={Login} title="Login" />
                        <Scene key="register" component={Register} title="Register" />
                        <Scene
                            key="rootTabBar"
                            tabs={true}
                            tabBarStyle={{ backgroundColor: '#ffffff' }}>
                            <Scene key="home" component={Home} title="Home" icon={TabIcon} initial />
                            <Scene key="search" component={Search} title="Search" icon={TabIcon} />
                        </Scene>
                        
                    </Scene>
                </RouterWithRedux>
            </Provider>
        )
    }
}