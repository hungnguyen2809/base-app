import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { useAppDispatch } from 'src/app/hooks';
import { actionAuthLogout } from 'src/redux/auth/actions';
import { Colors } from 'src/utils/colors';

const HomeScreen: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(actionAuthLogout());
  };

  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>

      <Button mode="outlined" color={Colors.violet} onPress={handleLogout}>
        Đăng xuất
      </Button>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
