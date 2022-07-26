import messaging from '@react-native-firebase/messaging';
import React from 'react';
import { AppRegistry } from 'react-native';
import 'react-native-gesture-handler';
import App from './App';
import { name as appName } from './app.json';

messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  // console.log('Message handled in the background!', remoteMessage);
});

// App has been launched in the background by iOS, ignore
function headlessCheck({ isHeadless }) {
  return isHeadless ? null : <App />;
}

AppRegistry.registerComponent(appName, () => headlessCheck);
