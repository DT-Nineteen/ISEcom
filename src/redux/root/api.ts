import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {RootState} from './store'; // Import the RootState type
import {API_URL} from 'sample/magentoSample';

const getAuthorizationHeader = (headers: Headers, state: RootState): string => {
  const isAdminApi = headers.get('authorization');
  if (isAdminApi) {
    return isAdminApi;
  }
  const token = state.auth.accessToken;
  if (token) {
    return `Bearer ${token}`;
  }
  throw new Error('Token not found');
};

export const rootApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers, {getState}) => {
      const state = getState() as RootState;
      headers.set('Authorization', getAuthorizationHeader(headers, state));
      return headers;
    },
  }),
  tagTypes: ['Auth'],
  refetchOnReconnect: true,
  endpoints: () => ({}),
});
