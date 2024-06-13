import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import * as React from 'react';
import {TabNavigation} from './TabNavigator';
import {LinkingConfiguration} from './LinkingConfiguration';
import AuthNavigation from './AuthNavigator';

export default function Navigation() {
  const navigationContainerRef =
    React.useRef<NavigationContainerRef<any>>(null);

  React.useEffect(() => {
    async function init() {
      console.log('App init');
    }
    init();
  });

  const handleNavigationStateChange = async () => {
    const currentRouteName =
      navigationContainerRef?.current?.getCurrentRoute()?.name;
    try {
      console.log('currentRouteName', currentRouteName);
    } catch (e) {
      console.log('error', e);
    }
  };
  const isLoggedIn = false;
  return (
    <NavigationContainer
      ref={navigationContainerRef}
      linking={LinkingConfiguration}
      onStateChange={handleNavigationStateChange}>
      {isLoggedIn ? <TabNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
}
