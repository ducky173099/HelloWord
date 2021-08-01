import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ContactStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";
import CustomSidebarMenu from "../components/CustomSidebarMenu";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerContentOptions={{
                activeTintColor: '#cee1f2',
                color: '#cee1f2',
                itemStyle: { marginVertical: 5, color: 'white' },
                labelStyle: {
                    color: '#d8d8d8',
                },
            }}
            screenOptions={{ headerShown: false }}
            drawerContent={CustomSidebarMenu}
        >
            <Drawer.Screen options={{drawerLabel: 'Home Screen'}} name="Home" component={TabNavigator} />
            {/* <Drawer.Screen options={{drawerLabel: 'Contact Screen'}} name="Contact" component={ContactStackNavigator} /> */}
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;