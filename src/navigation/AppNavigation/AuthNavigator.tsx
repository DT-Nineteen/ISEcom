import * as React from 'react';
import AppScreens, {AppScreensParamList} from './AppScreens';

import {createStackNavigator} from '@react-navigation/stack';

import Login from 'screens/login';
import Register from 'screens/register';

const Stack = createStackNavigator<AppScreensParamList>();

const options = {
  animationEnabled: true,
  headerShown: false,
};

const AuthNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={AppScreens.LOGIN}>
      <Stack.Screen
        name={AppScreens.LOGIN}
        component={Login}
        options={options}
      />
      <Stack.Screen
        name={AppScreens.REGISTER}
        component={Register}
        options={options}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
