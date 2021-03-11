const convertPriceToBrSyntax = number => {
  const convertedToString = number.toString()
  const indexOfDot = convertedToString.indexOf('.')

  if (indexOfDot !== -1) {
    const cents = convertedToString.slice(
      indexOfDot + 1,
      convertedToString.length
    )

    const integerPart = convertedToString.slice(0, indexOfDot)
    return `R$ ${integerPart},${`${cents}0`}`
  }

  return `R$ ${convertedToString},00`
}

const getTypesOfProduct = products => {
  const types = []
  products.forEach(product => {
    const { typeOfProduct } = product
    const indexOfType = types.findIndex(
      type => type.typeOfProduct === typeOfProduct
    )

    if (indexOfType === -1) {
      types.push({ typeOfProduct, amount: 1 })
    } else {
      types[indexOfType] = {
        ...types[indexOfType],
        amount: types[indexOfType].amount + 1,
      }
    }
  })

  return types
}

const translateTypeOfProduct = type => {
  switch (type) {
    case 'mask':
      return 'Máscaras'
    case 'carpet':
      return 'Tapetes'
    case 'plateTowel':
      return 'Jogo Americano'
    default:
      return type
  }
}

export default {
  convertPriceToBrSyntax,
  getTypesOfProduct,
  translateTypeOfProduct,
}
