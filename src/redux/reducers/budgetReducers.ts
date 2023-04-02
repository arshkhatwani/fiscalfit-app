import { PayloadAction } from '@reduxjs/toolkit';
import transactionCategories from '../../constants/transactionCategories';
import { BudgetBody } from '../../utils/convertToBudgetBody';
import { TransactionBody } from '../../utils/convertToTransactionBody';
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

export const getBudgetsPending = (state: BudgetState) => {
  state.isLoading = true;
  // console.log('loading');
};

export const getBudgetsRejected = (
  state: BudgetState,
  action: PayloadAction<unknown>,
) => {
  state.isLoading = false;
  console.log(action.payload);
};

export const getBudgetsFulfilled = (
  state: BudgetState,
  action: PayloadAction<BudgetBody[]>,
) => {
  state.isLoading = true;
  state.userBudgets = action.payload;
};

export const categoryTransactionsReducer = (
  state: BudgetState,
  action: PayloadAction<TransactionBody[]>,
) => {
  let categoryTransactions: { [key: string]: number } = {};

  transactionCategories.forEach(category => {
    categoryTransactions[category] = 0;
  });

  action.payload.forEach(transaction => {
    transaction.spend &&
      (categoryTransactions[transaction.category] += transaction.price);
  });

  state.categoryTransactions = categoryTransactions;
};

export const deleteBudgetPending = (state: BudgetState) => {
  state.isLoading = true;
  // console.log('loading');
};

export const deleteBudgetRejected = (
  state: BudgetState,
  action: PayloadAction<any>,
) => {
  state.isLoading = false;
  console.log(action.payload);
};

export const deleteBudgetFulfilled = (
  state: BudgetState,
  action: PayloadAction<{ bid: string; message: string }>,
) => {
  state.userBudgets = state.userBudgets.filter(
    el => el.bid !== action.payload.bid,
  );
  state.isLoading = false;
  console.log(action.payload.message);
};
