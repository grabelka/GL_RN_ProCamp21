import React from 'react';
import { AntDesign } from '@expo/vector-icons'; 
import { StyleSheet, TextInput, View } from 'react-native';

interface InputProps {
    iconName: any,
    placeholder: string,
    secure?: boolean
}

export const MyInput = ({iconName, placeholder, secure}: InputProps) => {
    return(
      <View style={styles.inputContainer}>
        <AntDesign name={iconName} size={30} color="gray" />
        <TextInput style={styles.input} 
            placeholder={placeholder}
            autoCapitalize='none'
            secureTextEntry={secure}
            />
      </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 20,
        flexDirection: 'row'
      },
      input: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        padding: 5,
        width: '70%',
        fontSize: 20,
        fontFamily: 'Courier'
      },
})