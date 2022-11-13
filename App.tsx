import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {StrictMode} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {initializeMMKVFlipper} from 'react-native-mmkv-flipper-plugin';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Routes from './src/navigation/Routes';
import {storage} from './src/utils/storage';
import {PersistGate} from 'redux-persist/integration/react';
import storeProvider from './src/redux/store/store';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const isDarkMode = useColorScheme() === 'dark';
  if (__DEV__) {
    initializeMMKVFlipper({default: storage});
  }

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <StrictMode>
        <Provider store={storeProvider().store}>
          <PersistGate loading={null} persistor={storeProvider().persistor}>
            <NavigationContainer>
              <SafeAreaView style={styles.backgroundStyle}>
                <StatusBar
                  barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                  backgroundColor={'white'}
                />
                <Routes />
              </SafeAreaView>
            </NavigationContainer>
          </PersistGate>
        </Provider>
      </StrictMode>
    </>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
  },
});

export default App;
