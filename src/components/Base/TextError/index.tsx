import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Colors } from 'src/utils/colors';
import { DeviceUtils } from 'src/utils/deviceUtils';

interface TextErrorProps {
  message?: string;
}

const TextError: React.FC<TextErrorProps> = ({ message }) => {
  return message ? (
    <Text allowFontScaling={false} style={styles.textError}>
      {message}
    </Text>
  ) : (
    <></>
  );
};

export default TextError;

const styles = StyleSheet.create({
  textError: {
    color: Colors.red,
    fontSize: DeviceUtils.fontScale(14),
    lineHeight: DeviceUtils.fontScale(24),
  },
});
