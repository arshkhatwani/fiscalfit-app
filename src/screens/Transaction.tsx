import { View } from 'react-native';
import React from 'react';
import TransactionItem from '../components/Transaction/TransactionItem';
import tw from 'twrnc';
import { Divider } from 'react-native-paper';
const Transaction = () => {
  return (
    <View>
      <View style={tw`px-5`}>
        <TransactionItem
          heading={'McDonalds'}
          date={new Date()}
          price={'$200'}
          spend={true}
        />
        <Divider style={tw`my-1`} />

        <TransactionItem
          heading={'Salary'}
          date={new Date()}
          price={'$500'}
          spend={false}
        />
        <Divider style={tw`my-1`} />
      </View>
    </View>
  );
};

export default Transaction;
