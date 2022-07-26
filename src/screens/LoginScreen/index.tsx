/* eslint-disable react-native/no-inline-styles */
import { yupResolver } from '@hookform/resolvers/yup';
import { unwrapResult } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Snackbar, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppDispatch } from 'src/app/hooks';
import TextError from 'src/components/Base/TextError';
import { actionAuthLogin } from 'src/redux/auth/actions';
import { Colors } from 'src/utils/colors';
import { getMessageError } from 'src/utils/common';
import { setDataStorage, STORAGE_KEY } from 'src/utils/storage';
import * as yup from 'yup';
import { styles } from './styles';

interface LoginForm {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .required('Vui lòng nhập địa chỉ e-mail.')
    .email('E-mail không đúng định dạng.')
    .typeError('Vui lòng nhập địa chỉ e-mail.'),
  password: yup
    .string()
    .required('Vui lòng nhập mật khẩu.')
    .min(6, 'Mật khẩu tối thiểu 6 ký tự.')
    .typeError('Vui lòng nhập mật khẩu.'),
});

const LoginScreen: React.FC = () => {
  // const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const dispatch = useAppDispatch();

  const [showPass, setShowPass] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [errorSnack, setErrorSnack] = useState<SnackbarAction>({ status: false, message: '' });

  const {
    control,
    handleSubmit,
    reset: resetForm,
  } = useForm<LoginForm>({
    defaultValues: { email: '', password: '' },
    resolver: yupResolver(schema),
  });

  const onDismissSnackbar = () => {
    setErrorSnack({ status: false, message: '' });
  };

  const onShowPass = () => {
    setShowPass(!showPass);
  };

  const onSubmitLogin = async (data: LoginForm) => {
    try {
      setLoading(true);
      const response = await dispatch(actionAuthLogin(data));
      const fakeToken = unwrapResult(response);
      setLoading(false);

      await setDataStorage(STORAGE_KEY.ACCESS_TOKEN, fakeToken);
    } catch (error) {
      setLoading(false);
      setErrorSnack({ status: true, message: getMessageError(error) });
    }
  };

  const onNavigateRegisterScreen = () => {
    resetForm({ email: '', password: '' });
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.logo}>
          <Text style={styles.titleLogo} allowFontScaling={false}>
            Base App
          </Text>
        </View>
        <View style={styles.content}>
          <Controller
            control={control}
            name="email"
            render={({ field: { value, onChange, onBlur, ref }, formState: { errors } }) => (
              <>
                <TextInput
                  ref={ref}
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  mode="outlined"
                  style={styles.contentInput}
                  label={'Email'}
                  keyboardType={'email-address'}
                  maxLength={35}
                  placeholder={'...@examp.com'}
                  left={<TextInput.Icon name="email-outline" color={Colors.dodgerblue} />}
                />
                <TextError message={errors.email?.message} />
              </>
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { value, onChange, onBlur, ref }, formState: { errors } }) => (
              <>
                <TextInput
                  ref={ref}
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  mode="outlined"
                  style={styles.contentInput}
                  maxLength={20}
                  label="Mật khẩu"
                  placeholder={'12345@123...'}
                  secureTextEntry={!showPass}
                  left={<TextInput.Icon name={'lock-outline'} color={Colors.dodgerblue} />}
                  right={
                    showPass ? (
                      <TextInput.Icon onPress={onShowPass} name="eye" color={Colors.dimgrey} />
                    ) : (
                      <TextInput.Icon
                        onPress={onShowPass}
                        name={'eye-off'}
                        color={Colors.dimgrey}
                      />
                    )
                  }
                />
                <TextError message={errors.password?.message} />
              </>
            )}
          />

          <View style={styles.warpAction}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.btnLogin}
              onPress={handleSubmit(onSubmitLogin)}
            >
              {loading && <ActivityIndicator color={Colors.lime} style={{ marginRight: 5 }} />}
              <Text allowFontScaling={false} style={styles.loginTitle}>
                Đăng nhập
              </Text>
            </TouchableOpacity>
            <Text style={styles.textHaveAccount} allowFontScaling={false}>
              Bạn chưa có tài khoản?
            </Text>
            <View style={styles.btnCreate}>
              <TouchableOpacity activeOpacity={0.8} onPress={onNavigateRegisterScreen}>
                <Text allowFontScaling={false} style={styles.textCreate}>
                  Tạo mới tài khoản
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.textHaveAccount} allowFontScaling={false}>
              ----- HOẶC -----
            </Text>
            <TouchableOpacity activeOpacity={0.8} style={styles.btnLoginOther}>
              <Text allowFontScaling={false} style={styles.loginTitle}>
                Tiếp tục với Google
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>

      <Snackbar
        visible={errorSnack.status}
        onDismiss={onDismissSnackbar}
        duration={Snackbar.DURATION_SHORT}
        style={{ backgroundColor: Colors.crimson }}
      >
        {errorSnack.message}
      </Snackbar>
    </SafeAreaView>
  );
};

export default LoginScreen;
