import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';
import convertToTransactionBody from '../../utils/convertToTransactionBody';
import { RootState } from '../store';
import { FormFields } from '../../components/Transaction/NewTransaction';
import {
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

export interface TransactionsState {
  isLoading: boolean;
}

const initialState: TransactionsState = {
  isLoading: false,
};

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(saveTransaction.pending, saveTransactionPending);
    builder.addCase(saveTransaction.rejected, saveTransactionRejected);
    builder.addCase(saveTransaction.fulfilled, saveTransactionFulfilled);
  },
});

export default transactionSlice;
