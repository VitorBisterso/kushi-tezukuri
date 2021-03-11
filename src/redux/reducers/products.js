import productsActionsTypes from '../constants/products'

export const INITIAL_STATE = {
  isLoading: false,
  allProducts: [],
  filteredProducts: [],
  typesOfProduct: [],
  cart: [],
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
    case productsActionsTypes.ADD_PRODUCT_TO_CART: {
      const { product: newProduct, amount } = action.payload

      const productInCartIndex = state.cart.findIndex(
        product => product.id === newProduct.id
      )
      const newCart = [...state.cart]

      if (productInCartIndex !== -1) {
        newCart[productInCartIndex].amount += amount
      } else {
        newCart.push({ ...newProduct, amount })
      }

      return {
        ...state,
        cart: newCart,
      }
    }
    case productsActionsTypes.REMOVE_PRODUCT_FROM_CART:
      return {
        ...state,
        cart: [...state.cart.filter(product => product.id !== action.payload)],
      }
    default:
      return state
  }
}

export default productsReducer
