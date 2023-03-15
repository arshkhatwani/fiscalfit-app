import { Button } from 'react-native-paper';
import React, { FC } from 'react';
import { GestureResponderEvent } from 'react-native/types';

interface Props {
  style?: any;
  label: string;
  onPress: (e: GestureResponderEvent) => void;
}

const PrimaryBtn: FC<Props> = ({ style, label, onPress }) => {
  return (
    <Button onPress={onPress} style={style}>
      {label}
    </Button>
  );
};

export default PrimaryBtn;
