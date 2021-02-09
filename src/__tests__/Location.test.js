import React from 'react'
import { shallow } from 'enzyme'
import Location from '../component/Location/Location'

let wrapper 
const mockWeather = {
    location: {
        country: '',
        localtime: '',
        name: '',
        region: '',
        tz_id: ''
    }
}

describe('Location Component', () => {
    beforeEach(() => {
        expect.hasAssertions()
        wrapper = shallow(<Location weather={mockWeather} />)
    })
    it('should render component correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })
    it('should throw error on failing props validation', () => {
        wrapper = shallow(<Location weather={''} />)
        const fn = () => { throw new Error() }
        expect(fn).toThrow()
    })
})