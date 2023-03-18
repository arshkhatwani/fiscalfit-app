import { View } from 'react-native';
import { Divider } from 'react-native-paper';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { getTransactions } from '../../redux/slices/transactionSlice';
import TransactionItem from './TransactionItem';
import tw from 'twrnc';

const UserTransactions = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { userTransactions } = useSelector(
    (state: RootState) => state.transactions,
  );

  useEffect(() => {
    dispatch(getTransactions());
  }, []);

  return (
    <View>
      {userTransactions.map((item, index) => {
        return (
          <View key={index}>
            <TransactionItem
              heading={item.name}
              date={item.date}
              price={item.price}
              spend={item.spend}
            />

            {index < userTransactions.length - 1 && (
              <Divider style={tw`my-1`} />
            )}
          </View>
        );
      })}
    </View>
  );
};

export default UserTransactions;
