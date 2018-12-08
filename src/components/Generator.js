import React, { Component } from 'react'

const limit = 999999999
const phoneNumberLength = 10
const phoneNumberPadding = '0'
const maxRetry = 5
class Generator extends Component {
  state = {
    quantity: 0,
    phoneNumbers: []
  }

  generateUniqueRandomNumbers (quantity, existingPhonenumbers) {
    var newphonenumbers = []
    var retryCount = 0
    var canRetry = false
    // if we want more than we can generate
    if (quantity > limit) {
      quantity = limit
    }

    while (newphonenumbers.length < quantity) {
      // Generate the random numbers
      do {
        var randomNum = Math.floor(Math.random() * limit)

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
      } while (canRetry && retryCount < maxRetry)

      if (canRetry && retryCount >= maxRetry) {
        // We cannot generate random numbers at this time
        break
      }

      console.log(
        randomNum.toString().padStart(phoneNumberLength, phoneNumberPadding)
      )
    }
    return existingPhonenumbers
  }

  handleSubmit = event => {
    event.preventDefault()
    var { quantity } = this.state

    var existingPhonenumbers = this.state.phoneNumbers

    var phoneNumbers = this.generateUniqueRandomNumbers(
      quantity,
      existingPhonenumbers
    )

    this.setState({
      phoneNumbers: phoneNumbers
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
