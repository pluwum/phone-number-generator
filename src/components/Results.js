import React from 'react'

const Results = ({ phoneNumbers }) => (
  <div>
    Results
    <div>Showing {phoneNumbers.length}</div>
    {phoneNumbers.length && (
      <ul>
        {phoneNumbers.map(number => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    )}
  </div>
)
export default Results
