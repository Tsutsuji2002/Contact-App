import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const COLORS = {
  primary: '#4a90e2',
  secondary: '#f39c12',
  background: '#f0f0f0',
  text: '#333333',
  textLight: '#ffffff',
  accent: '#e74c3c',
  grey: '#7f8c8d',
  lightGrey: '#bdc3c7',
};

export const SIZES = {
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  h1: { fontFamily: 'RobotoCondensed-BlackCustom', fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: 'RobotoCondensed-Bold', fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: 'RobotoCondensed-Bold', fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: 'RobotoCondensed-Bold', fontSize: SIZES.h4, lineHeight: 22 },
  body1: { fontFamily: 'RobotoCondensed-Regular', fontSize: SIZES.body1, lineHeight: 36 },
  body2: { fontFamily: 'RobotoCondensed-Regular', fontSize: SIZES.body2, lineHeight: 30 },
  body3: { fontFamily: 'RobotoCondensed-Regular', fontSize: SIZES.body3, lineHeight: 22 },
  body4: { fontFamily: 'RobotoCondensed-Regular', fontSize: SIZES.body4, lineHeight: 22 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;