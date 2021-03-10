import productsActionsTypes from '../constants/products'

import Utils from '../../utils'

const productsActions = {
  fetchAllProductsRequestAction: () => ({
    type: productsActionsTypes.FETCH_ALL_PRODUCTS_REQUEST,
  }),
  fetchAllProductsFailedAction: () => ({
    type: productsActionsTypes.FETCH_ALL_PRODUCTS_FAILED,
  }),
  fetchAllProductsSuccessAction: products => {
    const typesOfProduct = Utils.getTypesOfProduct(products)
    return {
      type: productsActionsTypes.FETCH_ALL_PRODUCTS_SUCCESS,
      payload: {
        products,
        typesOfProduct,
      },
    }
  },
}

export default productsActions
