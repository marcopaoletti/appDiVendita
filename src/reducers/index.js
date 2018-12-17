import { combineReducers } from 'redux';
import products from 'reducers/products.reducer';
import bill from 'reducers/bill.reducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const billPersistConfig = {
  key: 'bill',
  storage,
  whitelist: ['list'],
};


export default combineReducers({
  products,
  bill: persistReducer(billPersistConfig, bill),
});
