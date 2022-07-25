import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { Colors } from 'src/utils/colors';
import { DeviceUtils } from 'src/utils/deviceUtils';

export interface TextInputBaseProps extends TextInputProps {
  containerStyles?: StyleProp<ViewStyle>;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  onPressRight?: () => void;
  disabledPressRight?: boolean;
}

const _TextInputApp = (
  {
    iconLeft,
    iconRight,
    containerStyles,
    style,
    onPressRight,
    disabledPressRight,
    ...textInputProp
  }: TextInputBaseProps,
  ref: React.LegacyRef<TextInput>,
) => {
  return (
    <View style={[styles.container, containerStyles]}>
      {iconLeft && iconLeft}
      <TextInput
        allowFontScaling={false}
        ref={ref}
        style={[styles.textInput, style]}
        {...textInputProp}
      />
      {iconRight && (
        <TouchableOpacity activeOpacity={0.8} disabled={disabledPressRight} onPress={onPressRight}>
          {iconRight}
        </TouchableOpacity>
      )}
    </View>
  );
};

export const TextInputApp = React.forwardRef(_TextInputApp);

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 3,
    borderColor: Colors.darkgray,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: DeviceUtils.scale(5),
    paddingHorizontal: DeviceUtils.scale(5),
  },
  textInput: {
    flex: 1,
    // fontFamily: Fonts.OpenSans,
    paddingVertical: 0,
    fontSize: DeviceUtils.fontScale(13),
    paddingHorizontal: DeviceUtils.scale(5),
  },
});
