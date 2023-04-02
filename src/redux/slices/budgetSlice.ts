import firestore from '@react-native-firebase/firestore';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BudgetFormFields } from '../../components/Budget/NewBudget';
import convertToBudgetBody, {
  BudgetBody,
} from '../../utils/convertToBudgetBody';
import {
  categoryTransactionsReducer,
  deleteBudgetFulfilled,
  deleteBudgetPending,
  deleteBudgetRejected,
  getBudgetsFulfilled,
  getBudgetsPending,
  getBudgetsRejected,
  saveBudgetFulfilled,
  saveBudgetPending,
  saveBudgetRejected,
} from '../reducers/budgetReducers';
import { RootState } from '../store';

export interface BudgetState {
  isLoading: boolean;
  userBudgets: BudgetBody[];
  categoryTransactions: {
    [key: string]: number;
  };
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
    return thunkAPI.rejectWithValue('Could not save budget');
  }
});

export const getBudgets = createAsyncThunk<
  BudgetBody[],
  void,
  { state: RootState }
>('budget/getBudgets', async (_, thunkAPI) => {
  try {
    const uid = thunkAPI.getState().auth.user.uid;
    const querySnapshot = await firestore()
      .collection('Budget')
      .where('uid', '==', uid)
      .get();
    const userData = querySnapshot.docs.map(doc => doc.data());
    return userData as BudgetBody[];
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue('Could not get budgets');
  }
});

export const deleteBudget = createAsyncThunk<
  { message: string; bid: string },
  string,
  { state: RootState }
>('budget/deleteBudget', async (bid, thunkAPI) => {
  try {
    const collectionRef = firestore().collection('Budget');
    const querySnapshot = await collectionRef.where('bid', '==', bid).get();
    querySnapshot.forEach(doc => {
      doc.ref.delete();
    });
    return thunkAPI.fulfillWithValue({ message: 'Budget deleted!', bid });
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue('Could not delete budget');
  }
});

const initialState: BudgetState = {
  isLoading: false,
  userBudgets: [],
  categoryTransactions: {},
};

const budgetSlice = createSlice({
  name: 'budget',
  initialState,
  reducers: {
    getCategoryTransactions: categoryTransactionsReducer,
  },
  extraReducers: builder => {
    builder.addCase(saveBudget.pending, saveBudgetPending);
    builder.addCase(saveBudget.rejected, saveBudgetRejected);
    builder.addCase(saveBudget.fulfilled, saveBudgetFulfilled);

    builder.addCase(getBudgets.pending, getBudgetsPending);
    builder.addCase(getBudgets.rejected, getBudgetsRejected);
    builder.addCase(getBudgets.fulfilled, getBudgetsFulfilled);

    builder.addCase(deleteBudget.pending, deleteBudgetPending);
    builder.addCase(deleteBudget.rejected, deleteBudgetRejected);
    builder.addCase(deleteBudget.fulfilled, deleteBudgetFulfilled);
  },
});

export const { getCategoryTransactions } = budgetSlice.actions;

export default budgetSlice;
