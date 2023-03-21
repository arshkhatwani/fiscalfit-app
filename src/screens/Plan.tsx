import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import PlanHeader from '../components/Plan/PlanHeader';
import UserPlans from '../components/Plan/UserPlans';

const Plan = () => {
  return (
    <ScrollView stickyHeaderIndices={[0]}>
      <PlanHeader />
      <UserPlans />
    </ScrollView>
  );
};

export default Plan;
