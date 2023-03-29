import React from 'react';
import { ScrollView } from 'react-native';
import BudgetHeader from '../components/Budget/BudgetHeader';
import UserBudget from '../components/Budget/UserBudget';

const Budget = () => {
  return (
    <ScrollView stickyHeaderIndices={[0]}>
      <BudgetHeader />
      <UserBudget />
    </ScrollView>
  );
};

export default Budget;
