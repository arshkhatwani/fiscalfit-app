import firestore from '@react-native-firebase/firestore';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BudgetFormFields } from '../../components/Budget/NewBudget';
import convertToBudgetBody from '../../utils/convertToBudgetBody';
import {
  saveBudgetFulfilled,
  saveBudgetPending,
  saveBudgetRejected,
} from '../reducers/budgetReducers';
import { RootState } from '../store';

export interface BudgetState {
  isLoading: boolean;
}

export const saveBudget = createAsyncThunk<
  string,
  BudgetFormFields,
  { state: RootState }
>('budget/saveBudget', async (body, thunkAPI) => {
  try {
    const uid: string = thunkAPI.getState().auth.user.uid;
    const finalBody = convertToBudgetBody(body, uid);
    await firestore().collection('Budget').add(finalBody);
    return thunkAPI.fulfillWithValue('Budget added!');
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue('Could not save Budget');
  }
});

const initialState: BudgetState = { isLoading: false };

const budgetSlice = createSlice({
  name: 'budget',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(saveBudget.pending, saveBudgetPending);
    builder.addCase(saveBudget.rejected, saveBudgetRejected);
    builder.addCase(saveBudget.fulfilled, saveBudgetFulfilled);
  },
});

export default budgetSlice;
