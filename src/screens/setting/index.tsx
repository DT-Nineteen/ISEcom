import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useAppTheme} from 'theme/AppThemeProvider';
import {isDarkMode} from 'redux/nodes/appConfig/selector';
import {appConfigActions} from 'redux/nodes/appConfig/slice';
import {List, Switch, TouchableRipple} from 'react-native-paper';
import createStyle from './styles';
import GenericTemplate from 'components/common/GenericTemplate';
import StyledText from 'components/common/StyledText';
import {logout} from 'redux/nodes/auth/slice';

const SettingScreen = (): JSX.Element => {
  const dispatch = useDispatch();
  const isDarkModeTheme = useSelector(isDarkMode);
  const {colors} = useAppTheme();
  const styles = createStyle(colors);

  const handleToggleDarkMode = () => {
    dispatch(appConfigActions.toggleDarkMode());
  };
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <GenericTemplate>
      <List.Item
        style={[styles.listItem, {backgroundColor: colors.surface}]}
        titleStyle={{color: colors.text}}
        title="Toggle Theme Mode"
        right={() => (
          <Switch
            value={isDarkModeTheme}
            onValueChange={handleToggleDarkMode}
          />
        )}
      />
      <TouchableRipple onPress={handleLogout}>
        <StyledText h2>Logout</StyledText>
      </TouchableRipple>
    </GenericTemplate>
  );
};

export default SettingScreen;
