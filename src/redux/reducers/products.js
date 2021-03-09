import productActionsTypes from '../constants/products'

const INITIAL_STATE = {
  isLoading: false,
  productsList: [],
  hasError: false,
}

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case productActionsTypes.FETCH_ALL_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case productActionsTypes.FETCH_ALL_PRODUCTS_FAILED:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      }
    case productActionsTypes.FETCH_ALL_PRODUCTS_SUCCESS:
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
