import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import GoogleSignIn from './src/components/GoogleSignIn';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello w1orld</Text>
        <GoogleSignIn />
      </View>
    </SafeAreaView>
  );
}

export default App;
