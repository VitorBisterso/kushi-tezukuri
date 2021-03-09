import productsActionsTypes from '../constants/products'

const productsActions = {
  fetchAllProductsRequestAction: () => ({
    type: productsActionsTypes.FETCH_ALL_PRODUCTS_REQUEST,
  }),
  fetchAllProductsFailedAction: () => ({
    type: productsActionsTypes.FETCH_ALL_PRODUCTS_FAILED,
  }),
  fetchAllProductsSuccessAction: products => ({
    type: productsActionsTypes.FETCH_ALL_PRODUCTS_SUCCESS,
    payload: products,
  }),
}

export default productsActions
