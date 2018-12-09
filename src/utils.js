import {
  PHONE_NUMBER_LENGHTH,
  PHONE_NUMBER_PADDING,
  PHONE_NUMBER_LIMIT,
  MAX_RETRY
} from './config'

export const formatPhoneNumber = number => {
  return number
    ? number.toString().padStart(PHONE_NUMBER_LENGHTH, PHONE_NUMBER_PADDING)
    : null
}

export const generateUniqueRandomNumbers = (quantity, existingPhonenumbers) => {
  var newphonenumbers = []
  var retryCount = 0
  var canRetry = false
  // if we want more than we can generate
  if (quantity > PHONE_NUMBER_LIMIT) {
    quantity = PHONE_NUMBER_LIMIT
  }

  while (newphonenumbers.length < quantity) {
    // Generate the random numbers
    do {
      var randomNum = Math.floor(Math.random() * PHONE_NUMBER_LIMIT)

      // Lets make sure the numbers are unique
      if (!existingPhonenumbers.includes(randomNum)) {
        newphonenumbers.push(randomNum)
        existingPhonenumbers.push(randomNum)
        canRetry = false
      } else {
        // try a few more times If we are having trouble generating random numbers
        canRetry = true
        retryCount++
      }
    } while (canRetry && retryCount < MAX_RETRY)

    if (canRetry && retryCount >= MAX_RETRY) {
      // We cannot generate random numbers at this time
      break
    }
  }
  return existingPhonenumbers
}
