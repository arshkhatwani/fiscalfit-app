import { View } from 'react-native';
import { Text } from 'react-native-paper';
import React, { FC } from 'react';
import tw from 'twrnc';
import styles from '../../styles/PlanCard';
import ProgressBar from '../ProgressBar';

interface Props {
  heading: string;
  target: number;
  curDeposit: number;
}

const PlanCard: FC<Props> = ({ heading, target, curDeposit }) => {
  return (
    <View style={[tw`px-3 py-3 my-2`, styles.container]}>
      <View style={tw`flex flex-row items-center mb-3`}>
        <View style={[styles.icon, tw`mr-2`]}></View>

        <View>
          <Text style={styles.heading}>{heading}</Text>
        </View>
      </View>

      <View style={tw`flex flex-row items-center justify-between mb-3`}>
        <Text style={styles.currentSaving}>₹ {curDeposit}</Text>
        <Text style={styles.targetAmt}>Target: ₹ {target}</Text>
      </View>

      <View>
        <ProgressBar curVal={curDeposit} maxVal={target} />
      </View>
    </View>
  );
};

export default PlanCard;
