import React, { FC } from 'react';
import { Image, View } from 'react-native';
import { IconButton, Text, MD2Colors } from 'react-native-paper';
import { useSelector } from 'react-redux';
import tw from 'twrnc';
import { categoriesIcons } from '../../constants/transactionCategories';
import { RootState, useAppDispatch } from '../../redux/store';
import styles from '../../styles/PlanCard';
import ProgressBar from '../General/ProgressBar';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { deleteBudget } from '../../redux/slices/budgetSlice';

interface Props {
  category: string;
  target: number;
  bid: string;
}

const Options: FC<{ bid: string }> = ({ bid }) => {
  const dispatch = useAppDispatch();

  return (
    <View style={tw`flex-col items-center justify-center`}>
      <IconButton
        icon="delete"
        size={25}
        onPress={() => dispatch(deleteBudget(bid))}
        iconColor={MD2Colors.red400}
      />
    </View>
  );
};

const BudgetCard: FC<Props> = ({ category, target, bid }) => {
  const { categoryTransactions } = useSelector(
    (state: RootState) => state.budget,
  );
  const categoryIcon =
    categoriesIcons[category as keyof typeof categoriesIcons];

  const spend = categoryTransactions[category];

  return (
    <Swipeable
      renderLeftActions={() => <></>}
      containerStyle={[tw`px-3 py-3 my-2`, styles.container]}
      renderRightActions={() => <Options bid={bid} />}>
      <View>
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
    </Swipeable>
  );
};

export default BudgetCard;
