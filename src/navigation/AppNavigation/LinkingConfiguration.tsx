import {LinkingOptions} from '@react-navigation/native';
import AppScreens from './AppScreens';

export const LinkingConfiguration: LinkingOptions<{}> = {
  prefixes: ['https://example.com', 'example://'],
  config: {
    screens: {
      initialRouteName: 'blocks',
      [AppScreens.HOME]: {
        path: 'home',
      },
      [AppScreens.CHECK_OUT]: {path: 'checkout'},
    },
  },
};
