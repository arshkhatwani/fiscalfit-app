import { View } from 'react-native';
import { Text } from 'react-native-paper';
import React, { FC } from 'react';
import tw from 'twrnc';

interface Props {
  label: string;
}

const EmptyState: FC<Props> = ({ label }) => {
  return (
    <View>
      <Text style={tw`text-center my-2`}>{label}</Text>
    </View>
  );
};

export default EmptyState;
