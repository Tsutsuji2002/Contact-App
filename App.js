import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import DrawerNavigator from './4/routes';
import Store from './store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={Store}>
      <DrawerNavigator />
      <StatusBar style="auto" />
    </Provider>
  );
};

export default App;