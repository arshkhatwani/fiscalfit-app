import { PayloadAction } from '@reduxjs/toolkit';
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
