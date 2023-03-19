import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import NewPlan from '../components/Plan/NewPlan';
import { NEW_PLAN, PLAN_HOME } from '../constants/navigationLinks';
import Plan from '../screens/Plan';

const Stack = createStackNavigator();

const PlanNavigation: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={PLAN_HOME} component={Plan} />
      <Stack.Screen name={NEW_PLAN} component={NewPlan} />
    </Stack.Navigator>
  );
};

export default PlanNavigation;
