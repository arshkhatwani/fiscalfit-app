import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';
import convertToTransactionBody, {
  TransactionBody,
} from '../../utils/convertToTransactionBody';
import { RootState } from '../store';
import { FormFields } from '../../components/Transaction/NewTransaction';
import {
  getTransactionsFulfilled,
  getTransactionsPending,
  getTransactionsRejected,
  saveTransactionFulfilled,
  saveTransactionPending,
  saveTransactionRejected,
} from '../reducers/transactionReducers';

export const saveTransaction = createAsyncThunk<
  string,
  FormFields,
  { state: RootState }
>('transactions/saveTransaction', async (body: FormFields, thunkAPI) => {
  try {
    const uid: string = thunkAPI.getState().auth.user.uid;
    const finalBody = convertToTransactionBody(body, uid);
    await firestore().collection('Transactions').add(finalBody);
    return thunkAPI.fulfillWithValue('Transaction added!');
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue('Could not save transaction');
  }
});

export const getTransactions = createAsyncThunk<
  TransactionBody[],
  void,
  { state: RootState }
>('transactions/getTransactions', async (_, thunkAPI) => {
  try {
    const uid = thunkAPI.getState().auth.user.uid;
    const querySnapshot = await firestore()
      .collection('Transactions')
      .where('uid', '==', uid)
      .get();
    const userData = querySnapshot.docs.map(doc => doc.data());
    return userData as TransactionBody[];
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue('Could not save transaction');
  }
});

export interface TransactionsState {
  isLoading: boolean;
  userTransactions: TransactionBody[];
}

const initialState: TransactionsState = {
  isLoading: false,
  userTransactions: [],
};

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(saveTransaction.pending, saveTransactionPending);
    builder.addCase(saveTransaction.rejected, saveTransactionRejected);
    builder.addCase(saveTransaction.fulfilled, saveTransactionFulfilled);

    builder.addCase(getTransactions.pending, getTransactionsPending);
    builder.addCase(getTransactions.rejected, getTransactionsRejected);
    builder.addCase(getTransactions.fulfilled, getTransactionsFulfilled);
  },
});

export default transactionSlice;
