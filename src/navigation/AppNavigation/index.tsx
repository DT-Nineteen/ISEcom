import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {useEffect, useRef} from 'react';
import {TabNavigation} from './TabNavigator';
import {LinkingConfiguration} from './LinkingConfiguration';
import AuthNavigation from './AuthNavigator';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {isDarkMode, getIsAppInit} from 'redux/nodes/appConfig/selector';
import {darkTheme, lightTheme} from 'theme/ColorTheme';
import {AppThemeProvider} from 'theme/AppThemeProvider';
import {getAccessToken} from 'redux/nodes/auth/selectors';
import NavigationService from './NavigationService';
import SplashScreen from 'screens/splash';

export default function Navigation() {
  const navigationContainerRef = useRef<NavigationContainerRef<any>>(null);
  const isDarkTheme: boolean = useSelector(isDarkMode);
  const isAuth: string = useSelector(getAccessToken);
  const isAppInit: boolean = useSelector(getIsAppInit);

  const themeColor = isDarkTheme
    ? {...darkTheme, ...NavigationDarkTheme}
    : {...lightTheme, ...NavigationDefaultTheme};

  useEffect(() => {
    if (navigationContainerRef.current) {
      NavigationService.setNavigator(navigationContainerRef.current);
    }
  }, []);

  const handleNavigationStateChange = async () => {
    const currentRouteName =
      navigationContainerRef?.current?.getCurrentRoute()?.name;
    try {
      console.log('currentRouteName', currentRouteName);
    } catch (e) {
      console.log('error', e);
    }
  };

  if (isAppInit) {
    return <SplashScreen />;
  }

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
