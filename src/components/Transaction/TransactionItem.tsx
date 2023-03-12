import { View } from 'react-native';
import { Text } from 'react-native-paper';
import React, { FC } from 'react';
import tw from 'twrnc';
import styles from '../../styles/TransactionItem';

interface Props {
  heading: string;
  price: string;
  date: Date;
  spend: boolean;
}

const TransactionItem: FC<Props> = ({ heading, price, date, spend }) => {
  return (
    <View
      style={[
        tw`flex flex-row px-3 py-2 items-center justify-between`,
        styles.container,
      ]}>
      <View style={tw`flex flex-row items-center`}>
        <View style={[styles.icon, tw`mr-2`]}></View>

        <View>
          <Text style={styles.heading}>{heading}</Text>
          <Text style={styles.date}>{`${date.getDate()}-${
            date.getMonth() + 1
          }-${date.getFullYear()}`}</Text>
        </View>
      </View>

      <View>
        <Text style={[styles.price, styles.spendType(spend)]}>{`${
          spend ? '-' : '+'
        }${price}`}</Text>
      </View>
    </View>
  );
};

export default TransactionItem;
