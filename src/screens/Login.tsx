import { View, Image } from 'react-native';
import { Text } from 'react-native-paper';
import React from 'react';
import GoogleSignInComp from '../components/GoogleSignInComp';
import tw from 'twrnc';
import styles from '../styles/Login';
import imagePaths from '../constants/imagePaths';

const Login = () => {
  return (
    <View style={[tw`flex-1`, { backgroundColor: '#fff' }]}>
      <View style={[tw`pt-5 px-5 flex flex-col`, { zIndex: 2 }]}>
        <View style={tw`mb-10`}>
          <Text style={styles.nameHeading}>FiscalFit</Text>
        </View>

        <Image style={[styles.img, tw`mb-12`]} source={imagePaths.imgIntro} />

        <View style={tw`mb-12`}>
          <Text style={styles.introText}>
            Simplify your finances and plan for your future.
          </Text>
        </View>

        <View>
          <GoogleSignInComp />
        </View>
      </View>
      <Image
        source={imagePaths.imgIntro2}
        style={{
          width: '100%',
          height: '90%',
          position: 'absolute',
          bottom: 0,
        }}
      />
    </View>
  );
};

export default Login;
