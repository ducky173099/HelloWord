import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MainStackNavigator, AuthStackNavigator } from './navigation/StackNavigator';
import BottomTabNavigator from './navigation/TabNavigator';
import DrawerNavigator from './navigation/DrawerNavigator';

import HomeScreen from './screens/home/HomeScreen';
import AuthScreen from './screens/auth/AuthScreen';


StatusBar.setHidden(true);
const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

export default class MainApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        }
    }
    async componentDidMount() {
        const user = await AsyncStorage.getItem('user_login');
        if (user !== null) {
            this.setState({ isLogin: true });
        }
    }

    render() {
        const { navigation } = this.props;
        const { isLogin } = this.state;
        return (
            <NavigationContainer>
                {/* <Stack.Navigator
                    configureScene={route => {
                        if (route.name === "AUTHENTICATION") {
                            return navigation.SceneConfigs.FloatFromRight;
                        } else {
                            return navigation.SceneConfigs.FloatFromLeft;
                        }
                    }}
                    headerMode='none' 
                    initialRouteName="HOME"
         
                >
                    <Stack.Screen name="HOME" component={HomeScreen} />
                    <Stack.Screen name="AUTH" component={AuthScreen} />
                </Stack.Navigator> */}
                <Stack.Navigator>
                    <Stack.Screen
                        name="Auth"
                        component={AuthStackNavigator}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="DrawerRouter"
                        component={DrawerNavigator}
                        options={{
                            headerShown: false
                        }}
                    />
                </Stack.Navigator>
                {/* {isLogin ? <AuthStackNavigator /> : <DrawerNavigator />} */}
            </NavigationContainer>
        )
    }
}
