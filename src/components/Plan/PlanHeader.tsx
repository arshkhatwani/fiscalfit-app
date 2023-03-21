import { View, Text } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import tw from 'twrnc';
import { headerGradient } from '../../constants/colors';
import styles from '../../styles/TransactionHeader';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import getTotalSavings from '../../utils/getTotalSavings';

const PlanHeader = () => {
  const { userPlans } = useSelector((state: RootState) => state.plans);
  const totalSavings = getTotalSavings(userPlans);

  return (
    <View>
      <LinearGradient
        style={tw`p-5 pt-2`}
        colors={headerGradient}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0 }}>
        <Text style={[styles.heading, tw`mb-6`]}>Plan</Text>

        <View>
          <Text style={styles.balanceHeading}>TOTAL SAVINGS</Text>

          <Text style={styles.balance}>{`₹ ${totalSavings}`}</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

export default PlanHeader;
