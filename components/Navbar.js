import * as React from "react";
import { Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from "../screens/Home";
import { useFonts } from 'expo-font';
import Search from "../screens/Search";

const Tab = createMaterialTopTabNavigator();

export default function createAppContainer() {
    const [loaded] = useFonts({
        PoppinsBlack: require('../assets/fonts/Poppins-Regular.ttf'),
        PoppinsBold: require('../assets/fonts/Poppins-Bold.ttf')
    });

    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: "white",
                    style: {backgroundColor: '#2E2E2E'},
                    labelStyle: {fontFamily: 'PoppinsBlack',fontWeight: '100%'}
                }}    
            >
                <Tab.Screen name = "Home" component={Home}/>
                <Tab.Screen name = "Search" component={Search}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
