import {combineReducers} from '@reduxjs/toolkit';
import {appConfigReducer} from 'redux/nodes/appConfig/slice';
import {authReducer} from 'redux/nodes/auth/slice';
import {categoriesReducer} from 'redux/nodes/app/category/slice';
import {rootApi} from './api';

export const rootReducer = combineReducers({
  appConfig: appConfigReducer,
  auth: authReducer,
  categories: categoriesReducer,
  [rootApi.reducerPath]: rootApi.reducer,
});
