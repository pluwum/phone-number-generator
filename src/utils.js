import { PHONE_NUMBER_LENGHTH, PHONE_NUMBER_PADDING } from './config'

export const formatPhoneNumber = number => {
  return number
    ? number.toString().padStart(PHONE_NUMBER_LENGHTH, PHONE_NUMBER_PADDING)
    : null
}
