import { Formik } from 'formik';
import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, HelperText, Text, TextInput } from 'react-native-paper';
import tw from 'twrnc';
import * as yup from 'yup';
import transactionCategories from '../../constants/transactionCategories';
import styles from '../../styles/NewTransaction';
import PrimaryBtn from '../Buttons/PrimaryBtn';
import Dropdown from './Dropdown';

const categories = transactionCategories.map(item => ({
  label: item,
  value: item,
}));

interface FormFields {
  name: string;
  price: string;
  spend: boolean;
  date: Date;
  category: string;
}

const validationSchema = yup.object().shape({
  name: yup.string().min(2, 'Too short').required('Field is required'),
  price: yup
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

const initialValues: FormFields = {
  name: '',
  price: '',
  spend: true,
  date: new Date(),
  category: categories[0].value,
};

const NewTransaction = () => {
  return (
    <ScrollView>
      <View style={tw`px-5 pt-5`}>
        <Text style={[styles.heading, tw`mb-7`]}>New Transaction</Text>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values: any) => {
            console.log('Submitted form');
            console.log(values);
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
                <Text style={[styles.formLabel]}>Transaction Name</Text>
                <TextInput
                  mode="outlined"
                  placeholder="Salary, Outing etc."
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                />
                {errors.name && (
                  <HelperText type="error">{errors.name}</HelperText>
                )}
              </View>

              <View style={tw`mb-6`}>
                <Text style={[styles.formLabel]}>Amount</Text>
                <TextInput
                  mode="outlined"
                  placeholder="in Rs."
                  onChangeText={handleChange('price')}
                  onBlur={handleBlur('price')}
                  value={values.price}
                />
                {errors.price && (
                  <HelperText type="error">{errors.price}</HelperText>
                )}
              </View>

              <View style={tw`mb-6`}>
                <Text style={[tw`mb-2`, styles.formLabel]}>Type</Text>
                <View style={tw`flex flex-row justify-center`}>
                  <Button
                    style={[tw`flex-1 mr-1`, values.spend && styles.spendBtn]}
                    mode="outlined"
                    labelStyle={[values.spend && styles.btnLabelActive]}
                    onPress={() => setValues({ ...values, spend: true })}>
                    Spend
                  </Button>

                  <Button
                    style={[tw`flex-1 ml-1`, !values.spend && styles.earnBtn]}
                    mode="outlined"
                    labelStyle={[!values.spend && styles.btnLabelActive]}
                    onPress={() => setValues({ ...values, spend: false })}>
                    Earn
                  </Button>
                </View>
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

export default NewTransaction;
