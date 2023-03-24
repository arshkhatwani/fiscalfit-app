import { Image, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import React, { FC } from 'react';
import tw from 'twrnc';
import styles from '../../styles/PlanCard';
import ProgressBar from '../ProgressBar';
import { categoryIcons } from '../../constants/planCategories';
import { useAppDispatch } from '../../redux/store';
import {
  completePlan,
  setDepositModalShow,
  setDepositPid,
} from '../../redux/slices/planSlice';

interface Props {
  heading: string;
  target: number;
  curDeposit: number;
  category: string;
  pid: string;
  completed: boolean;
}

const PlanCard: FC<Props> = ({
  heading,
  target,
  curDeposit,
  category,
  pid,
  completed,
}) => {
  const categoryIcon = categoryIcons[category as keyof typeof categoryIcons];
  const dispatch = useAppDispatch();

  return (
    <View style={[tw`px-3 py-3 my-2`, styles.container]}>
      <View style={tw`flex flex-row items-center mb-3`}>
        <View style={[styles.icon, tw`mr-2`]}>
          <Image style={styles.imageIcon} source={categoryIcon} />
        </View>

        <View>
          <Text style={styles.heading}>{heading}</Text>
        </View>
      </View>

      <View style={tw`flex flex-row items-center justify-between mb-3`}>
        <Text style={styles.currentSaving}>₹ {curDeposit}</Text>
        <Text style={styles.targetAmt}>Target: ₹ {target}</Text>
      </View>

      <View style={tw`mb-3`}>
        <ProgressBar curVal={curDeposit} maxVal={target} />
      </View>

      {target > curDeposit && (
        <View>
          <Button
            onPress={() => {
              dispatch(setDepositPid(pid));
              dispatch(setDepositModalShow(true));
            }}>
            Add deposit
          </Button>
        </View>
      )}

      {!completed && target == curDeposit && (
        <View>
          <Button onPress={() => dispatch(completePlan(pid))}>
            Complete Plan
          </Button>
        </View>
      )}
    </View>
  );
};

export default PlanCard;
