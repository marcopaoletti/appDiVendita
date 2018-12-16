import reducer from 'reducers/bill.reducer';
import { ADD_PRODUCT_TO_BILL, RESET_BILL } from 'actions/types';
import { INITIAL_STATE } from 'data/bill.data';

describe('bill reducer', () => {

  const product = { name: 'Super Prodotto', price: 11.45, img: 'https://superimmagine.com', onPress: () => null };
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should handle ADD_PRODUCT_TO_BILL', () => {
    expect(reducer(undefined, {
      type: ADD_PRODUCT_TO_BILL,
      payload: product,
    })).toEqual({
      list: [product],
    });
  });

  it('should handle RESET_BILL', () => {
    expect(reducer(undefined, {
      type: RESET_BILL,
    })).toEqual({
      list: [],
    });
  });
});
