/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, View, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class HomeScreen extends Component {

    Logout = async() => {
        await AsyncStorage.removeItem('user_login');
        // this.props.navigation.navigate("Auth");
    }
    render() {

        const {navigation} = this.props;
        return (
            <View
                style={{marginBottom: 200}}
            >
                {/* <Button
                    title="Go to Auth Screen"
                    onPress={this.Logout}
                /> */}
            </View>
        )
    }
}
