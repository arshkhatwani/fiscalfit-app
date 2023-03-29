import { PayloadAction } from '@reduxjs/toolkit';
import { BudgetState } from '../slices/budgetSlice';

export const saveBudgetPending = (state: BudgetState) => {
  state.isLoading = true;
  // console.log('loading');
};

export const saveBudgetRejected = (
  state: BudgetState,
  action: PayloadAction<any>,
) => {
  state.isLoading = false;
  console.log(action.payload);
};

export const saveBudgetFulfilled = (
  state: BudgetState,
  action: PayloadAction<string>,
) => {
  state.isLoading = false;
  console.log(action.payload);
};
