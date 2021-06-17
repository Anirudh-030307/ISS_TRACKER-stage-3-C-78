import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ISSLocation from './screens/ISS_LocationScreen';
import MeteorScreen from './screens/meteorScreen';
import UpdateScreen from './screens/updateScreen';
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator()

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="home" component={HomeScreen} />
          <Stack.Screen name="ISS" component={ISSLocation} />
          <Stack.Screen name="meteor" component={MeteorScreen} />
          <Stack.Screen name="update" component={UpdateScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
