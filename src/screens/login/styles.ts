import {StyleSheet} from 'react-native';
import {AppTheme} from 'theme/AppThemeProvider';

const createStyle = (colors: AppTheme['colors'], spaces: AppTheme['spaces']) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    loginContainer: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: colors.background,
      padding: spaces.m,
      elevation: spaces.m,
    },
    textInput: {
      height: spaces.xxxxl,
      width: '100%',
      margin: spaces.m,
      backgroundColor: colors.background,
      borderColor: colors.gray100,
      borderWidth: StyleSheet.hairlineWidth,
      borderRadius: spaces.m,
    },
    errorText: {
      color: colors.error,
    },
  });

export default createStyle;
