import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import * as React from 'react';
import {TabNavigation} from './TabNavigator';
import {LinkingConfiguration} from './LinkingConfiguration';
import AuthNavigation from './AuthNavigator';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {isDarkMode} from 'redux/nodes/appConfig/appConfigSelectors';
import {darkTheme, lightTheme} from 'theme/ColorTheme';
import {AppThemeProvider} from 'theme/AppThemeProvider';
import {getAccessToken} from 'redux/nodes/auth/selectors';

export default function Navigation() {
  const navigationContainerRef =
    React.useRef<NavigationContainerRef<any>>(null);

  const isDarkTheme: boolean = useSelector(isDarkMode);
  const isAuth: string = useSelector(getAccessToken);

  const themeColor = isDarkTheme
    ? {...darkTheme, ...NavigationDarkTheme}
    : {...lightTheme, ...NavigationDefaultTheme};

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

  return (
    <AppThemeProvider>
      <NavigationContainer
        ref={navigationContainerRef}
        linking={LinkingConfiguration}
        onStateChange={handleNavigationStateChange}
        theme={themeColor}>
        {isAuth ? <TabNavigation /> : <AuthNavigation />}
      </NavigationContainer>
    </AppThemeProvider>
  );
}
