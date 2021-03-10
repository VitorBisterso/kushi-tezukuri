import productsActionsTypes from '../constants/products'

export const INITIAL_STATE = {
  isLoading: false,
  allProducts: [],
  filteredProducts: [],
  typesOfProduct: [],
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
        allProducts: action.payload.allProducts,
        typesOfProduct: action.payload.typesOfProduct,
      }
    case productsActionsTypes.SET_CURRENT_FILTERED_PRODUCTS:
      return {
        ...state,
        filteredProducts: action.payload,
      }
    default:
      return state
  }
}

export default productsReducer
