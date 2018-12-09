import React, { Component } from 'react'
import { generateUniqueRandomNumbers } from '../utils'

class Generator extends Component {
  state = {
    quantity: 0,
    phoneNumbers: []
  }

  handleSubmit = event => {
    event.preventDefault()
    var { quantity, phoneNumbers } = this.state

    phoneNumbers = generateUniqueRandomNumbers(quantity, phoneNumbers)

    this.setState({
      phoneNumbers
    })

    this.props.getPhoneNumbers({
      phoneNumbers,
      min: Math.min(...phoneNumbers),
      max: Math.max(...phoneNumbers),
      count: phoneNumbers.length
    })
  }

  handleChange = event => {
    event.preventDefault()
    this.setState({ quantity: event.target.value })
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter quantity of phone numbers:
            <input
              type='number'
              min={1}
              max={10000}
              onChange={this.handleChange}
            />
          </label>
          <input type='submit' value='Generate' />
        </form>
      </div>
    )
  }
}
export default Generator
