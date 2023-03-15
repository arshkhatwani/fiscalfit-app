import { ViewStyle, Pressable } from 'react-native';
import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  style?: ViewStyle;
}

const BackBtn: FC<Props> = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable style={style} onPress={() => navigation.goBack()}>
      <Icon name="arrow-left" size={24} color="#000" />
    </Pressable>
  );
};

export default BackBtn;
