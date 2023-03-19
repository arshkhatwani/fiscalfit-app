import { View } from 'react-native';
import React from 'react';
import PlanCard from '../components/Plan/PlanCard';
import tw from 'twrnc';
import UserPlans from '../components/Plan/UserPlans';

const Plan = () => {
  return (
    <View style={tw`p-5`}>
      <UserPlans />
    </View>
  );
};

export default Plan;
