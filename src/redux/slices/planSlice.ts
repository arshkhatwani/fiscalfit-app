import firestore from '@react-native-firebase/firestore';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PlanFormFields } from '../../components/Plan/NewPlan';
import convertToPlanBody, { PlanBody } from '../../utils/convertToPlanBody';
import {
  addDepositFulfilled,
  addDepositPending,
  addDepositRejected,
  completePlanFulfilled,
  completePlanPending,
  completePlanRejected,
  deletePlanFulfilled,
  deletePlanPending,
  deletePlanRejected,
  depositModalReducer,
  depositPidReducer,
  getPlansFulfilled,
  getPlansPending,
  getPlansRejected,
  savePlanFulfilled,
  savePlanPending,
  savePlanRejected,
} from '../reducers/planReducers';
import { RootState } from '../store';

export interface PlansState {
  isLoading: boolean;
  userPlans: PlanBody[];
  depositModalShow: boolean;
  depositPid: string;
}

export const savePlan = createAsyncThunk<
  string,
  PlanFormFields,
  { state: RootState }
>('plans/savePlan', async (body: PlanFormFields, thunkAPI) => {
  try {
    const uid: string = thunkAPI.getState().auth.user.uid;
    const finalBody = convertToPlanBody(body, uid);
    await firestore().collection('Plans').add(finalBody);
    return thunkAPI.fulfillWithValue('Plan added!');
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue('Could not save plan');
  }
});

export const getPlans = createAsyncThunk<
  PlanBody[],
  void,
  { state: RootState }
>('plans/getPlans', async (_, thunkAPI) => {
  try {
    const uid = thunkAPI.getState().auth.user.uid;
    const querySnapshot = await firestore()
      .collection('Plans')
      .where('uid', '==', uid)
      .get();
    const userData = querySnapshot.docs.map(doc => doc.data());
    return userData as PlanBody[];
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue('Could not get plans');
  }
});

export const addDeposit = createAsyncThunk<
  string,
  { pid: string; deposit: number },
  { state: RootState }
>('plans/addDeposit', async (body, thunkAPI) => {
  try {
    const querySnapshot = await firestore()
      .collection('Plans')
      .where('pid', '==', body.pid)
      .get();
    querySnapshot.forEach(doc => {
      doc.ref.update({ deposit: body.deposit });
    });
    return thunkAPI.fulfillWithValue('Deposit added!');
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue('Could not add deposit');
  }
});

export const completePlan = createAsyncThunk<
  { pid: string; message: string },
  string,
  { state: RootState }
>('plans/completePlan', async (pid: string, thunkAPI) => {
  try {
    const querySnapshot = await firestore()
      .collection('Plans')
      .where('pid', '==', pid)
      .get();
    querySnapshot.forEach(doc => {
      doc.ref.update({ completed: true });
    });
    return thunkAPI.fulfillWithValue({ pid: pid, message: 'Plan completed!' });
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue('Could not complete plan');
  }
});

export const deletePlan = createAsyncThunk<
  { message: string; pid: string },
  string,
  { state: RootState }
>('plans/deletePlan', async (pid, thunkAPI) => {
  try {
    const collectionRef = firestore().collection('Plans');
    const querySnapshot = await collectionRef.where('pid', '==', pid).get();
    querySnapshot.forEach(doc => {
      doc.ref.delete();
    });
    return thunkAPI.fulfillWithValue({ message: 'Plan deleted!', pid });
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue('Could not delete plan');
  }
});

const initialState: PlansState = {
  isLoading: false,
  userPlans: [],
  depositModalShow: false,
  depositPid: '',
};

const planSlice = createSlice({
  name: 'plans',
  initialState,
  reducers: {
    setDepositModalShow: depositModalReducer,
    setDepositPid: depositPidReducer,
  },
  extraReducers: builder => {
    builder.addCase(savePlan.pending, savePlanPending);
    builder.addCase(savePlan.rejected, savePlanRejected);
    builder.addCase(savePlan.fulfilled, savePlanFulfilled);

    builder.addCase(getPlans.pending, getPlansPending);
    builder.addCase(getPlans.rejected, getPlansRejected);
    builder.addCase(getPlans.fulfilled, getPlansFulfilled);

    builder.addCase(addDeposit.pending, addDepositPending);
    builder.addCase(addDeposit.rejected, addDepositRejected);
    builder.addCase(addDeposit.fulfilled, addDepositFulfilled);

    builder.addCase(completePlan.pending, completePlanPending);
    builder.addCase(completePlan.rejected, completePlanRejected);
    builder.addCase(completePlan.fulfilled, completePlanFulfilled);

    builder.addCase(deletePlan.pending, deletePlanPending);
    builder.addCase(deletePlan.rejected, deletePlanRejected);
    builder.addCase(deletePlan.fulfilled, deletePlanFulfilled);
  },
});

export const { setDepositModalShow, setDepositPid } = planSlice.actions;

export default planSlice;
