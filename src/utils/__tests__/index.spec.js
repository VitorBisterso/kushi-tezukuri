import Utils from '../index'

import products from '../../__mocks__/products.json'

describe('ConvertPriceToBrSyntax function', () => {
  const prices = [
    [6, 'R$ 6,00'],
    [5.5, 'R$ 5,50'],
    [10, 'R$ 10,00'],
    [12.5, 'R$ 12,50'],
  ]

  test.each(
    prices
  )(
    'should convert a number to a string with brazillian price syntax',
    (price, expectedString) =>
      expect(Utils.convertPriceToBrSyntax(price)).toBe(expectedString)
  )
})

describe('getTypesOfProduct function', () => {
  it('should get all product types and their correct amount', () => {
    const expectedArray = [
      { typeOfProduct: 'mask', amount: 3 },
      { typeOfProduct: 'carpet', amount: 2 },
    ]

    expect(expectedArray).toStrictEqual(Utils.getTypesOfProduct(products))
  })
})
