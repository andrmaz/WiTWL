import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'

let wrapper
let instance
let event
const mockWeather = jest.mock()

describe('App Component', () => {
    beforeEach(() => {
        wrapper = shallow(<App />)
        instance = wrapper.instance()
        expect.hasAssertions()
    })
    it('should render Component correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })
    it('should be a stateful component', () => {
        expect(instance).toBeInstanceOf(App)
    })
    it('should render initial State correctly', () => {
        expect(wrapper.state().city).toEqual('')
        expect(wrapper.state().weather).toEqual({})
    })
    it('should set city correctly', () => {
        wrapper.setState({ city: 'New York' })
        expect(wrapper.state().city).toEqual('New York')
    })
    it('should set weather correctly', () => {
        wrapper.setState({ weather: mockWeather })
        expect(wrapper.state().weather).toEqual(mockWeather)
    })
    it('should handle changes correctly', () => {
        event = { target: { value: 'London'}}
        instance.handleChange(event)
        expect(wrapper.state().city).toEqual('London')
    })
    it('should handle submit correctly', async () => {
        event = { preventDefault: () => {} }
        const mockSubmit = jest.spyOn(event, 'preventDefault')
        instance.handleSubmit(event)
        expect(mockSubmit).toHaveBeenCalledTimes(1)
    })
})

