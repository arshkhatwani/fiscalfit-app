import { PayloadAction } from '@reduxjs/toolkit';
import { TransactionBody } from '../../utils/convertToTransactionBody';
import { sortByDateNewestFirst } from '../../utils/sortTransactionBodyArray';
import { TransactionsState } from '../slices/transactionSlice';

export const saveTransactionPending = (state: TransactionsState) => {
  state.isLoading = true;
  // console.log('loading');
};

export const saveTransactionRejected = (
  state: TransactionsState,
  action: PayloadAction<any>,
) => {
  state.isLoading = false;
  console.log(action.payload);
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
  // console.log('loading');
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
  state.userTransactions = sortByDateNewestFirst(action.payload);
};

export const deleteTransactionPending = (state: TransactionsState) => {
  state.isLoading = true;
  // console.log('loading');
};

export const deleteTransactionRejected = (
  state: TransactionsState,
  action: PayloadAction<any>,
) => {
  state.isLoading = false;
  console.log(action.payload);
};

export const deleteTransactionFulfilled = (
  state: TransactionsState,
  action: PayloadAction<{ tid: string; message: string }>,
) => {
  state.userTransactions = state.userTransactions.filter(
    el => el.tid !== action.payload.tid,
  );
  state.isLoading = false;
  console.log(action.payload.message);
};
