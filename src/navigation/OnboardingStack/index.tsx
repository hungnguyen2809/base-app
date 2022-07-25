import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from 'src/screens/LoginScreen';
import { defaultOptions, screenName } from '../config';

const Stack = createNativeStackNavigator();

const OnboardingStack = () => {
  return (
    <Stack.Navigator screenOptions={defaultOptions}>
      <Stack.Screen name={screenName.LOGIN_SCREEN} component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default OnboardingStack;
