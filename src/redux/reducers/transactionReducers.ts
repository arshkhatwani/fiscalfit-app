import { PayloadAction } from '@reduxjs/toolkit';
import { TransactionBody } from '../../utils/convertToTransactionBody';
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

export const getTransactionsPending = (state: TransactionsState) => {
  state.isLoading = true;
  console.log('loading');
};

export const getTransactionsRejected = (
  state: TransactionsState,
  action: PayloadAction<unknown>,
) => {
  state.isLoading = false;
  console.log(action.payload);
};

export const getTransactionsFulfilled = (
  state: TransactionsState,
  action: PayloadAction<TransactionBody[]>,
) => {
  state.isLoading = true;
  state.userTransactions = action.payload;
};
