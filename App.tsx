import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './Login';
import ProfileScreen from './Profile';
import { StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function App() {
  //const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Login" component={LoginScreen} options={{tabBarActiveTintColor: 'tomato' ,tabBarIcon: (tabInfo) => {
        return (
          <AntDesign name={'home'} size={30} color={tabInfo.focused?"tomato":"gray"}/>)  }}}/>
        <Tab.Screen name="Profile" component={ProfileScreen} options={{tabBarActiveTintColor: 'tomato' ,tabBarIcon: (tabInfo) => {
        return (
          <AntDesign name={'profile'} size={30} color={tabInfo.focused?"tomato":"gray"}/>)  }}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 400,
  }
});