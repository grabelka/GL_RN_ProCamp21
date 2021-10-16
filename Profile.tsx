import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Platform, Pressable, Text, View, KeyboardAvoidingView, Image } from 'react-native';
import { MyInfoBox } from './src/components/MyInfoBox';
import { AntDesign } from '@expo/vector-icons'; 
import * as ImagePicker from 'expo-image-picker';

export default function ProfileScreen({ navigation } : any) {
  const photo = 'https://t4.ftcdn.net/jpg/02/88/48/77/360_F_288487781_skjPODvR9bnuAGRVYP8AeRxT2AogzRHh.jpg'
  const [image, setImage] = useState<string | null>(null);
  const [profImage, setProfImage] = useState<string | null>(null);
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  const pickProfImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setProfImage(result.uri);
    }
  };  
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <Pressable onPress={pickImage}>
            <Image source={image?{ uri: image }:{ uri: photo }} style={styles.image} />
          </Pressable>
          <Pressable style={styles.iconLeft} onPress={()=> {
                navigation.navigate('Login')
              }}>
            <AntDesign name={'left'} size={30} color='white'/>
          </Pressable>
          <Pressable style={styles.iconBars}>
            <AntDesign name={'bars'} size={30} color='white'/>
          </Pressable>
          <Text style={styles.profText}>Profile</Text>
          <Pressable onPress={pickProfImage}>
            <Image source={profImage?{ uri: profImage }:{ uri: photo }} style={styles.profImage} />
          </Pressable>
          <View style={styles.content}>
            <Text style={styles.name}>Name</Text>
            <Text style={styles.description}>Description</Text>
            <View style={styles.boxView}>
              <Text style={styles.box}>Followers 5456</Text>
              <Text style={styles.box}>Following 6678</Text>
              <Text style={styles.box}>Likes 40567</Text>
            </View>
            <MyInfoBox text = "22, Main Street, New York, USA" iconName='contacts'/>
            <MyInfoBox text = "user.1234" iconName='instagram'/>
            <MyInfoBox text = "+1 567 894 332" iconName='phone'/>
            <MyInfoBox text = "example@gmail.com" iconName='mail'/>
          </View>
      </KeyboardAvoidingView>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: 400,
  },
  iconLeft: {
    position: 'absolute',
    top: 40,
    left: 20
  },
  iconBars: {
    position: 'absolute',
    top: 40,
    right: 20
  },
  profText: {
    alignSelf: 'center',
    position: 'absolute',
    top: 40,
    fontSize: 30,
    color: 'white'
  },
  profImage: {
    width: 160,
    height: 160,
    borderRadius: 80,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: 'gray',
    position: 'absolute',
    top: -80,
    alignSelf: 'center',
  },
  image: { 
    width: 400, 
    height: 250 
  },
  content: {
    alignItems: 'center'
  },
  name: {
    paddingTop: 80,
    fontSize: 25,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 20
  },
  boxView: {
    flexDirection: 'row',
  },
  box: {
    textAlign: 'center',
    flexWrap: 'wrap',
    width: '25%',
    margin: 10,
    padding: 10,
    fontSize: 15,
    backgroundColor: 'lightgray',
    borderColor: 'darkgray',
    borderWidth: 1
  }
})