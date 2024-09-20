import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import React from 'react';
import DrawerNavigator from './4/routes';
import Store from './store';
import { Provider } from 'react-redux';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  const [fontsLoaded] = useFonts({
    'RobotoCondensed-BlackCustom': require('./assets/fonts/RobotoCondensed-Black.ttf'),
    'RobotoCondensed-Bold': require('./assets/fonts/RobotoCondensed-Bold.ttf'),
    'RobotoCondensed-Regular': require('./assets/fonts/RobotoCondensed-Regular.ttf'),
  });

  React.useEffect(() => {
    async function prepare() {
      if (!fontsLoaded) {
        await SplashScreen.preventAutoHideAsync();
      } else {
        await SplashScreen.hideAsync();
      }
    }
    prepare();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <DrawerNavigator />
        <StatusBar style="auto" />
      </NavigationContainer>
    </Provider>
  );
};

export default App;