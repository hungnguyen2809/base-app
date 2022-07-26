import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleProp,
  TextStyle,
  StyleSheet,
} from 'react-native';
import { Colors } from 'src/utils/colors';
import { DeviceUtils } from 'src/utils/deviceUtils';
import { TextBase } from '../TextBase';

export interface ButtonBaseProp extends TouchableOpacityProps {
  children?: React.ReactNode;
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
}

const _ButtonBase = (
  { children, titleStyle, style, title, activeOpacity = 0.8, ...restProps }: ButtonBaseProp,
  ref: React.LegacyRef<TouchableOpacity>,
) => {
  return (
    <TouchableOpacity
      ref={ref}
      style={[styles.button, style]}
      activeOpacity={activeOpacity}
      {...restProps}
    >
      {children ? (
        children
      ) : (
        <TextBase style={[styles.title, titleStyle]}>{title || 'title'}</TextBase>
      )}
    </TouchableOpacity>
  );
};

export const ButtonBase = React.forwardRef(_ButtonBase);

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.dodgerblue,
    paddingVertical: DeviceUtils.scale(8),
  },
  title: {
    textAlign: 'center',
    color: Colors.white,
    fontSize: DeviceUtils.fontScale(14),
  },
});
