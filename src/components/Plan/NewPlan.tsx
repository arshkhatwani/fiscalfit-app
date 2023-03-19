import { View, ScrollView } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { HelperText, Text, TextInput } from 'react-native-paper';
import BackBtn from '../Buttons/BackBtn';
import styles from '../../styles/NewTransaction';
import PrimaryBtn from '../Buttons/PrimaryBtn';
import Dropdown from '../Transaction/Dropdown';
import { Formik } from 'formik';
import * as yup from 'yup';
import planCategories from '../../constants/planCategories';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { useNavigation } from '@react-navigation/native';
import { savePlan } from '../../redux/slices/planSlice';

export interface PlanFormFields {
  name: string;
  category: string;
  target: string;
}

const categories = planCategories.map(item => ({
  label: item,
  value: item,
}));

const validationSchema = yup.object().shape({
  name: yup.string().trim().min(2, 'Too short').required('Field is required'),
  target: yup
    .string()
    .required('Field is required')
    .test('is-number', 'Field must be a valid number', value => {
      const number = Number(value);
      if (Number.isNaN(number)) {
        return false;
      }
      return true;
    }),
});

const initialValues: PlanFormFields = {
  name: '',
  category: categories[0].value,
  target: '',
};

const NewPlan = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={tw`px-5 pt-5`}>
        <View style={tw`flex flex-row items-center mb-7`}>
          <BackBtn style={tw`mr-1.5`} />
          <Text style={[styles.heading, tw`pb-1`]}>New Plan</Text>
        </View>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values: any) => {
            // console.log(values);
            dispatch(savePlan(values));
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
                <Text style={[styles.formLabel]}>Plan Name</Text>
                <TextInput
                  mode="outlined"
                  placeholder="Buy vehicle, house, travel etc."
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                />
                {errors.name && (
                  <HelperText type="error">{errors.name}</HelperText>
                )}
              </View>

              <View style={tw`mb-6`}>
                <Text style={[styles.formLabel]}>Target</Text>
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

              <View style={tw`mb-6`}>
                <Text style={[tw`mb-2`, styles.formLabel]}>Category</Text>
                <Dropdown
                  values={values}
                  setValues={setValues}
                  categories={categories}
                />
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

export default NewPlan;
