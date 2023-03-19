import firestore from '@react-native-firebase/firestore';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PlanFormFields } from '../../components/Plan/NewPlan';
import convertToPlanBody, { PlanBody } from '../../utils/convertToPlanBody';
import {
  savePlanFulfilled,
  savePlanPending,
  savePlanRejected,
} from '../reducers/planReducers';
import { RootState } from '../store';

export interface PlansState {
  isLoading: boolean;
  userPlans: PlanBody[];
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

const initialState: PlansState = {
  isLoading: false,
  userPlans: [],
};

const planSlice = createSlice({
  name: 'plans',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(savePlan.pending, savePlanPending);
    builder.addCase(savePlan.rejected, savePlanRejected);
    builder.addCase(savePlan.fulfilled, savePlanFulfilled);
  },
});

export default planSlice;
