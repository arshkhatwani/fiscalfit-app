import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { useSelector } from 'react-redux';
import tw from 'twrnc';
import { NEW_BUDGET } from '../../constants/navigationLinks';
import { getBudgets } from '../../redux/slices/budgetSlice';
import { RootState, useAppDispatch } from '../../redux/store';
import styles from '../../styles/UserTransactions';
import PillBtn from '../Buttons/PillBtn';
import BudgetCard from './BudgetCard';

const UserBudget = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const { userBudgets } = useSelector((state: RootState) => state.budget);

  useEffect(() => {
    if (!isFocused) return;
    dispatch(getBudgets());
  }, [isFocused]);

  return (
    <View style={tw`px-5`}>
      <View
        style={tw`flex flex-row items-center justify-between mt-2 mb-4 px-3`}>
        <Text style={styles.heading}>Budgets</Text>

        <PillBtn
          label="New +"
          onPress={() => navigation.navigate(NEW_BUDGET)}
        />
      </View>

      {userBudgets.map(item => (
        <BudgetCard
          category={item.category}
          target={item.target}
          bid={item.bid}
          key={item.bid}
        />
      ))}
    </View>
  );
};

export default UserBudget;
