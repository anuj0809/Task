import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {store} from './src/store/store';
import {Provider} from 'react-redux';
import ContactUs from './src/screens/ContactUs';
import {COLORS} from './src/constants';
import {Alert} from './src/components';

function App() {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <StatusBar
          backgroundColor={COLORS.white}
          barStyle={'dark-content'}
          animated={true}
          showHideTransition={'fade'}
        />
        <ContactUs />
        <Alert />
      </SafeAreaView>
    </Provider>
  );
}

export default App;
