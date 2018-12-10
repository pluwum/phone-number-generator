import {
  PHONE_NUMBER_LENGHTH,
  PHONE_NUMBER_PADDING,
  PHONE_NUMBER_LIMIT,
  MAX_QUANTITY
} from './config'

export const formatPhoneNumber = number => {
  return number
    ? number.toString().padStart(PHONE_NUMBER_LENGHTH, PHONE_NUMBER_PADDING)
    : null
}

export const generateUniqueRandomNumbers = (quantity, existingPhonenumbers) => {
  var newphonenumbers = []

  // if we want more than we can generate
  if (quantity > MAX_QUANTITY) {
    quantity = MAX_QUANTITY
  }

  while (newphonenumbers.length < quantity) {
    var r = Math.floor(Math.random() * PHONE_NUMBER_LIMIT) + 1
    if (newphonenumbers.indexOf(r) === -1) newphonenumbers.push(r)
  }
  return newphonenumbers
}
