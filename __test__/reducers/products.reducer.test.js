import reducer from 'reducers/products.reducer';
import { PRODUCT_LIST } from 'actions/types';
import { INITIAL_STATE } from 'data/products.data';

describe('products reducer', () => {

  const product = { name: 'Super Prodotto', price: 11.45, img: 'https://superimmagine.com', onPress: () => null };
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should handle PRODUCT_LIST', () => {
    expect(reducer(undefined, {
      type: PRODUCT_LIST,
      payload: [product],
    })).toEqual({
      list: [product],
    });
  });
});
