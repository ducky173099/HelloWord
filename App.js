/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
    SafeAreaView, Text, View,
} from 'react-native';
import MainApp from './src/MainApp';
import SplashScreen from './src/screens/splash/SplashScreen';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSplash: true
        }
    }

    performTimeConsumingTask = async () => {
        return new Promise((resolve) =>
            setTimeout(
                () => { resolve('result') },
                3000
            )
        );
    }

    async componentDidMount() {
        // Preload data from an external API
        // Preload data using AsyncStorage
        const data = await this.performTimeConsumingTask();
        if (data !== null) {
            this.setState({ showSplash: false });
        }
    }

    render() {
        if (this.state.showSplash) {
            return <SplashScreen />;
        }
        return (
            <MainApp />
        )
    }
}
