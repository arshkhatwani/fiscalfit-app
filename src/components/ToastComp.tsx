import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import Toast from 'react-native-toast-message';
import tw from 'twrnc';

const toastConfig = {
  default: (props: any) => (
    <View
      style={[
        tw`flex flex-row justify-center items-center bg-neutral-500 py-1 px-3`,
        { borderRadius: 20 },
      ]}>
      <Text style={[tw`pb-0.5`, { color: '#fff' }]}>{props.text1}</Text>
    </View>
  ),
};
const ToastComp = () => {
  return <Toast config={toastConfig} position="bottom" />;
};

export default ToastComp;
