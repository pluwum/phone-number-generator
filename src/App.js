import React, { Component } from 'react'
import './styles/App.css'
import Header from './components/Header'
import Generator from './components/Generator'
import Results from './components/Results'
import Stats from './components/Stats'

class App extends Component {
  state = {
    phoneNumbers: [],
    max: null,
    min: null,
    count: 0
  }

  getPhoneNumbers = results => {
    this.setState({
      phoneNumbers: results.phoneNumbers,
      max: results.max,
      min: results.min,
      count: results.count
    })
  }

  sortPhoneNumbers = event => {
    event.preventDefault()
    var order = event.target.value
    const { phoneNumbers } = this.state
    if (order === 'asc') {
      this.setState({
        phoneNumbers: phoneNumbers.sort(function (a, b) {
          return a - b
        })
      })
    } else {
      this.setState({
        phoneNumbers: phoneNumbers.sort(function (a, b) {
          return b - a
        })
      })
    }
  }

  render () {
    const { min, max, count } = this.state
    return (
      <div className='container'>
        <Header />
        <div className='row'>
          <div className='col'>
            <Generator getPhoneNumbers={this.getPhoneNumbers} />
          </div>
          <div className='col'>
            <Stats min={min} max={max} count={count} />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <Results
              phoneNumbers={this.state.phoneNumbers}
              sortPhoneNumbers={this.sortPhoneNumbers}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
