import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import RootNavigation from './src/navigations/Rootnavigation';
import store from './src/redux/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          <RootNavigation />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
