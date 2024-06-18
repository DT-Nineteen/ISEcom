import {rootApi} from 'redux/root/api';
import {authRoutes} from './routes';
import {AuthValues} from './type';

export const authApi = rootApi.injectEndpoints({
  endpoints: builder => ({
    signIn: builder.mutation<string, AuthValues>({
      query: credential => ({
        url: authRoutes.signIn,
        method: 'POST',
        body: credential,
      }),
    }),
  }),
});

export const {useSignInMutation} = authApi;
