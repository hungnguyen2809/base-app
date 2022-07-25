import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

export interface TextAppProps extends TextProps {
  children: React.ReactNode;
}

const _TextApp = ({ children, style, ...propsRest }: TextAppProps, ref: React.LegacyRef<Text>) => {
  return (
    <Text ref={ref} style={[styles.text, style]} allowFontScaling={false} {...propsRest}>
      {children}
    </Text>
  );
};

export const TextApp = React.forwardRef(_TextApp);

const styles = StyleSheet.create({
  text: {
    // fontFamily: '',
  },
});
