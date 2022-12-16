export const formatPriceNotation = (value: string) => {
  value = value?.replace('.', '').replace(',', '').replace(/\D/g, '')

  if (isNaN(parseFloat(value))) {
    return ''
  }

  const options = { minimumFractionDigits: 2 }
  const result = new Intl.NumberFormat('pt-BR', options).format(
    parseFloat(value) / 100
  )

  return result
}

export const formatIntegerNotation = (value: string) => {
  return value?.replace('.', '').replace(',', '').replace(/\D/g, '')
}

export const toDecimal = (value: string) => {
  const formattedValue = formatIntegerNotation(value)
  return parseFloat(formattedValue!) / 100
}

export const toInteger = (value: string) => {
  const formattedValue = formatIntegerNotation(value)
  return parseInt(formattedValue!)
}
