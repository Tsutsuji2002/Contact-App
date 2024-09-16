import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Contacts from './screens/Contacts';
import Profile from './screens/Profiles';
import DrawerNavigator from './4/routes';
import Favorites from './screens/Favorites';
import User from './screens/User';
import Options from './screens/Options';
import Store from './store';
import { Provider } from 'react-redux';

const App=()=>
{
  return(
    <Provider store={Store}>
      <DrawerNavigator/>
    </Provider>
  )
}

export default App;