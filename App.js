import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import ProductsList from 'screens/productList.screen';
import { store, persistor } from './src/store';

const App = () => {
  const Navigator = createSwitchNavigator({
    productList: { screen: ProductsList },
  });

  return (
    <Provider store={store} persistor={persistor}>
      <Navigator />
    </Provider>
  );
};

export default App;
