import { ADD_PRODUCT_TO_BILL, RESET_BILL } from 'actions/types';

export const addProductToBill = product => ({
  type: ADD_PRODUCT_TO_BILL,
  payload: product,
});

export const resetBill = () => ({
  type: RESET_BILL,
});
