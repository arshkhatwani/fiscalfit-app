import { View } from 'react-native';
import React from 'react';
import PlanCard from '../components/Plan/PlanCard';
import tw from 'twrnc';

const Plan = () => {
  return (
    <View style={tw`p-5`}>
      <PlanCard heading="Buy Tesla Model 3" curDeposit={1200} target={40000} />
      <PlanCard heading="Bali trip" curDeposit={10000} target={12000} />
    </View>
  );
};

export default Plan;
