import { View } from 'react-native';
import { Text } from 'react-native-paper';
import React, { FC } from 'react';
import tw from 'twrnc';
import styles from '../../styles/TransactionItem';
import { Image } from 'react-native';
import { categoriesIcons } from '../../constants/transactionCategories';

interface Props {
  heading: string;
  price: number;
  date: string;
  spend: boolean;
  category: string;
  tid: string;
}

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
  );
};

export default TransactionItem;
