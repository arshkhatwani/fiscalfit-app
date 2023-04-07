import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import React, { useEffect } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import tw from 'twrnc';
import imagePaths from '../constants/imagePaths';
import { logoutUser, setAuth, setUser } from '../redux/slices/authSlice';
import styles from '../styles/Login';

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

const GoogleSignInComp = () => {
  const dispatch = useDispatch();

  function onAuthStateChanged(user: any) {
    if (user === null) {
      dispatch(logoutUser());
      return;
    }

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

  const onPress = () =>
    onGoogleButtonPress()
      .then(() => console.log('Signed in with Google!'))
      .catch(e => console.log(e));

  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <View
        style={[
          styles.googleBtnContainer,
          tw`flex flex-row items-center justify-center px-3 py-2`,
        ]}>
        <Image
          source={imagePaths.icGoogle}
          style={[styles.googleIcon, tw`mr-2`]}
        />
        <Text style={[styles.googleBtnText, tw`pb-0.5`]}>
          Sign in with Google
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoogleSignInComp;
