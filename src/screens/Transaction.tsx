import React from 'react';
import { View } from 'react-native';
import tw from 'twrnc';
import TransactionHeader from '../components/Transaction/TransactionHeader';
import UserTransactions from '../components/Transaction/UserTransactions';

const Transaction = () => {
  return (
    <View>
      <TransactionHeader />

      <View style={tw`px-5`}>
        <UserTransactions />
      </View>
    </View>
  );
};

export default Transaction;
