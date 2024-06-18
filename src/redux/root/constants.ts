import {initialAuthState} from 'redux/nodes/auth/constants';
import {rootApi} from './api';

export const initialRootState = {
  auth: initialAuthState,
  [rootApi.reducerPath]: rootApi.reducer(undefined, {type: '@@INIT'}),
};
