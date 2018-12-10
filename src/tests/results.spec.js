import React from 'react'
import { shallow } from 'enzyme'
import Results from '../components/Results'

describe('Phone number results', () => {
  it('it displays results', () => {
    const phoneNumbers = [2344433334, 352441451]
    const wrapper = shallow(<Results phoneNumbers={phoneNumbers} />)

    expect(wrapper.contains('0352441451')).toEqual(true)
  })
})
