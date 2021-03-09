import productActionsTypes from '../constants/products'

const productsActions = {
  fetchAllProductsRequestAction: () => ({
    type: productActionsTypes.FETCH_ALL_PRODUCTS_REQUEST,
  }),
  fetchAllProductsFailedAction: () => ({
    type: productActionsTypes.FETCH_ALL_PRODUCTS_FAILED,
  }),
  fetchAllProductsSuccessAction: products => ({
    type: productActionsTypes.FETCH_ALL_PRODUCTS_SUCCESS,
    payload: products,
  }),
}

export default productsActions
