import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React, { useEffect, useState } from 'react';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { useAppSelector } from 'src/app/hooks';
import { selectAuthToken } from 'src/redux/auth/selectors';
import MainStack from './MainStack';
import OnboardingStack from './OnboardingStack';

const navigationRef = React.createRef<NavigationContainerRef<any>>();
export const navigation = { ...navigationRef.current } as NavigationContainerRef<any>;

const AppContainer: React.FC = () => {
  const isLogin = useAppSelector(selectAuthToken);

  const [showLottie, setShowLottie] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLottie(false);
    }, 3000);
  }, []);

  if (showLottie) {
    return <LottieView source={require('src/assets/lotties/truck.json')} autoPlay loop />;
  }

  return (
    <NavigationContainer ref={navigationRef}>
      {isLogin ? <MainStack /> : <OnboardingStack />}
    </NavigationContainer>
  );
};

export default gestureHandlerRootHOC(AppContainer);
