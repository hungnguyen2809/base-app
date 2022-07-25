import DeviceInfo from 'react-native-device-info';
import {
  deviceInch,
  fontScale,
  hasNotch,
  height,
  isAndroid,
  isIOS,
  isSmallDevice,
  isTablet,
  scale,
  width,
} from 'react-native-utils-scale';

export class DeviceUtils {
  public static deviceInch = deviceInch;
  public static hasNotch = hasNotch;
  public static isAndroid = isAndroid;
  public static isIOS = isIOS;
  public static isSmallDevice = isSmallDevice;
  public static isTablet = isTablet;
  public static width = width;
  public static height = height;

  public static appVersion = DeviceInfo.getVersion();
  public static deviceId = DeviceInfo.getDeviceId();
  public static uniqueId = DeviceInfo.getUniqueId();

  public static fontScale(size: number) {
    return fontScale(size);
  }

  public static scale(size: number) {
    return scale(size);
  }
}
