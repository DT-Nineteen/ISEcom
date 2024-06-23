import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {initialAuthState} from './constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface SetIsAuthenticatedPayload {
  isAuthenticated: boolean;
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    setIsAuthenticated(
      state,
      action: PayloadAction<SetIsAuthenticatedPayload>,
    ) {
      state.isAuthenticated = action.payload.isAuthenticated;
    },
    login(state, action: PayloadAction<string>) {
      const accessToken: string = action.payload;
      state.accessToken = accessToken;
      state.isAuthenticated = true;
    },
    logout(state) {
      state.accessToken = '';
      state.isAuthenticated = false;
      AsyncStorage.removeItem('accessToken');
    },
  },
});

export const {
  reducer: authReducer,
  actions,
  actions: {setIsAuthenticated, login, logout},
} = authSlice;
