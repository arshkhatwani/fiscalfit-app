import { View } from 'react-native';
import { Divider, Text } from 'react-native-paper';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { getTransactions } from '../../redux/slices/transactionSlice';
import TransactionItem from './TransactionItem';
import tw from 'twrnc';
import PillBtn from '../Buttons/PillBtn';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { NEW_TRANSACTION } from '../../constants/navigationLinks';
import styles from '../../styles/UserTransactions';
import EmptyState from '../General/EmptyState';

const UserTransactions = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { userTransactions } = useSelector(
    (state: RootState) => state.transactions,
  );
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (!isFocused) return;
    dispatch(getTransactions());
  }, [isFocused]);

  return (
    <View>
      <View
        style={tw`flex flex-row items-center justify-between mt-2 mb-4 px-3`}>
        <Text style={styles.heading}>Transactions</Text>

        <PillBtn
          label="New +"
          onPress={() => navigation.navigate(NEW_TRANSACTION)}
        />
      </View>

      {userTransactions.length === 0 && <EmptyState label="No transactions" />}

      {userTransactions.map((item, index) => {
        return (
          <View key={item.tid}>
            <TransactionItem
              heading={item.name}
              date={item.date}
              price={item.price}
              spend={item.spend}
              category={item.category}
              tid={item.tid}
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
