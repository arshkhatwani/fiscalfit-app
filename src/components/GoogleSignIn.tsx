import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import React, { useEffect } from 'react';
import { Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { setAuth, setUser } from '../redux/slices/authSlice';

GoogleSignin.configure({
  webClientId:
    '196172180641-nluaedhj67vt2ego13806gqmogqm4ft4.apps.googleusercontent.com',
});

async function onGoogleButtonPress() {
  // Check if your device supports Google Play
  await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  // Get the users ID token
  //   const { idToken } = await GoogleSignin.signIn();
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}

const GoogleSignIn = () => {
  const dispatch = useDispatch();

  function onAuthStateChanged(user: any) {
    const newUser: Object = {
      name: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      uid: user.uid,
    };

    dispatch(setAuth(true));
    dispatch(setUser(newUser));
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

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
