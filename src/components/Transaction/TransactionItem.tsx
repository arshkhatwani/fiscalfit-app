import { View } from 'react-native';
import { IconButton, MD2Colors, Text } from 'react-native-paper';
import React, { FC } from 'react';
import tw from 'twrnc';
import styles from '../../styles/TransactionItem';
import { Image } from 'react-native';
import { categoriesIcons } from '../../constants/transactionCategories';
import { useAppDispatch } from '../../redux/store';
import { Swipeable } from 'react-native-gesture-handler';
import { deleteTransaction } from '../../redux/slices/transactionSlice';

interface Props {
  heading: string;
  price: number;
  date: string;
  spend: boolean;
  category: string;
  tid: string;
}

const Options: FC<{ tid: string }> = ({ tid }) => {
  const dispatch = useAppDispatch();

  return (
    <View style={tw`flex-col items-center justify-center`}>
      <IconButton
        icon="delete"
        size={22}
        onPress={() => dispatch(deleteTransaction(tid))}
        iconColor={MD2Colors.red400}
      />
    </View>
  );
};

const TransactionItem: FC<Props> = ({
  heading,
  price,
  date,
  spend,
  category,
  tid,
}) => {
  const categoryIcon =
    categoriesIcons[category as keyof typeof categoriesIcons];

  return (
    <Swipeable
      renderLeftActions={() => <></>}
      renderRightActions={() => <Options tid={tid} />}>
      <View
        style={[
          tw`flex flex-row px-3 py-2 items-center justify-between`,
          styles.container,
        ]}>
        <View style={tw`flex flex-row items-center`}>
          <View style={[styles.icon, tw`mr-2`]}>
            <Image source={categoryIcon} style={styles.imgIcon} />
          </View>

          <View>
            <Text style={styles.heading}>{heading}</Text>
            <Text style={styles.date}>{date}</Text>
          </View>
        </View>

        <View>
          <Text style={[styles.price, styles.spendType(spend)]}>{`${
            spend ? '-' : '+'
          }₹${price}`}</Text>
        </View>
      </View>
    </Swipeable>
  );
};

export default TransactionItem;
