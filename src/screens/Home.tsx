import React from 'react';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import { Button, Divider, Text } from 'react-native-paper';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/Entypo';
import { useSelector } from 'react-redux';
import tw from 'twrnc';
import FeatureCard from '../components/General/FeatureCard';
import { RootState, useAppDispatch } from '../redux/store';
import styles from '../styles/Home';
import { logoutUser } from '../redux/slices/authSlice';
import { useNavigation } from '@react-navigation/native';
import { HELP } from '../constants/navigationLinks';

const defaultProfile =
  'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';

const Home = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

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
          onPress={() => dispatch(logoutUser())}>
          Logout
        </Button>
      </View>

      <View style={tw`px-5 mb-5`}>
        <Text style={styles.hiLabel}>Hi, {user.name}</Text>
      </View>

      <Divider style={tw`mb-5 mx-5`} />

      <Swiper
        height={200}
        showsPagination={false}
        horizontal={true}
        autoplay={true}
        autoplayTimeout={2}>
        <FeatureCard
          heading="Transactions"
          subHeading="Track your spending and income with ease and precision."
        />
        <FeatureCard
          heading="Plans"
          subHeading="Set financial goals and take action towards achieving them."
        />
        <FeatureCard
          heading="Budget"
          subHeading="Stay on top of your spending by setting category-specific limits."
        />
      </Swiper>

      <View style={tw`px-5`}>
        <TouchableOpacity
          style={tw`py-3 flex flex-row items-center`}
          onPress={() => navigation.navigate(HELP)}>
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
