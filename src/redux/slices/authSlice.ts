import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuth: false,
  user: {},
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, { payload }) => {
      state.isAuth = payload;
    },

    setUser: (state, { payload }) => {
      state.user = payload;
    },

    logoutUser: state => {
      return initialState;
    },
  },
});

export const { setAuth, setUser, logoutUser } = authSlice.actions;

export default authSlice;
