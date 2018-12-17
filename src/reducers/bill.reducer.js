import { ADD_PRODUCT_TO_BILL, RESET_BILL, REMOVE_PRODUCT } from 'actions/types';
import { INITIAL_STATE } from 'data/bill.data';

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT_TO_BILL:
      return { ...state, list: [...state.list, payload] };
    case RESET_BILL:
      return { ...INITIAL_STATE, list: [] };
    case REMOVE_PRODUCT:
      return { ...state, list: [...state.list.slice(0, payload).concat(...state.list.slice(payload + 1))] };
    default:
      return state;
  }
};
