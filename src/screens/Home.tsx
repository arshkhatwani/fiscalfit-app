import { ScrollView, View, Image, TouchableOpacity } from 'react-native';
import { Button, Text } from 'react-native-paper';
import React from 'react';
import tw from 'twrnc';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import styles from '../styles/Home';
import Icon from 'react-native-vector-icons/Entypo';

const defaultProfile =
  'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';

const Home = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <ScrollView style={tw``}>
      <View
        style={tw`px-5 pt-5 mb-5 flex flex-row justify-between items-center`}>
        <Image
          source={{ uri: user.photoURL || defaultProfile }}
          style={styles.profilePic}
        />

        <Button
          mode="outlined"
          textColor="red"
          style={styles.logoutBtn}
          labelStyle={styles.logoutLabel}
          onPress={() => {}}>
          Logout
        </Button>
      </View>

      <View style={tw`px-5 mb-5`}>
        <Text style={styles.hiLabel}>Hi, {user.name}</Text>
      </View>

      <View style={tw`px-5`}>
        <TouchableOpacity style={tw`py-3 flex flex-row items-center`}>
          <Text style={[styles.helpLabel, tw`pb-0.5 mr-2`]}>Help</Text>

          <Icon
            name="help-with-circle"
            size={18}
            color={styles.helpIconColor}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Home;
