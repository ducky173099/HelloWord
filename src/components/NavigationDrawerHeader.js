import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

export default class NavigationDrawerHeader extends Component {

    toggleDrawer = () => {
        this.props.navigationProps.toggleDrawer();
    };
    render() {
        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={this.toggleDrawer}>
                    <Image
                        source={{
                            uri:
                                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
                        }}
                        style={{ width: 25, height: 25, marginLeft: 5 }}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}
