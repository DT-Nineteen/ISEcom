import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {RootState} from './store'; // Import the RootState type
import {ADMIN_TOKEN} from 'sample/magentoSample';

export const rootApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://v551app.bssdev.cloud/',
    prepareHeaders: (headers, {getState}) => {
      const state = getState() as RootState; // Type the state correctly
      const token = state.auth.accessToken;
      console.log('token', token);
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      } else {
        headers.set('Authorization', `Bearer ${ADMIN_TOKEN}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Auth'],
  refetchOnReconnect: true,
  endpoints: () => ({}),
});
