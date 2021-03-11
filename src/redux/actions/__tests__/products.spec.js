import productsActions from '../products'
import productsActionsTypes from '../../constants/products'

describe('Products actions', () => {
  describe('Fetch all products', () => {
    it('should create an action to fetch all products', () => {
      const expectedAction = {
        type: productsActionsTypes.FETCH_ALL_PRODUCTS_REQUEST,
      }
      expect(productsActions.fetchAllProductsRequestAction()).toEqual(
        expectedAction
      )
    })

    it('should create an action due to failing while fetching all products', () => {
      const expectedAction = {
        type: productsActionsTypes.FETCH_ALL_PRODUCTS_FAILED,
      }
      expect(productsActions.fetchAllProductsFailedAction()).toEqual(
        expectedAction
      )
    })

    it('should create an action due to fetching all products successfully', () => {
      const allProducts = [
        {
          id: '1',
          name: 'Máscara de bolinhas vermelha e detalhes em cinza',
          price: 6.5,
          typeOfProduct: 'mask',
          typeOfCut: 'F',
        },
      ]
      const typesOfProduct = [{ typeOfProduct: 'mask', amount: 1 }]

      const expectedAction = {
        type: productsActionsTypes.FETCH_ALL_PRODUCTS_SUCCESS,
        payload: { allProducts, typesOfProduct },
      }
      expect(
        productsActions.fetchAllProductsSuccessAction(allProducts)
      ).toEqual(expectedAction)
    })
  })

  it('should create an action due to filtering products', () => {
    const filteredProducts = [
      {
        id: '1',
        name: 'Máscara de bolinhas vermelha e detalhes em cinza',
        price: 6.5,
        typeOfProduct: 'mask',
        typeOfCut: 'F',
      },
    ]

    const expectedAction = {
      type: productsActionsTypes.SET_CURRENT_FILTERED_PRODUCTS,
      payload: filteredProducts,
    }
    expect(
      productsActions.setCurrentFilteredProducts(filteredProducts)
    ).toEqual(expectedAction)
  })

  it('should create an action due to adding a product to the cart', () => {
    const amount = 2
    const product = {
      id: '1',
      name: 'Máscara de bolinhas vermelha e detalhes em cinza',
      price: 6.5,
      typeOfProduct: 'mask',
      typeOfCut: 'F',
      amount,
    }

    const expectedAction = {
      type: productsActionsTypes.ADD_PRODUCT_TO_CART,
      payload: { product, amount },
    }
    expect(productsActions.addProductToCart(product, amount)).toEqual(
      expectedAction
    )
  })

  it('should create an action due to removing a product from the cart', () => {
    const productId = '1'

    const expectedAction = {
      type: productsActionsTypes.REMOVE_PRODUCT_FROM_CART,
      payload: productId,
    }
    expect(productsActions.removeProductFromCart(productId)).toEqual(
      expectedAction
    )
  })
})
