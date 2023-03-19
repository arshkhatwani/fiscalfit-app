import React from 'react';
import { View, ScrollView } from 'react-native';
import tw from 'twrnc';
import TransactionHeader from '../components/Transaction/TransactionHeader';
import UserTransactions from '../components/Transaction/UserTransactions';

const Transaction = () => {
  return (
    <ScrollView stickyHeaderIndices={[0]}>
      <TransactionHeader />

      <View style={tw`px-5`}>
        <UserTransactions />
      </View>
    </ScrollView>
  );
};

export default Transaction;
