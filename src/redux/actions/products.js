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
        allProducts: products,
        typesOfProduct,
      },
    }
  },
  setCurrentFilteredProducts: filteredProducts => ({
    type: productsActionsTypes.SET_CURRENT_FILTERED_PRODUCTS,
    payload: filteredProducts,
  }),
}

export default productsActions
