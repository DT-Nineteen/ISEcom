import {useDispatch} from 'react-redux';
import {useSignInMutation} from 'redux/api/auth/api';
import {AuthValues} from 'redux/api/auth/type';
import {login} from 'redux/nodes/auth/slice';
import AsyncStorage from '@react-native-async-storage/async-storage';
interface UseAuthResult {
  auth: (values: AuthValues) => void;
  signInResult: any;
  authSuccess: (data: string) => void;
  authFailed: (error: any) => void;
}

export const useAuth = (): UseAuthResult => {
  const [signIn, signInResult] = useSignInMutation();
  const dispatch = useDispatch();

  const auth = async (values: AuthValues) => {
    await signIn(values).unwrap();
  };

  const authSuccess = (data: string) => {
    console.log('Login Success', data);
    AsyncStorage.setItem('accessToken', data);
    dispatch(login(data));
  };

  const authFailed = (error: any) => {
    console.log('Login Failed', error.data.message);
    AsyncStorage.removeItem('accessToken');
  };

  return {
    auth,
    authSuccess,
    authFailed,
    signInResult,
  };
};
