import React from 'react';
import { View } from 'react-native';
import { Modal, Portal, Text } from 'react-native-paper';
import { useSelector } from 'react-redux';
import tw from 'twrnc';
import { setDepositModalShow } from '../../redux/slices/planSlice';
import { RootState, useAppDispatch } from '../../redux/store';

const DepositModal = () => {
  const { depositModalShow, depositPid } = useSelector(
    (state: RootState) => state.plans,
  );
  const dispatch = useAppDispatch();

  const hideModal = () => dispatch(setDepositModalShow(false));

  const containerStyle = {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  };

  return (
    <Portal>
      <Modal
        visible={depositModalShow}
        onDismiss={hideModal}
        style={[tw`px-6`]}
        contentContainerStyle={containerStyle}>
        <View>
          <Text>{depositPid}</Text>
        </View>
      </Modal>
    </Portal>
  );
};

export default DepositModal;
