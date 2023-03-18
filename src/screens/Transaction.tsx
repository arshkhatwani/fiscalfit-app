import { View } from 'react-native';
import React from 'react';
import TransactionItem from '../components/Transaction/TransactionItem';
import tw from 'twrnc';
import { Divider } from 'react-native-paper';
import UserTransactions from '../components/Transaction/UserTransactions';

const Transaction = () => {
  return (
    <View>
      <View style={tw`px-5`}>
        <UserTransactions />
      </View>
    </View>
  );
};

export default Transaction;
