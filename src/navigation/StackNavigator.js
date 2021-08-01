import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/home/HomeScreen";
import AuthScreen from "../screens/auth/AuthScreen";
import ContactScreen from "../screens/contact/ContactScreen";
import NavigationDrawerHeader from "../components/NavigationDrawerHeader";

const Stack = createStackNavigator();

const screenOptionStyle = {
    // headerStyle: {
    //     backgroundColor: "#9AC4F8",
    // },
    // headerTintColor: "white",
    // headerBackTitle: "Back",
};

const HomeStackNavigator = ({ navigation }) => {
    return (
        <Stack.Navigator
            screenOptions={screenOptionStyle}
            initialRouteName="HomeScreen"
        >
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Home', //Set Header Title
                    headerLeft: () => (
                        <NavigationDrawerHeader navigationProps={navigation} />
                    ),
                    headerStyle: {
                        backgroundColor: '#307ecc', //Set Header color,
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                        alignSelf: "center"
                    },
                    headerRight: () => (
                        <NavigationDrawerHeader navigationProps={navigation} />
                    ),
                }}
            />
        </Stack.Navigator>
    );
}

const ContactStackNavigator = ({ navigation }) => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen
                name="Contact"
                component={ContactScreen}
                options={{
                    title: 'Contact', //Set Header Title
                    headerLeft: () => (
                        <NavigationDrawerHeader navigationProps={navigation} />
                    ),
                    headerStyle: {
                        backgroundColor: '#307ecc', //Set Header color,
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                        alignSelf: "center"
                    },
                    headerRight: () => (
                        <NavigationDrawerHeader navigationProps={navigation} />
                    ),
                }}
            />
        </Stack.Navigator>
    );
}

const AuthStackNavigator = () => {
    return (
        <Stack.Navigator headerMode="none" screenOptions={screenOptionStyle}>
            <Stack.Screen name="Auth" component={AuthScreen} />
        </Stack.Navigator>
    );
}

export { HomeStackNavigator, ContactStackNavigator, AuthStackNavigator };