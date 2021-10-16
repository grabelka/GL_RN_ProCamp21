import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { MyButton } from './src/components/MyButton';
import { MyInput } from './src/components/MyInput';
import { StyleSheet, Platform, Pressable, Text, View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function LoginScreen({ navigation } : any) {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
            <Text style={[styles.title, styles.shadow]}>DatingLy</Text>
              <MyInput 
                iconName='user'
                placeholder="username" 
                />
              <MyInput 
                iconName='eyeo'
                placeholder="password" 
                secure={true}
                />
              <Pressable 
              style={({ pressed }) => {
                return Platform.OS === 'ios' && {
                  opacity: pressed ? 0.3 : 1
                  }
                }}>
                <Text style={styles.forgot}>Forgot password?</Text>
              </Pressable>
              <MyButton t="Sign In" onPress={()=> {
                navigation.navigate('Profile')
              }}/>
              <View style={styles.signUpViev}>
                <Text style={styles.signUpText}>Don't have an account? </Text>
                <Pressable 
                style={({ pressed }) => {
                  return Platform.OS === 'ios' && {
                    opacity: pressed ? 0.3 : 1
                    }
                  }}>
                  <Text style={styles.signUpButton}>SIGN UP</Text>
                </Pressable>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      <StatusBar style='dark'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 400,
  },
  shadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 5,
      height:6
    },
    shadowOpacity: 0.5,
    shadowRadius: 4
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'gray',
    fontSize: 30
  },
  title: {
    fontFamily: 'Cochin-BoldItalic',
    fontSize: 65,
    marginVertical: 30
  },
  input: {
    marginTop: 20,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 10,
    padding: 5,
    width: '70%',
    fontSize: 20,
    fontFamily: 'Courier'
  },
  forgot: {
    color: 'gray',
    fontSize: 14,
    marginTop: 5,
    marginBottom: 30,
    left: 80
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
  },
  signUpViev: {
    flexDirection: 'row',
    marginTop: 50
  },
  signUpText: {
    color: 'gray',
    fontSize: 20
  },
  signUpButton: {
    color: '#1E90FF',
    fontSize: 20
  }
});