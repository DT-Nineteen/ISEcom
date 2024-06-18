import React from 'react';
import Navigation from './src/navigation/AppNavigation';
import {Provider} from 'react-redux';
import {store} from './src/redux/root/store';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <Navigation />
    </Provider>
  );
};

export default App;
