import React from 'react';
import { Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import tw from 'twrnc';
import { headerGradient } from '../../constants/colors';
import styles from '../../styles/TransactionHeader';

const BudgetHeader = () => {
  return (
    <View>
      <LinearGradient
        style={tw`p-5 pt-2`}
        colors={headerGradient}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0 }}>
        <Text style={[styles.heading, tw`mb-6`]}>Budget</Text>

        <View>
          <Text style={styles.balanceHeading}>TOTAL REMAINING</Text>

          <Text style={styles.balance}>{`₹ 20000`}</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

export default BudgetHeader;
