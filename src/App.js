import React, { Component } from 'react'
import './styles/App.css'
import Header from './components/Header'
import Generator from './components/Generator'
import Results from './components/Results'
import Stats from './components/Stats'

class App extends Component {
  state = {
    phoneNumbers: []
  }

  getPhoneNumbers = results => {
    this.setState({ phoneNumbers: results })
  }

  render () {
    return (
      <div className='container'>
        <Header />
        <div className='row'>
          <div className='col'>
            <Generator getPhoneNumbers={this.getPhoneNumbers} />
          </div>
          <div className='col'>
            <Stats />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <Results phoneNumbers={this.state}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App
