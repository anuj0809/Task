/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {SIZES, COLORS, FONTS, SCALE} from '../constants';

const Input = ({
  label,
  style,
  value,
  onChangeText,
  multipleLine,
  keyboardType,
  inputContainerStyle,
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <View style={[styles.mainContainer, style]}>
      <Text
        style={[styles.label, {color: focused ? COLORS.primary : COLORS.gray}]}>
        {label}
      </Text>
      <TextInput
        autoCorrect={false}
        value={value}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChangeText={onChangeText}
        showSoftInputOnFocus={true}
        cursorColor={COLORS.primary}
        selectionColor={COLORS.primary5}
        underlineColorAndroid="transparent"
        keyboardType={keyboardType}
        multiline={multipleLine}
        style={[
          styles.defaultInput,
          inputContainerStyle,
          {
            borderColor: focused ? COLORS.primary : COLORS.primary5,
            textAlignVertical: multipleLine ? 'top' : 'center',
          },
        ]}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    paddingHorizontal: SIZES.m14,
  },
  label: {
    ...FONTS.medium14,
    marginBottom: SIZES.m4,
  },
  defaultInput: {
    flex: 1,
    ...FONTS.regular14,
    letterSpacing: 0.1,
    minHeight: SIZES.s60,
    color: COLORS.black,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: SIZES.r4,
    borderWidth: SCALE(1),
    paddingHorizontal: SIZES.m14,
    backgroundColor: COLORS.primary5,
  },
});
