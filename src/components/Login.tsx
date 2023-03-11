import { View, Text } from 'react-native';
import React from 'react';
import GoogleSignIn from './GoogleSignIn';

const Login = () => {
  return (
    <View style={{ flex: 1 }}>
      <GoogleSignIn />
    </View>
  );
};

export default Login;
