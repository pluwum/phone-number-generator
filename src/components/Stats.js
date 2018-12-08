import React from 'react'

const Stats = ({ min, max, count }) => {
  return (
    <div>
      Stats
      <ul>
        <li>Numbers generated:{count}</li>
        <li>Min:{min}</li>
        <li>Max:{max}</li>
      </ul>
    </div>
  )
}
export default Stats
