import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {StrictMode} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {initializeMMKVFlipper} from 'react-native-mmkv-flipper-plugin';
import {Provider} from 'react-redux';

import {default as theme} from './src/themes/custom-theme.json';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Routes from './src/navigation/Routes';
import {storage} from './src/utils/storage';
import {PersistGate} from 'redux-persist/integration/react';
import storeProvider from './src/redux/store/store';
import Temp from './src/navigation/Temp';

const App = () => {
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
        <IconRegistry icons={EvaIconsPack} />
        <Provider store={storeProvider().store}>
          <PersistGate loading={null} persistor={storeProvider().persistor}>
            <ApplicationProvider {...eva} theme={{...eva.dark, ...theme}}>
              <NavigationContainer>
                <SafeAreaView style={styles.backgroundStyle}>
                  <StatusBar
                    barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                    backgroundColor={'white'}
                  />
                  <Temp />
                </SafeAreaView>
              </NavigationContainer>
            </ApplicationProvider>
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
