import { ScrollView, View } from 'react-native';
import { HelperText, Text, TextInput } from 'react-native-paper';
import React from 'react';
import { Formik } from 'formik';
import { useAppDispatch } from '../../redux/store';
import PrimaryBtn from '../Buttons/PrimaryBtn';
import tw from 'twrnc';
import styles from '../../styles/NewTransaction';
import BackBtn from '../Buttons/BackBtn';
import Dropdown from '../Transaction/Dropdown';
import transactionCategories from '../../constants/transactionCategories';
import * as yup from 'yup';
import { saveBudget } from '../../redux/slices/budgetSlice';
import { useNavigation } from '@react-navigation/native';

const categories = transactionCategories.map(item => ({
  label: item,
  value: item,
}));

export interface BudgetFormFields {
  category: string;
  target: string;
}

const initialValues: BudgetFormFields = {
  category: categories[0].value,
  target: '',
};

const validationSchema = yup.object().shape({
  target: yup
    .string()
    .required('Field is required')
    .test('is-number', 'Field must be a valid number', value => {
      const number = Number(value);
      if (Number.isNaN(number)) {
        return false;
      }
      return true;
    })
    .test('is-zero', 'Field cannot be 0', value => {
      const number = Number(value);
      if (number === 0) return false;
      return true;
    }),
});

const NewBudget = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={tw`px-5 pt-5`}>
        <View style={tw`flex flex-row items-center mb-7`}>
          <BackBtn style={tw`mr-1.5`} />
          <Text style={[styles.heading, tw`pb-1`]}>New Budget</Text>
        </View>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values: any) => {
            // console.log(values);
            dispatch(saveBudget(values));
            navigation.goBack();
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            setValues,
          }) => (
            <>
              <View style={tw`mb-6`}>
                <Text style={[tw`mb-2`, styles.formLabel]}>Category</Text>
                <Dropdown
                  values={values}
                  setValues={setValues}
                  categories={categories}
                />
              </View>

              <View style={tw`mb-6`}>
                <Text style={[styles.formLabel]}>Amount</Text>
                <TextInput
                  mode="outlined"
                  placeholder="in Rs."
                  onChangeText={handleChange('target')}
                  onBlur={handleBlur('target')}
                  value={values.target}
                  keyboardType="number-pad"
                />
                {errors.target && (
                  <HelperText type="error">{errors.target}</HelperText>
                )}
              </View>

              <View>
                <PrimaryBtn
                  label="Save"
                  onPress={handleSubmit}
                  style={tw`my-3`}
                />
              </View>
            </>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

export default NewBudget;
