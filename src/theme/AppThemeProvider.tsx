import React, {Children} from 'react';

import {lightTheme, darkTheme} from './ColorTheme';
import {useSelector} from 'react-redux';
import {
  isDarkMode,
  selectAppLanguage,
} from 'redux/nodes/appConfig/appConfigSelectors';
import {PaperProvider, useTheme} from 'react-native-paper';
import {MD3Typescale} from 'react-native-paper/lib/typescript/types';
import {fontsMap} from './Fonts';
import spaces from './Space';

interface AppThemeProviderProps {
  children: React.ReactNode;
}
export const AppThemeProvider: React.FC<AppThemeProviderProps> = ({
  children,
}) => {
  // Check mode theme
  const isDarkTheme: boolean = useSelector(isDarkMode);
  const themeColor = isDarkTheme ? darkTheme : lightTheme;

  // Check font to use
  const isRtl: boolean = useSelector(selectAppLanguage) === 'ar';
  const fonts = isRtl ? fontsMap.rtl : fontsMap.ltr;

  // Check App theme
  const customAppTheme = {
    ...themeColor,
    fonts,
    spaces,
  };

  return <PaperProvider theme={customAppTheme}>{children}</PaperProvider>;
};

export type AppTheme = typeof lightTheme &
  MD3Typescale & {spaces: typeof spaces};

export const useAppTheme = () => useTheme<AppTheme>();
