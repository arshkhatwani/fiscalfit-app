import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import RootNavigation from './src/navigations/RootNavigation';
import store from './src/redux/store';
import { Provider as PaperProvider } from 'react-native-paper';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <SafeAreaView style={{ flex: 1 }}>
            <RootNavigation />
          </SafeAreaView>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

export default App;
