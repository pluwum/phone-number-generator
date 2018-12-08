import React from 'react'
import { formatPhoneNumber } from '../utils'
const Stats = ({ min, max, count }) => {
  return (
    <div>
      Stats
      <ul>
        <li>Numbers generated:{count}</li>
        <li>Min:{formatPhoneNumber(min)}</li>
        <li>Max:{formatPhoneNumber(max)}</li>
      </ul>
    </div>
  )
}
export default Stats
