import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';

export const  Flashcard1 = (props) => {
    return(
        <View style ={styles.flashcard1}>
            <Text style ={styles.textHeader1}> props.title </Text>
            <Text style ={styles.textStandard}> props.title </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    flashcard1: {
      backgroundColor: '#FF5454',
      width: '70%',
      height: '32%',
      marginBottom: 20,
      borderRadius: 30,
    },
    textStandard: {
      fontFamily: 'PoppinsBlack',
      fontSize: 15,
      color: 'white',
      marginLeft: 30
    },
    textHeader1: {
        marginTop: 20,
        alignSelf: 'center',
        fontFamily: 'PoppinsBlack',
      fontSize: 20,
      color: 'white',
      fontWeight: 'bold'
    }
  });