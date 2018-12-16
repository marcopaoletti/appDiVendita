import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { getProducts } from 'actions';
import { PRODUCT_LIST } from 'actions/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);

describe('actions to handle products', () => {
  it('should get a list of products', () => {
    const product = { name: 'Super Prodotto', price: 11.45, img: 'https://superimmagine.com'};
    const store = mockStore();
    mock.onGet('https://api.myjson.com/bins/nrch8').reply(200, { data: [product] });
    const expectedAction = [{
      type: PRODUCT_LIST,
      payload: { data: [product] },
    }];
    return store.dispatch(getProducts()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
