import { combineReducers } from 'redux';
import products from 'reducers/products.reducer';
import bill from 'reducers/bill.reducer';

export default combineReducers({
  products,
  bill
});
