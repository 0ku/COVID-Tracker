import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import { Button1, LabeledButton1 } from './Buttons';
import { InfoOverlay } from './Overlay';
import { proc } from 'react-native-reanimated';
/*<View style ={styles.flashcard1}>
          <Text style = {styles.textHeader1}>{props.title}</Text>
            <LabeledButton1 label = {props.items[0]}/>
            <LabeledButton1/>
            <LabeledButton1/>
        </View>*/
export const Flashcard1 = (props) => {
  console.log(props.items)
    return(
      <View style = {styles.flashcard1}>
      {props.items && props.items.length >0? 
      <View>
      <Text style = {styles.textHeader1}>{props.title}</Text>
        <LabeledButton1 label = {props.items[0]}/>
        <LabeledButton1 label = {props.items[1]}/>
        <LabeledButton1 label = {props.items[2]}/>
      </View>
    :<View></View>}
    </View>
    );
}

const Label1 = (props) => {
  return(
    <View style = {styles.horizontalView}>
      <Text style = {styles.header2}>{props.title}</Text>
      <Text style = {styles.textStandard}>{props.value}</Text>
    </View>
  );
}


export const Flashcard2 = (props) => {
  return (
    <View style = {styles.flashcard2}>
      <View style = {styles.horizontalView}></View>
      <Text style = {styles.textHeader1}> {props.item.country}</Text>
      <Label1 title = "Population" value = {props.item.population}></Label1>
      <Label1 title = "Active Cases" value = {props.item.cases.active}></Label1>
      <Label1 title = "New Cases" value = {props.item.cases.new}></Label1>
      <Label1 title = "Recovered" value = {props.item.cases.recovered}></Label1>
      <Label1 title = "Total Cases" value = {props.item.cases.total}></Label1>
    </View>
  );
}


const styles = StyleSheet.create({
  flashcard2: {
    width: '80%',
    height: '50%',
    backgroundColor: '#FF5454',
    borderRadius: 30,
  },
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
      marginLeft: 20,
      marginTop: 7,
    },
    header2: {
      fontFamily: 'PoppinsBlack',
      fontSize: 18,
      color: 'white',
      fontWeight: 'bold',
      alignSelf: 'center',
    },
    horizontalView: {
      flexDirection: 'row',
      alignContent: 'center',
      justifyContent: 'center',
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