import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import SplashStyles from './SplashStyles';
import images from '../../assets/images';
import LinearGradient from 'react-native-linear-gradient';

export default class SplashScreen extends Component {


    render() {
        return (
            <View style={SplashStyles.containerSplash}>
                <View style={SplashStyles.body}>
                    <Image style={SplashStyles.logo} source={images.logo} />
                </View>
                <View style={SplashStyles.footer}>
                    <Text style={SplashStyles.textTop}>from</Text>
                    <LinearGradient
                        colors={['#CA1D7E', '#E35157', '#F2703F']}
                        start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                    >
                        <Text style={SplashStyles.textBot}>FACEBOOK</Text>
                    </LinearGradient>
                </View>
            </View>
        )
    }
}
