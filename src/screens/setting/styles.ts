import {StyleSheet} from 'react-native';

const createStyle = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    listItem: {
      backgroundColor: colors.surface,
      borderBottomWidth: 1,
    },
    titleStyle: {
      color: colors.text,
    },
  });

export default createStyle;
