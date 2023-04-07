import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { HELP, HOME_MAIN } from '../constants/navigationLinks';
import Help from '../screens/Help';
import Home from '../screens/Home';

const Stack = createStackNavigator();

const HomeNavigation: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={HOME_MAIN} component={Home} />
      <Stack.Screen name={HELP} component={Help} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
