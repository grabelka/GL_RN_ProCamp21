import React from 'react';
import { StyleSheet, Platform, Pressable, Text, View } from 'react-native';

interface InputProps {
  t: string,
  onPress?: () => void
}

export const MyButton = ({t, onPress}: InputProps) => {
    return(
        <Pressable 
        style={({ pressed }) => {
            return Platform.OS === 'ios' && {
                opacity: pressed ? 0.3 : 1
                }
            }}>
            <View style={[styles.buttonContainer, styles.shadow]}>
                <Text style={styles.button} onPress={onPress}>{t}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    shadow: {
      shadowColor: 'black',
      shadowOffset: {
        width: 5,
        height:6
      },
      shadowOpacity: 0.5,
      shadowRadius: 4
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
})
