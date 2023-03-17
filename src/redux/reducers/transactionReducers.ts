import { PayloadAction } from '@reduxjs/toolkit';
import { TransactionsState } from '../slices/transactionSlice';

export const saveTransactionPending = (state: TransactionsState) => {
  state.isLoading = true;
  console.log('loading');
};

export const saveTransactionRejected = (
  state: TransactionsState,
  action: PayloadAction<any>,
) => {
  state.isLoading = false;
  console.log(action.payload.payload);
};

export const saveTransactionFulfilled = (
  state: TransactionsState,
  action: PayloadAction<string>,
) => {
  state.isLoading = false;
  console.log(action.payload);
};
