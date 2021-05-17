/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import List from './List';
import Register from './Register';
import Update from './Update';
import { Provider } from 'react-redux';
import store from './src/store/store'


const Stack = createStackNavigator();


export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="List"
            component={List} />
            <Stack.Screen
            name="Register"
            component={Register} />
            <Stack.Screen
            name="Update"
            component={Update} />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    )
  }
}

export default App
