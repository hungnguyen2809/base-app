import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

export interface TextBaseProps extends TextProps {
  children: React.ReactNode;
}

const _TextBase = (
  { children, style, ...propsRest }: TextBaseProps,
  ref: React.LegacyRef<Text>,
) => {
  return (
    <Text ref={ref} style={[styles.text, style]} allowFontScaling={false} {...propsRest}>
      {children}
    </Text>
  );
};

export const TextBase = React.forwardRef(_TextBase);

const styles = StyleSheet.create({
  text: {
    // fontFamily: '',
  },
});
