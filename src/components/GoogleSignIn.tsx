import { View, Text } from 'react-native';
import React from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Button } from 'react-native';
import auth from '@react-native-firebase/auth';

GoogleSignin.configure({
  webClientId:
    '196172180641-nluaedhj67vt2ego13806gqmogqm4ft4.apps.googleusercontent.com',
});

async function onGoogleButtonPress() {
  // Check if your device supports Google Play
  await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  // Get the users ID token
  //   const { idToken } = await GoogleSignin.signIn();
  const x = await GoogleSignin.signIn();
  console.log(x)
  const { idToken } = x;

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}

const GoogleSignIn = () => {
  return (
    <Button
      title="Google Sign-In"
      onPress={() =>
        onGoogleButtonPress()
          .then(() => console.log('Signed in with Google!'))
          .catch(e => console.log(e))
      }
    />
  );
};

export default GoogleSignIn;
