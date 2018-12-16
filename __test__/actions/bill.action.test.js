import { addProductToBill, resetBill } from 'actions';
import { ADD_PRODUCT_TO_BILL, RESET_BILL } from 'actions/types';


describe('actions to handle the bill', () => {
  it('should create an action to add a product to the bill', () => {
    const newProduct = { name: 'Super Prodotto', price: 11.45, img: 'https://superimmagine.com', onPress: () => null };
    const expectedAction = {
      type: ADD_PRODUCT_TO_BILL,
      payload: newProduct,
    };
    expect(addProductToBill(newProduct)).toEqual(expectedAction);
  });

  it('should create an action to reset the bill list', () => {
    const expectedAction = { type: RESET_BILL };
    expect(resetBill()).toEqual(expectedAction);
  });
});
