import {moderateScale} from 'react-native-size-matters';
type SpaceAlias =
  | 'none'
  | 'xxxs'
  | 'xxs'
  | 'xs'
  | 's'
  | 'm'
  | 'l'
  | 'xl'
  | 'xxl'
  | 'xxxl'
  | 'xxxxl'
  | 'xxxxxl';

export type ValidSpaceKeys = number | SpaceAlias;

const spaces: {[K in ValidSpaceKeys]: number} = {
  none: 0,
  xxxs: moderateScale(2),
  xxs: moderateScale(4),
  xs: moderateScale(6),
  s: moderateScale(8),
  m: moderateScale(10),
  l: moderateScale(16),
  xl: moderateScale(20),
  xxl: moderateScale(24),
  xxxl: moderateScale(32),
  xxxxl: moderateScale(40),
  xxxxxl: moderateScale(48),
};

export default spaces;
