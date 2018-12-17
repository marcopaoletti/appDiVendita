import { PRODUCT_LIST, ADD_PRODUCT } from 'actions/types';
import { apiGetProducts } from 'api';

export const getProducts = () => async (dispatch) => {
  try {
    const products = await apiGetProducts();
    dispatch({
      type: PRODUCT_LIST,
      payload: products.data,
    });
  } catch (e) {
    console.error(e); // todo da aggiungere Sentry
  }
};

export const addProduct = product => ({
  type: ADD_PRODUCT,
  payload: product,
});
