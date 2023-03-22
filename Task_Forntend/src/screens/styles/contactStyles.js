/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES, SCALE} from '../../constants';

const styles = StyleSheet.create({
  mainContainer: {
    height: SIZES.height,
    backgroundColor: COLORS.white,
  },
  headContainer: {
    width: SIZES.s400,
    height: SCALE(220),
    marginTop: SIZES.s24,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleContainer: {
    width: SCALE(250),
  },
  title: {
    ...FONTS.bold28,
    color: COLORS.primary,
  },
  subTitle: {
    ...FONTS.regular12,
    color: COLORS.gray,
  },
  socialContainer: {
    flexDirection: 'row',
    marginTop: SIZES.s18,
  },
  socialIcons: {
    color: COLORS.gray,
    marginRight: SIZES.m14,
  },
  contactImage: {
    width: SCALE(150),
    height: SCALE(150),
    alignSelf: 'flex-end',
  },
  formContainer: {
    width: SIZES.s400,
    marginTop: SIZES.s24,
    marginBottom: SCALE(100),
    alignSelf: 'center',
    backgroundColor: COLORS.white,
    borderRadius: SIZES.r20,
    elevation: 1,
    shadowColor: COLORS.primary,
    borderWidth: SCALE(1),
    borderColor: COLORS.primary5,
    paddingVertical: SIZES.s24,
  },
  textInput: {
    marginBottom: SIZES.m14,
    alignSelf: 'center',
  },
  inputContainer: {
    height: SCALE(100),
  },
  button: {
    position: 'absolute',
    bottom: SIZES.s18,
    alignSelf: 'center',
  },
  buttonText: {
    ...FONTS.medium16,
    color: COLORS.white,
  },
  loaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
