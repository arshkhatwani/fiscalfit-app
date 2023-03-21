import { View } from 'react-native';
import React, { useEffect } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { AppDispatch, RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { getPlans } from '../../redux/slices/planSlice';
import PlanCard from './PlanCard';
import tw from 'twrnc';
import PillBtn from '../Buttons/PillBtn';
import { Text } from 'react-native-paper';
import styles from '../../styles/UserTransactions';
import { NEW_PLAN } from '../../constants/navigationLinks';

const UserPlans = () => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch<AppDispatch>();
  const { userPlans } = useSelector((state: RootState) => state.plans);
  const navigation = useNavigation();

  useEffect(() => {
    if (!isFocused) return;

    dispatch(getPlans());
  }, [isFocused]);
  return (
    <View style={tw`px-5`}>
      <View
        style={tw`flex flex-row items-center justify-between mt-2 mb-4 px-3`}>
        <Text style={styles.heading}>Plans</Text>

        <PillBtn
          label="Create Plan +"
          onPress={() => navigation.navigate(NEW_PLAN)}
        />
      </View>

      {userPlans.map((item, index) => (
        <PlanCard
          key={index}
          heading={item.name}
          curDeposit={item.deposit}
          target={item.target}
        />
      ))}
    </View>
  );
};

export default UserPlans;
