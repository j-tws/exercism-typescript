export function decodedResistorValue(array: [string, string, string]) {

  const colorCode: {
    [key: string]: string
  } = {
    black: '0',
    brown: '1',
    red: '2',
    orange: '3',
    yellow: '4',
    green: '5',
    blue: '6',
    violet: '7',
    grey: '8',
    white: '9'
  }

  type key = keyof typeof colorCode
  const firstKey: key = array[0]
  const secondKey: key = array[1]
  const thirdKey: key = array[2]

  const firstDigit = colorCode[firstKey]
  const secondDigit = colorCode[secondKey]
  const zeroes = '0'.repeat( parseInt(colorCode[thirdKey]) )

  const joinedDigits = `${firstDigit}${secondDigit}${zeroes}`
  
  if (joinedDigits.length > 3){
    const trimmedDigits = joinedDigits.substring(0, joinedDigits.length - 3)
    return `${trimmedDigits} kiloohms`
  }

  return `${joinedDigits} ohms`

}
