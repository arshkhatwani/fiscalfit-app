import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import { RootState } from '../store';
import Toast from 'react-native-toast-message';

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

export const logoutUser = createAsyncThunk<string, void, { state: RootState }>(
  'auth/logoutUser',
  async (_, thunkAPI) => {
    try {
      await auth().signOut();
      return thunkAPI.fulfillWithValue('User signed out successfully!');
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue('Could not sign out');
    }
  },
);

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

    resetUser: state => {
      return initialState;
    },
  },

  extraReducers: builder => {
    builder.addCase(logoutUser.fulfilled, (state, action) => {
      Toast.show({ type: 'default', text1: action.payload });
      return initialState;
    });

    builder.addCase(logoutUser.rejected, (state, action) => {
      Toast.show({ type: 'default', text1: action.payload as string });
    });
  },
});

export const { setAuth, setUser, resetUser } = authSlice.actions;

export default authSlice;
