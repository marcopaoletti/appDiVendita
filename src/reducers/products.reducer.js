import { PRODUCT_LIST, ADD_PRODUCT } from 'actions/types';
import { INITIAL_STATE } from 'data/products.data';

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case PRODUCT_LIST:
      return { ...state, list: payload };
    case ADD_PRODUCT:
      return { ...state, list: [...state.list, payload] };
    default:
      return state;
  }
};
