import { generateUniqueRandomNumbers, formatPhoneNumber } from '../utils'

describe('Helper Utilities', () => {
  describe('Random Number Generator', () => {
    it('Generates required number of numbers', () => {
      var quantity = 100
      var existingNumbers = []
      var randomNumbers = generateUniqueRandomNumbers(quantity, existingNumbers)
      expect(quantity).toEqual(randomNumbers.length)
    })

    it('Returns unique numbers', () => {
      var quantity = 100
      var existingNumbers = []
      var randomNumbers = generateUniqueRandomNumbers(quantity, existingNumbers)
      var duplicates = randomNumbers.filter(
        (number, index) => randomNumbers.indexOf(number) !== index
      )

      expect(duplicates.length).toEqual(0)
    })
  })

  describe('Number formating', () => {
    it('Formats number Correctly', () => {
      expect(formatPhoneNumber(883517972)).toEqual('0883517972')
    })
  })
})
