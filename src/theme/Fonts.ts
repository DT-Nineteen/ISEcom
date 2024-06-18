import {configureFonts} from 'react-native-paper';
import {MD3Typescale} from 'react-native-paper/lib/typescript/types';
import {verticalScale, moderateScale} from 'react-native-size-matters';

type LanguageWithFonts = 'ltr' | 'rtl';

const ltrFonts: MD3Typescale = {
  displayLarge: {
    fontFamily: 'Roboto',
    letterSpacing: 0,
    fontWeight: '400',
    lineHeight: verticalScale(44),
    fontSize: moderateScale(36),
  },
  displayMedium: {
    fontFamily: 'Roboto',
    letterSpacing: 0,
    fontWeight: '400',
    lineHeight: verticalScale(32),
    fontSize: moderateScale(24),
  },
  displaySmall: {
    fontFamily: 'Roboto',
    letterSpacing: 0,
    fontWeight: '400',
    lineHeight: verticalScale(20),
    fontSize: moderateScale(14),
  },
  headlineLarge: {
    fontFamily: 'Roboto',
    letterSpacing: 0,
    fontWeight: '500',
    lineHeight: verticalScale(20),
    fontSize: moderateScale(14),
  },
  headlineMedium: {
    fontFamily: 'Roboto',
    letterSpacing: 0,
    fontWeight: '400',
    lineHeight: verticalScale(16),
    fontSize: moderateScale(12),
  },
  headlineSmall: {
    fontFamily: 'Roboto',
    letterSpacing: 0,
    fontWeight: '400',
    lineHeight: verticalScale(16),
    fontSize: moderateScale(12),
  },
  bodySmall: {
    fontFamily: 'Roboto',
    letterSpacing: 0,
    fontWeight: '400',
    lineHeight: verticalScale(16),
    fontSize: moderateScale(12),
  },
  default: {
    fontFamily: 'Roboto',
    letterSpacing: 0,
    fontWeight: '400',
  },
};

// config Arabic font
const m3dArabicType = configureFonts({
  config: {
    fontFamily: 'Cairo',
    letterSpacing: 0,
  },
});

//Export the fonts
export const fontsMap: Record<LanguageWithFonts, MD3Typescale> = {
  ltr: ltrFonts,
  rtl: m3dArabicType,
};
