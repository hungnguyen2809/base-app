import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { defaultOptions } from '../config';
import HomeTabs from './HomeTabs';

const Stack = createNativeStackNavigator();

const MainStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={defaultOptions}>
      <Stack.Group>
        <Stack.Screen name={'HomeTab'} component={HomeTabs} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default MainStack;
