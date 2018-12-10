import React from 'react'
import { shallow } from 'enzyme'
import Generator from '../components/Generator'
import { MAX_QUANTITY } from '../config'

describe('Random Number generator component', () => {
  var wrapper
  var instance
  const getPhoneNumbers = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<Generator getPhoneNumbers={getPhoneNumbers} />)
    instance = wrapper.instance()
  })

  it('Generates Numbers', () => {
    const event = { preventDefault: jest.fn() }
    instance.setState({ quantity: 20, phoneNumbers: [] })
    instance.handleSubmit(event)
    const state = wrapper.state()
    expect(state.phoneNumbers.length).toEqual(20)
  })

  it('Captures quantity of numbers', () => {
    const event = { preventDefault: jest.fn(), target: { value: 1000 } }
    instance.handleChange(event)
    const state = wrapper.state()

    expect(state.quantity).toEqual(1000)
  })

  it('Generates less if quantity is greater than limit', () => {
    const event = { preventDefault: jest.fn() }
    instance.setState({ quantity: 10030, phoneNumbers: [] })
    instance.handleSubmit(event)
    const state = wrapper.state()
    expect(state.phoneNumbers.length).toEqual(MAX_QUANTITY)
  })
})
