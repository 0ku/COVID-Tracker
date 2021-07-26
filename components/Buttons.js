
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import { Button, Overlay } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { OverlayInfo } from "./Overlay";

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

export const SearchButton = (props) => {
    return (
        <Button
        icon = {<Icon
        name = "search"
        size = {20}
        color = "green"/>}
        onPress = {() => props.onPress()}
        >
        </Button>
    );
}

export const LabeledButton1 = (props) => {
    const [visible, setVisible] = useState(false)
    const toggleOverlay = () => {
        setVisible(!visible);
      };
    return(
        <View style={styles.labeledButtonContainer}>
            <Overlay
            overlayStyle = {styles.overlaySizing1}
            visible = {visible}>
                <Button containerStyle = {styles.closeButton} icon={<Icon
                name= "close"
                size = {20}
                color="white"/>}
                onPress = {()=>toggleOverlay()}></Button>
                <OverlayInfo item = {props.label}/>
            </Overlay>
            <Text style={styles.labelFormat}>{props.label.country}</Text>
        <TouchableOpacity style = {styles.button1Style} onPress = {()=>toggleOverlay()}>
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
    },
    closeButton: {
        position: 'absolute',
        top: '1%',
        left:'2%'
    },
    overlaySizing1: {
        height: '60%',
        width: '80%'
    },

});