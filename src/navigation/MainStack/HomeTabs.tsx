import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from 'src/screens/HomeScreen';
import ProfileScreen from 'src/screens/ProfileScreen';
import SettingScreen from 'src/screens/SettingScreen';
import { screenName } from '../config';

interface TabBarIcon {
  color: string;
  focused: boolean;
  size: number;
}

const IconTabHome = ({ color, focused, size }: TabBarIcon) => {
  return <Ionicons name={focused ? 'home' : 'home-outline'} color={color} size={size} />;
};

const IconTabProfile = ({ color, focused, size }: TabBarIcon) => {
  return <Ionicons name={focused ? 'person' : 'person-outline'} color={color} size={size} />;
};

const IconTabSeting = ({ color, focused, size }: TabBarIcon) => {
  return <Ionicons name={focused ? 'settings' : 'settings-outline'} color={color} size={size} />;
};

const Tabs = createBottomTabNavigator();

const HomeTabs: React.FC = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#f0edf6',
        tabBarInactiveTintColor: '#3e2465',
        tabBarStyle: { backgroundColor: '#694fad' },
      }}
    >
      <Tabs.Screen
        name={screenName.HOME_SCREEN}
        component={HomeScreen}
        options={{ title: 'Trang chủ', tabBarIcon: IconTabHome }}
      />
      <Tabs.Screen
        name={screenName.PROFILE_SCREEN}
        component={ProfileScreen}
        options={{ title: 'Tài khoản', tabBarIcon: IconTabProfile }}
      />
      <Tabs.Screen
        name={screenName.SETTING_SCREEN}
        component={SettingScreen}
        options={{ title: 'Cài đặt', tabBarIcon: IconTabSeting }}
      />
    </Tabs.Navigator>
  );
};

export default HomeTabs;
