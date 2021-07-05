import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

export default function Search() {
  const [loaded] = useFonts({
    PoppinsBlack: require('../assets/fonts/Poppins-Regular.ttf'),
  });
  return(
      <ScrollView>
          <Text>This is a test</Text>
      </ScrollView>
  );
  
}