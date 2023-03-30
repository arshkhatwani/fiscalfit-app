import React, { FC } from 'react';
import { Image, View } from 'react-native';
import { Text } from 'react-native-paper';
import { useSelector } from 'react-redux';
import tw from 'twrnc';
import { categoriesIcons } from '../../constants/transactionCategories';
import { RootState, useAppDispatch } from '../../redux/store';
import styles from '../../styles/PlanCard';
import ProgressBar from '../ProgressBar';

interface Props {
  category: string;
  target: number;
  bid: string;
}

const BudgetCard: FC<Props> = ({ category, target }) => {
  const { categoryTransactions } = useSelector(
    (state: RootState) => state.budget,
  );
  const categoryIcon =
    categoriesIcons[category as keyof typeof categoriesIcons];

  const spend = categoryTransactions[category];

  return (
    <View style={[tw`px-3 py-3 my-2`, styles.container]}>
      <View style={tw`flex flex-row items-center mb-3`}>
        <View style={[styles.icon, tw`mr-2`]}>
          <Image style={styles.imageIcon} source={categoryIcon} />
        </View>

        <View>
          <Text style={styles.heading}>{category}</Text>
        </View>
      </View>

      <View style={tw`flex flex-row items-center justify-between mb-3`}>
        <Text style={styles.currentSaving}>Budget ₹ {target}</Text>
        <Text style={styles.targetAmt}>Remaining ₹ {target - spend}</Text>
      </View>

      <View style={tw`mb-3`}>
        <ProgressBar curVal={spend} maxVal={target} />
      </View>
    </View>
  );
};

export default BudgetCard;
