import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import Navigation from './components/Navbar'
export default function App() {
  const [loaded] = useFonts({
    PoppinsBlack: require('./assets/fonts/Poppins-Regular.ttf'),
    PoppinsBold: require('./assets/fonts/Poppins-Bold.ttf')
  });

  return (
    <Navigation>
    <View style={styles.container}>
      <Text style = {styles.textStandard}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
    </Navigation>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2E2E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStandard: {
    fontFamily: 'PoppinsBlack',
    fontSize: 20,
    color: '#FF5454'
  }
});
