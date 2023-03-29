import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import NewBudget from '../components/Budget/NewBudget';
import { BUDGET_HOME, NEW_BUDGET } from '../constants/navigationLinks';
import Budget from '../screens/Budget';

const Stack = createStackNavigator();

const BudgetNavigation: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={BUDGET_HOME} component={Budget} />
      <Stack.Screen name={NEW_BUDGET} component={NewBudget} />
    </Stack.Navigator>
  );
};

export default BudgetNavigation;
