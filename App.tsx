import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import RootNavigation from './src/navigations/RootNavigation';
import store from './src/redux/store';
import { Provider as PaperProvider } from 'react-native-paper';
import theme from './src/constants/appTheme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ToastComp from './src/components/ToastComp';

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <NavigationContainer>
            <SafeAreaView style={{ flex: 1 }}>
              <RootNavigation />
              <ToastComp />
            </SafeAreaView>
          </NavigationContainer>
        </PaperProvider>
      </Provider>
    </GestureHandlerRootView>
  );
}

export default App;
