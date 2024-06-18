import {useAppTheme} from 'theme/AppThemeProvider';
import * as React from 'react';
import {ColorValue, StyleProp, TextStyle} from 'react-native';
import {TextProps, Text} from 'react-native-paper';

interface StyledTextProps extends TextProps<Text> {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  p?: boolean;
  small?: boolean;
  bold?: boolean;
  title?: boolean;
  textColors?: ColorValue;
  style?: StyleProp<TextStyle>;
}

const StyledText: React.FC<StyledTextProps> = ({
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  small,
  bold,
  title,
  textColors,
  style,
  ...props
}) => {
  const theme = useAppTheme();

  return (
    <Text
      style={[
        h1 && theme.fonts.headlineLarge,
        h2 && theme.fonts.headlineSmall,
        h3 && theme.fonts.titleLarge,
        h4 && theme.fonts.titleSmall,
        h5 && theme.fonts.labelLarge,
        p && theme.fonts.labelSmall,
        small && theme.fonts.bodyMedium,
        {
          color: textColors || theme.colors.text,
          fontWeight: bold ? 'bold' : 'normal',
        },
        style,
      ]}
      {...props}>
      {props.children}
    </Text>
  );
};

export default StyledText;
