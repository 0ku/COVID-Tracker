import * as React from "react";
import { Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from "../screens/Home";
import Search from "../screens/Search";

const Tab = createMaterialTopTabNavigator();

export default function createAppContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name = "Home" component={Home}/>
                <Tab.Screen name = "Search" component={Search}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
