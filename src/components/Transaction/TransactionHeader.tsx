import { View } from 'react-native';
import { Text } from 'react-native-paper';
import React from 'react';
import styles from '../../styles/TransactionHeader';
import tw from 'twrnc';
import LinearGradient from 'react-native-linear-gradient';
import { headerGradient } from '../../constants/colors';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import getTotalBalance from '../../utils/getTotalBalance';

const TransactionHeader = () => {
  const { userTransactions } = useSelector(
    (state: RootState) => state.transactions,
  );
  const { expense, earning } = getTotalBalance(userTransactions);

  return (
    <View>
      <LinearGradient
        style={tw`p-5 pt-2`}
        colors={headerGradient}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0 }}>
        <Text style={[styles.heading, tw`mb-6`]}>Transaction</Text>

        <View style={tw`flex flex-row flex-wrap items-center justify-between`}>
          <View>
            <Text style={styles.balanceHeading}>TOTAL EARNINGS</Text>

            <Text style={styles.balance}>{`₹ ${earning}`}</Text>
          </View>

          <View>
            <Text style={styles.balanceHeading}>TOTAL EXPENSES</Text>

            <Text style={styles.balance}>{`₹ ${expense}`}</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default TransactionHeader;
