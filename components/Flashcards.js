import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import { Button1,LabeledButton1 } from './Buttons';
import { InfoOverlay } from './Overlay';
/*<View style ={styles.flashcard1}>
          <Text style = {styles.textHeader1}>{props.title}</Text>
            <LabeledButton1 label = {props.items[0]}/>
            <LabeledButton1/>
            <LabeledButton1/>
        </View>*/
export const Flashcard1 = (props) => {
  const [visible, setVisible] = useState(false)
  console.log(props.items)
    return(
      <View style = {styles.flashcard1}>
      {props.items && props.items.length >0? 
      <View>
        <InfoOverlay visible1 = {visible}></InfoOverlay>
      <Text style = {styles.textHeader1}>{props.title}</Text>
        <LabeledButton1 label = {props.items[0]} onPress={console.log("hi")}/>
        <LabeledButton1 label = {props.items[1]}/>
        <LabeledButton1 label = {props.items[2]}/>
      </View>
    :<View><Text>hi</Text></View>}
    </View>
    );
}


const styles = StyleSheet.create({
    flashcard1: {
      backgroundColor: '#FF5454',
      minWidth: '80%',
      maxWidth: '80%',
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
        marginBottom: 5,
        alignSelf: 'center',
        fontFamily: 'PoppinsBlack',
      fontSize: 20,
      color: 'white',
      fontWeight: 'bold'
    }
  });