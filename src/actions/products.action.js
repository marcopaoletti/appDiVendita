import { PRODUCT_LIST } from 'actions/types';
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
