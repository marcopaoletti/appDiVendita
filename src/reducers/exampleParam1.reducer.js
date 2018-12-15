import { EXAMPLE_PARAM1 } from 'actions/types';
import { INITIAL_STATE } from 'data/exampleParam1.data';

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case EXAMPLE_PARAM1:
      return { ...state, param1: payload };
    default:
      return state;
  }
};
