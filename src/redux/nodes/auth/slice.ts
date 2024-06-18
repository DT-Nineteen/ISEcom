import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {initialAuthState, AuthStateType, User} from './constants';

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
    },
  },
});

export const {
  reducer: authReducer,
  actions,
  actions: {setIsAuthenticated, login, logout},
} = authSlice;
