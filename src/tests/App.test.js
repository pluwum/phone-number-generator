import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import { shallow } from 'enzyme'

describe('Test App', () => {
  let wrapper
  let instance

  beforeEach(() => {
    wrapper = shallow(<App />)
    instance = wrapper.instance()
  })

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('Sorts phone numbers in ascending order', () => {
    const event = { preventDefault: jest.fn(), target: { value: 'asc' } }
    instance.setState({
      phoneNumbers: [1000, 10003, 10001, 10008, 10005]
    })
    instance.sortPhoneNumbers(event)
    const state = wrapper.state()
    expect(state.phoneNumbers).toEqual([1000, 10001, 10003, 10005, 10008])
  })

  it('Sorts phone numbers in descending order', () => {
    const event = { preventDefault: jest.fn(), target: { value: 'desc' } }
    instance.setState({
      phoneNumbers: [1000, 10003, 10001, 10008, 10005]
    })
    instance.sortPhoneNumbers(event)
    const state = wrapper.state()
    expect(state.phoneNumbers).toEqual([10008, 10005, 10003, 10001, 1000])
  })

  it('Gets phone numbers from generator', () => {
    const results = {
      phoneNumbers: [1000, 10003, 10001, 10008, 10005],
      max: 10008,
      min: 1000,
      count: 5
    }
    instance.getPhoneNumbers(results)
    const state = wrapper.state()
    expect(state.phoneNumbers).toEqual(results.phoneNumbers)
    expect(state.min).toEqual(results.min)
    expect(state.max).toEqual(results.max)
    expect(state.count).toEqual(results.count)
  })
})
