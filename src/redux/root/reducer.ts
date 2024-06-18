import {combineReducers} from '@reduxjs/toolkit';
import appConfigSelectors from 'redux/nodes/appConfig/appConfigSelectors';
import {authReducer} from 'redux/nodes/auth/slice';
import {rootApi} from './api';

export const rootReducer = combineReducers({
  appConfig: appConfigSelectors,
  auth: authReducer,
  [rootApi.reducerPath]: rootApi.reducer,
});
