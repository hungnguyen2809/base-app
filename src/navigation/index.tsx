import { NavigationContainer } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React, { useState } from 'react';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { appLotties } from 'src/assets';
import { actionAuthSetToken } from 'src/redux/auth/actions';
import { selectAuthToken } from 'src/redux/auth/selectors';
import { getDataStorage, STORAGE_KEY } from 'src/utils/storage';
import MainStack from './MainStack';
import OnboardingStack from './OnboardingStack';

const LottieOnboarding: React.FC = () => {
  return <LottieView source={appLotties.truck} autoPlay loop />;
};

const MainNavigation: React.FC = () => {
  const token = useAppSelector(selectAuthToken);

  return token ? <MainStack /> : <OnboardingStack />;
};

const AppContainer: React.FC = () => {
  const dispatch = useAppDispatch();

  const [showLottie, setShowLottie] = useState<boolean>(true);

  const onReady = async () => {
    const userInfo = await getDataStorage(STORAGE_KEY.ACCESS_TOKEN);
    if (userInfo) {
      dispatch(actionAuthSetToken(userInfo));
    }

    setTimeout(() => {
      setShowLottie(false);
    }, 3000);
  };

  return (
    <NavigationContainer onReady={onReady}>
      {showLottie ? <LottieOnboarding /> : <MainNavigation />}
    </NavigationContainer>
  );
};

export default gestureHandlerRootHOC(AppContainer);
