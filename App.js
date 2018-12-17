import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import ProductsList from 'screens/productList.screen';
import AddProduct from 'screens/addProduct.screen';
import { store, persistor } from './src/store';

const App = () => {
  const Navigator = createSwitchNavigator({
    init: {
      screen: createStackNavigator(
        {
          ProductsList: { screen: ProductsList },
          AddProduct: { screen: AddProduct },
        },
        {
          headerMode: 'none',
          navigationOptions: {
            headerVisible: false,
          },
        },
      ),
    },
  });

  return (
    <Provider store={store} persistor={persistor}>
      <Navigator />
    </Provider>
  );
};

export default App;
