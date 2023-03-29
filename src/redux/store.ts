import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import authSlice from './slices/authSlice';
import budgetSlice from './slices/budgetSlice';
import planSlice from './slices/planSlice';
import transactionSlice from './slices/transactionSlice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    transactions: transactionSlice.reducer,
    plans: planSlice.reducer,
    budget: budgetSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
