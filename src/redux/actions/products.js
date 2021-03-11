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
  addProductToCart: (product, amount) => ({
    type: productsActionsTypes.ADD_PRODUCT_TO_CART,
    payload: { product, amount },
  }),
  removeProductFromCart: productId => ({
    type: productsActionsTypes.REMOVE_PRODUCT_FROM_CART,
    payload: productId,
  }),
}

export default productsActions
