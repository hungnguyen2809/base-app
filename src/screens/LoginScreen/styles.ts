import { StyleSheet } from 'react-native';
import { Colors } from 'src/utils/colors';
import { DeviceUtils } from 'src/utils/deviceUtils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    flex: 2,
    justifyContent: 'center',
  },
  titleLogo: {
    // fontFamily: Fonts.BonheurRoyale,
    textAlign: 'center',
    fontSize: DeviceUtils.fontScale(30),
  },
  content: {
    flex: 6,
    marginHorizontal: DeviceUtils.scale(25),
  },
  contentInput: {
    marginTop: DeviceUtils.scale(16),
    fontSize: DeviceUtils.fontScale(18),
    // fontFamily: Fonts.OpenSans,
  },
  warpAction: {
    flex: 1,
    marginTop: DeviceUtils.scale(20),
  },
  btnLogin: {
    backgroundColor: Colors.dodgerblue,
    paddingHorizontal: DeviceUtils.scale(10),
    paddingVertical: DeviceUtils.scale(7),
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loginTitle: {
    // fontFamily: Fonts.OpenSans,
    color: Colors.white,
    textAlign: 'center',
    fontSize: DeviceUtils.fontScale(16),
    lineHeight: DeviceUtils.scale(24),
  },
  textHaveAccount: {
    // fontFamily: Fonts.OpenSans,
    textAlign: 'center',
    marginTop: DeviceUtils.scale(10),
    fontSize: DeviceUtils.fontScale(13),
  },
  btnCreate: {
    alignItems: 'center',
    marginTop: DeviceUtils.scale(10),
  },
  textCreate: {
    // fontFamily: Fonts.OpenSans,
    textDecorationLine: 'underline',
    fontSize: DeviceUtils.fontScale(13),
    lineHeight: DeviceUtils.scale(18),
    color: Colors.dodgerblue,
  },
  btnLoginOther: {
    backgroundColor: Colors.orangered,
    marginTop: DeviceUtils.scale(15),
    paddingHorizontal: DeviceUtils.scale(10),
    paddingVertical: DeviceUtils.scale(7),
    borderRadius: 5,
  },
});
