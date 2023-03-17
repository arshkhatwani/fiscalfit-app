import { createSlice } from '@reduxjs/toolkit';

interface User {
  name: string;
  email: string;
  photoURL: string;
  uid: string;
}

interface AuthState {
  isAuth: boolean;
  user: User;
}

const initialState: AuthState = {
  isAuth: false,
  user: {
    name: '',
    email: '',
    photoURL: '',
    uid: '',
  },
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
