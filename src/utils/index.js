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

export default convertPriceToBrSyntax
