import React, { Component } from 'react'
import './styles/App.css'
import Header from './components/Header'
import Generator from './components/Generator'
import Results from './components/Results'
import Stats from './components/Stats'

class App extends Component {
  render () {
    return (
      <div className='container'>
        <Header />
        <div className='row'>
          <div className='col'>
            <Generator />
          </div>
          <div className='col'>
            <Stats />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <Results />
          </div>
        </div>
      </div>
    )
  }
}

export default App
