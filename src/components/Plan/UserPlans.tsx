import { View } from 'react-native';
import React, { useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { AppDispatch, RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { getPlans } from '../../redux/slices/planSlice';
import PlanCard from './PlanCard';
import tw from 'twrnc';

const UserPlans = () => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch<AppDispatch>();
  const { userPlans } = useSelector((state: RootState) => state.plans);

  useEffect(() => {
    if (!isFocused) return;

    dispatch(getPlans());
  }, [isFocused]);
  return (
    <View style={tw`px-5`}>
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
