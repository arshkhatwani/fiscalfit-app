import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Transaction from '../screens/Transaction';
import {
  NEW_TRANSACTION,
  TRANSACTION_HOME,
} from '../constants/navigationLinks';
import NewTransaction from '../components/Transaction/NewTransaction';

const Stack = createStackNavigator();

const TransactionNavigation: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name={TRANSACTION_HOME} component={Transaction} /> */}
      <Stack.Screen name={NEW_TRANSACTION} component={NewTransaction} />
    </Stack.Navigator>
  );
};

export default TransactionNavigation;
