import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoggedInNavigation from './src/navigations/LoggedInNavigation';
import LoggedOutNavigation from './src/navigations/LoggedOutNavigation';

function App(): JSX.Element {
  const isAuth = false;

  return (
    <NavigationContainer>
      <SafeAreaView>
        {isAuth ? <LoggedInNavigation /> : <LoggedOutNavigation />}
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
