import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import { store, persistor } from './src/store';
import TestScreen from 'screens/test.screen';

const App = () => {
  const ExampleNavigator = createBottomTabNavigator({
    page1: { screen: TestScreen },
  });

  return (
    <Provider store={store} persistor={persistor}>
      <ExampleNavigator />
    </Provider>
  );
};

export default App;
