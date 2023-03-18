import { View, Text, GestureResponderEvent } from 'react-native';
import React, { FC } from 'react';
import { Button } from 'react-native-paper';
import styles from '../../styles/PillBtn';
import tw from 'twrnc';

interface Props {
  label: string;
  onPress?: (e: GestureResponderEvent) => void;
}

const PillBtn: FC<Props> = ({ label, onPress }) => {
  return (
    <Button
      mode="outlined"
      style={styles.btn}
      uppercase={false}
      onPress={onPress}
      labelStyle={[styles.label, tw`pb-0.5`]}>
      {label}
    </Button>
  );
};

export default PillBtn;
