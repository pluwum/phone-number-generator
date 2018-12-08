import React from 'react'

const Generator = () => {
  return (
    <div>
      <form>
        <label>
          Enter quantity of phone numbers:
          <input type='text' />
        </label>
        <input type='submit' value='Generate' />
      </form>
    </div>
  )
}
export default Generator
