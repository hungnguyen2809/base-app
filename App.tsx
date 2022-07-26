import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as StoreProvider } from 'react-redux';
import { store } from 'src/app/store';
import AppContainer from 'src/navigation';
import { NotificationProvider } from 'src/notifications';

const App: React.FC = () => {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <SafeAreaProvider>
          <AppContainer />
        </SafeAreaProvider>
      </PaperProvider>
      <NotificationProvider />
    </StoreProvider>
  );
};

export default App;
