import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export enum AppScreens {
  LOGIN = 'Login',
  REGISTER = 'Register',
  HOME = 'Home',
  CART = 'Cart',
  CHECK_OUT = 'CheckOut',
  CHECK_OUT_NAVIGATOR = 'CheckOutNavigator',
  SETTING = 'Setting',
}

export type AppScreensParamList = {
  [AppScreens.LOGIN]: undefined;
  [AppScreens.REGISTER]: undefined;
  [AppScreens.HOME]: undefined;
  [AppScreens.CART]: undefined;
  [AppScreens.CHECK_OUT]: undefined;
  [AppScreens.CHECK_OUT_NAVIGATOR]: undefined;
  [AppScreens.SETTING]: undefined;
};

export type AppScreenProps<T extends AppScreens> = {
  navigation: StackNavigationProp<AppScreensParamList, T>;
  route: RouteProp<AppScreensParamList, T>;
};

export default AppScreens;
