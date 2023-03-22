/* eslint-disable prettier/prettier */
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 428;
const guidelineBaseHeight = 926;
export const SCALE = size => (width / guidelineBaseWidth) * size;

export const COLORS = {
  primary: 'rgba(113, 109, 248, 1)',
  primary5: 'rgba(246, 246, 255, 1)',
  red: 'rgba(240, 52, 52, 1)',
  green: 'rgba(100, 220, 100, 1)',
  white: 'rgba(255, 255, 255, 1)',
  black: 'rgba(55, 71, 79, 1)',
  gray: 'rgba(147, 153, 156, 1)',
  shadowBlack: 'rgba(224, 224, 224, 1)',
};

export const SIZES = {
  // app dimensions
  width,
  height,

  // radius
  r4: SCALE(4),
  r10: SCALE(10),
  r20: SCALE(20),

  // regular width and height
  s400: SCALE(400),
  s372: SCALE(372),
  s70: SCALE(70),
  s60: SCALE(60),
  s50: SCALE(50),
  s40: SCALE(40),
  s32: SCALE(32),
  s24: SCALE(24),
  s18: SCALE(18),

  // paddings and margins
  m4: SCALE(4),
  m10: SCALE(10),
  m14: SCALE(14),
};

export const FONTS = {
  bold28: {fontFamily: 'Poppins-Bold', fontSize: SCALE(28)},
  // SemiBold
  semibold24: {fontFamily: 'Poppins-SemiBold', fontSize: SCALE(24)},
  semibold20: {fontFamily: 'Poppins-SemiBold', fontSize: SCALE(20)},
  semibold18: {fontFamily: 'Poppins-SemiBold', fontSize: SCALE(18)},
  semibold16: {fontFamily: 'Poppins-SemiBold', fontSize: SCALE(16)},

  // Medium
  medium10: {fontFamily: 'Poppins-Medium', fontSize: SCALE(10)},
  medium12: {fontFamily: 'Poppins-Medium', fontSize: SCALE(12)},
  medium14: {fontFamily: 'Poppins-Medium', fontSize: SCALE(14)},
  medium16: {fontFamily: 'Poppins-Medium', fontSize: SCALE(16)},

  // Regular
  regular8: {fontFamily: 'Poppins-Regular', fontSize: SCALE(8)},
  regular10: {fontFamily: 'Poppins-Regular', fontSize: SCALE(10)},
  regular12: {fontFamily: 'Poppins-Regular', fontSize: SCALE(12)},
  regular14: {fontFamily: 'Poppins-Regular', fontSize: SCALE(14)},
  regular18: {fontFamily: 'Poppins-Regular', fontSize: SCALE(18)},
};

export default {COLORS, SIZES, FONTS, SCALE};
