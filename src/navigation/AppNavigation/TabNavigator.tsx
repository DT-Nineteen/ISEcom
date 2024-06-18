import * as React from 'react';
import AppScreens, {AppScreensParamList} from './AppScreens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from 'screens/home';
import CheckOutNavigator from './CheckOutNavigator';
import SettingScreen from 'screens/setting';

const Tab = createBottomTabNavigator<AppScreensParamList>();

export const TabNavigation = () => {
  return (
    <Tab.Navigator initialRouteName={AppScreens.HOME}>
      <Tab.Screen
        name={AppScreens.HOME}
        component={Home}
        options={{title: 'Home'}}
      />
      <Tab.Screen
        name={AppScreens.CHECK_OUT_NAVIGATOR}
        component={CheckOutNavigator}
        options={{title: 'Check Out'}}
      />
      <Tab.Screen
        name={AppScreens.SETTING}
        component={SettingScreen}
        options={{title: 'Setting'}}
      />
    </Tab.Navigator>
  );
};
