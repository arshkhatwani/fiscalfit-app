import { Formik } from 'formik';
import React from 'react';
import { View } from 'react-native';
import { HelperText, Modal, Portal, TextInput } from 'react-native-paper';
import { useSelector } from 'react-redux';
import tw from 'twrnc';
import * as yup from 'yup';
import { addDeposit, setDepositModalShow } from '../../redux/slices/planSlice';
import { RootState, useAppDispatch } from '../../redux/store';
import PrimaryBtn from '../Buttons/PrimaryBtn';

export interface DepositFormFields {
  deposit: string;
}

const initialValues: DepositFormFields = {
  deposit: '',
};

const DepositModal = () => {
  const { depositModalShow, depositPid, userPlans } = useSelector(
    (state: RootState) => state.plans,
  );
  const dispatch = useAppDispatch();
  const planObj = userPlans.find(pl => pl.pid === depositPid);
  const prevDepositAmt = planObj ? planObj.deposit : 0;
  const target = planObj ? planObj.target : 0;

  const validationSchema = yup.object().shape({
    deposit: yup
      .string()
      .required('Field is required')
      .test('is-number', 'Field must be a valid number', value => {
        const number = Number(value);
        if (Number.isNaN(number)) {
          return false;
        }
        return true;
      })
      .test('is-in-limit', 'Enter amount less that remaining target', value => {
        const number = Number(value);
        if (target - prevDepositAmt < number) return false;
        return true;
      }),
  });

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
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values: any) => {
              //   console.log(values);
              const newDeposit = prevDepositAmt + parseInt(values.deposit);
              dispatch(addDeposit({ pid: depositPid, deposit: newDeposit }));
            }}>
            {({ handleChange, handleBlur, values, errors, handleSubmit }) => (
              <>
                <View style={tw`mb-6`}>
                  <TextInput
                    mode="outlined"
                    placeholder="in ₹"
                    onChangeText={handleChange('deposit')}
                    onBlur={handleBlur('deposit')}
                    value={values.deposit}
                    keyboardType="number-pad"
                  />
                  {errors.deposit && (
                    <HelperText type="error">{errors.deposit}</HelperText>
                  )}
                </View>

                <View>
                  <PrimaryBtn
                    label="Add deposit"
                    onPress={handleSubmit}
                    style={tw`my-3`}
                  />
                </View>
              </>
            )}
          </Formik>
        </View>
      </Modal>
    </Portal>
  );
};

export default DepositModal;
