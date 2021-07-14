import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useFonts } from "expo-font";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Flashcard1 } from "../components/Flashcards";//    
import { Overlay, Button } from "react-native-elements";


export const InfoOverlay = (props) => {
const [visible,setVisible] = useState(props.visible1)
  return (
      <View>
        <Overlay visible = {visible} overlayStyle = {styles.overlayContainer}>
            <Text>Hello</Text>
            <Button
            onPress={()=>setVisible(false)}>
                

            </Button>
        </Overlay>
    </View>
  );
};

const styles = StyleSheet.create({
    overlayContainer: {
        minWidth: '75%',
        minHeight: '80%'
    }
  });