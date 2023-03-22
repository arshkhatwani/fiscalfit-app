import { PayloadAction } from '@reduxjs/toolkit';
import { PlanBody } from '../../utils/convertToPlanBody';
import { PlansState } from '../slices/planSlice';

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
};

export const savePlanFulfilled = (
  state: PlansState,
  action: PayloadAction<string>,
) => {
  state.isLoading = false;
  console.log(action.payload);
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
