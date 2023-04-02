import { PayloadAction } from '@reduxjs/toolkit';
import { PlanBody } from '../../utils/convertToPlanBody';
import { PlansState } from '../slices/planSlice';
import Toast from 'react-native-toast-message';

export const savePlanPending = (state: PlansState) => {
  state.isLoading = true;
  // console.log('loading');
};

export const savePlanRejected = (
  state: PlansState,
  action: PayloadAction<any>,
) => {
  state.isLoading = false;
  console.log(action.payload);
  Toast.show({ type: 'default', text1: action.payload });
};

export const savePlanFulfilled = (
  state: PlansState,
  action: PayloadAction<string>,
) => {
  state.isLoading = false;
  console.log(action.payload);
  Toast.show({ type: 'default', text1: action.payload });
};

export const getPlansPending = (state: PlansState) => {
  state.isLoading = true;
  // console.log('loading');
};

export const getPlansRejected = (
  state: PlansState,
  action: PayloadAction<unknown>,
) => {
  state.isLoading = false;
  console.log(action.payload);
};

export const getPlansFulfilled = (
  state: PlansState,
  action: PayloadAction<PlanBody[]>,
) => {
  state.isLoading = true;
  state.userPlans = action.payload;
};

export const depositModalReducer = (
  state: PlansState,
  action: PayloadAction<boolean>,
) => {
  state.depositModalShow = action.payload;
};

export const depositPidReducer = (
  state: PlansState,
  action: PayloadAction<string>,
) => {
  state.depositPid = action.payload;
};

export const addDepositPending = (state: PlansState) => {
  state.isLoading = true;
  // console.log('loading');
};

export const addDepositRejected = (
  state: PlansState,
  action: PayloadAction<unknown>,
) => {
  state.isLoading = false;
  console.log(action.payload);
};

export const addDepositFulfilled = (
  state: PlansState,
  action: PayloadAction<string>,
) => {
  state.isLoading = false;
  state.depositPid = '';
  state.depositModalShow = false;
  console.log(action.payload);
};

export const completePlanPending = (state: PlansState) => {
  state.isLoading = true;
  // console.log('loading');
};

export const completePlanRejected = (
  state: PlansState,
  action: PayloadAction<unknown>,
) => {
  state.isLoading = false;
  console.log(action.payload);
};

export const completePlanFulfilled = (
  state: PlansState,
  action: PayloadAction<{ pid: string; message: string }>,
) => {
  const { pid } = action.payload;
  const idx = state.userPlans.findIndex(plan => plan.pid === pid);
  state.userPlans[idx].completed = true;

  state.isLoading = false;
  state.depositPid = '';
  state.depositModalShow = false;
  console.log(action.payload.message);
};

export const deletePlanPending = (state: PlansState) => {
  state.isLoading = true;
  // console.log('loading');
};

export const deletePlanRejected = (
  state: PlansState,
  action: PayloadAction<any>,
) => {
  state.isLoading = false;
  console.log(action.payload);
  Toast.show({ type: 'default', text1: action.payload });
};

export const deletePlanFulfilled = (
  state: PlansState,
  action: PayloadAction<{ pid: string; message: string }>,
) => {
  state.userPlans = state.userPlans.filter(el => el.pid !== action.payload.pid);
  state.isLoading = false;
  console.log(action.payload.message);
  Toast.show({ type: 'default', text1: action.payload.message });
};
