import React from 'react';
import { Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
import tw from 'twrnc';
import { headerGradient } from '../../constants/colors';
import { RootState } from '../../redux/store';
import styles from '../../styles/TransactionHeader';
import getTotalBudget from '../../utils/getTotalBudget';

const BudgetHeader = () => {
  const { userBudgets } = useSelector((state: RootState) => state.budget);
  const totalBudget = getTotalBudget(userBudgets);

  return (
    <View>
      <LinearGradient
        style={tw`p-5 pt-2`}
        colors={headerGradient}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0 }}>
        <Text style={[styles.heading, tw`mb-6`]}>Budget</Text>

        <View>
          <Text style={styles.balanceHeading}>TOTAL BUDGET</Text>

          <Text style={styles.balance}>{`₹ ${totalBudget}`}</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

export default BudgetHeader;
