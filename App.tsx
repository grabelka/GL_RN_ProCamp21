import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Platform, Alert, Text, View, TextInput, Button, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
              <Text style={styles.title}>My application</Text>
              <TextInput style={styles.input} 
                placeholder="username"
                autoCapitalize='none' 
                autoCompleteType='username'
                />
              <TextInput style={styles.input} 
                placeholder="password"
                secureTextEntry={ true }
                autoCapitalize='none'
                />
              <View style={styles.buttonContainer}>
                <Text style={styles.button}>Sign In</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'gray',
    fontSize: 30
  },
  title: {
    fontFamily: 'Cochin-BoldItalic',
    fontSize: 50,
    marginVertical: 30
  },
  input: {
    marginBottom: 20,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 10,
    padding: 5,
    width: '70%',
    fontSize: 20
  },
  button: {
    backgroundColor: '#1E90FF',
    color: 'white',
    fontSize: 20
  },
  buttonContainer: {
    backgroundColor: '#1E90FF',
    color: 'white',
    fontSize: 20,
    borderRadius: 10,
    padding: 10
  }
});
