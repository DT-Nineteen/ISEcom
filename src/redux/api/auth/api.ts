import {rootApi} from 'redux/root/api';
import {authRoutes} from './routes';
import {AuthValues} from './type';
import {ADMIN_TOKEN} from 'sample/magentoSample';

export const authApi = rootApi.injectEndpoints({
  endpoints: builder => ({
    signIn: builder.mutation<string, AuthValues>({
      query: credential => ({
        url: authRoutes.signIn,
        method: 'POST',
        body: credential,
        transformResponse: (response: {data: string}) => response.data,
        transformErrorResponse: (response: {status: string | number}) =>
          response.status,
        headers: {
          Authorization: `Bearer ${ADMIN_TOKEN}`,
        },
      }),
    }),
  }),
});

export const {useSignInMutation} = authApi;
