import React from 'react';
import { AntDesign } from '@expo/vector-icons'; 
import { StyleSheet, Text, View } from 'react-native';

interface Props {
    iconName: any,
    text: string
}

export const MyInfoBox = ({iconName, text}: Props) => {
    return(
      <View style={styles.infoContainer}>
        <AntDesign name={iconName} size={20} color="black" />
        <Text style={styles.text}>{text}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: 'row',
    width: '85%',
    borderColor: 'darkgray',
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },
  text: {
    marginLeft: 10,
    color: 'black',
    fontSize: 15
  }
})