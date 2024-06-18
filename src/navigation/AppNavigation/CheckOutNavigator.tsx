import * as React from 'react';
import AppScreens, {AppScreensParamList} from './AppScreens.tsx';

import {createStackNavigator} from '@react-navigation/stack';
import Checkout from 'screens/checkout/index.tsx';
import Cart from 'screens/cart/index.tsx';

const Stack = createStackNavigator<AppScreensParamList>();

const options = {
  animationEnabled: true,
  headerShown: false,
};

const CheckOutNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={AppScreens.CART}>
      <Stack.Screen name={AppScreens.CART} component={Cart} options={options} />
      <Stack.Screen
        name={AppScreens.CHECK_OUT}
        component={Checkout}
        options={options}
      />
    </Stack.Navigator>
  );
};

export default CheckOutNavigator;
