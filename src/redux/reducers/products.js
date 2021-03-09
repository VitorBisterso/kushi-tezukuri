import productsActionsTypes from '../constants/products'

export const INITIAL_STATE = {
  isLoading: false,
  productsList: [],
  hasError: false,
}

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case productsActionsTypes.FETCH_ALL_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case productsActionsTypes.FETCH_ALL_PRODUCTS_FAILED:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      }
    case productsActionsTypes.FETCH_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        productsList: action.payload,
      }
    default:
      return state
  }
}

export default productsReducer