
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Button1 = (props) => { 
 return(
     <Button
     style = {styles.button1Style}
     title="Outline Button"
     type="outline"
     icon = {
         <Icon
         name="arrow-right"
         size = {15}
         color="white"
         >
         </Icon>
     }
     >

     </Button>
 );
}

export const LabeledButton1 = (props) => {
    return(
        <View style={styles.labeledButtonContainer}>
            <Text style={styles.labelFormat}>{props.label.country}</Text>
        <TouchableOpacity style = {styles.button1Style}>
            <Text style = {styles.buttonText}>More info</Text>
     </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonText: {
        alignSelf:'center',
    },
    labelFormat: {
        color: 'white',
        fontWeight: 'bold',
    },
    button1Style: {
        marginLeft: 10,
        backgroundColor: 'white',
        width: 80,
        justifyContent: 'center',
        height: 25,
        borderRadius: 5,
    },
    labeledButtonContainer: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '100%'
    }

});