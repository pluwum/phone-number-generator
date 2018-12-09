import React from 'react'
import { formatPhoneNumber } from '../utils'

const Results = ({ phoneNumbers, sortPhoneNumbers }) => (
  <div>
    Results
    <div>Showing {phoneNumbers.length}</div>
    {phoneNumbers.length && (
      <div>
        <select onChange={sortPhoneNumbers}>
          <option value='asc'>ASC</option>
          <option value='desc'>DESC</option>
        </select>
        <ul>
          {phoneNumbers.map(number => (
            <li key={number}>{formatPhoneNumber(number)}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
)
export default Results
