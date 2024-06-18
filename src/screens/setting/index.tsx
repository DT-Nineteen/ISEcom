import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {useAppTheme} from 'theme/AppThemeProvider';
import {isDarkMode} from 'redux/nodes/appConfig/appConfigSelectors';
import {appConfigActions} from 'redux/nodes/appConfig/appConfigSelectors';
import {List, Switch} from 'react-native-paper';
import createStyle from './styles';

const SettingScreen = (): JSX.Element => {
  const dispatch = useDispatch();
  const isDarkModeTheme = useSelector(isDarkMode);
  const {colors} = useAppTheme();
  const styles = createStyle(colors);

  const handleToggleDarkMode = () => {
    dispatch(appConfigActions.toggleDarkMode());
  };
  return (
    <SafeAreaView>
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
    </SafeAreaView>
  );
};

export default SettingScreen;
