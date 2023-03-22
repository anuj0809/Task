/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SCALE, SIZES} from '../constants';
import {useSelector} from 'react-redux';

const Alert = () => {
  const contact = useSelector(state => state.contact);

  return contact.alert !== '' ? (
    <View style={styles.mainContainer}>
      <Text
        style={[
          styles.text,
          {color: contact.success ? COLORS.green : COLORS.red},
        ]}>
        {contact.alert}
      </Text>
    </View>
  ) : (
    <></>
  );
};

export default Alert;

const styles = StyleSheet.create({
  mainContainer: {
    position: 'absolute',
    bottom: SCALE(110),
    paddingHorizontal: SIZES.s24,
    paddingVertical: SIZES.m4,
    backgroundColor: COLORS.white,
    alignSelf: 'center',
    elevation: 4,
    shadowColor: COLORS.black,
    borderRadius: SIZES.r10,
  },
  text: {
    ...FONTS.regular14,
  },
});
