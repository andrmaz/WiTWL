import axios from "axios";
import MockAdapter from "axios-mock-adapter";

it('should get weather data correctly', () => {
    // This sets the mock adapter on the default instance
    const mock = new MockAdapter(axios);
    const uri = ""
    const data = {
        current: {}, 
        forecast: {}, 
        location: {}
    }
    const headers = {
        'x-rapidapi-key': '',
        'x-rapidapi-host': ''
    }

    // Mock GET request to /users when param `searchText` is 'John'
    // arguments for reply are (status, data, headers)
    mock.onGet(uri,
         { params: {q: 'Milan', days: '3'} }
         ).reply(200, data, headers);
    
    axios
        .get(uri, { params: {q: 'Milan', days: '3'} })
        .then(function (response) {
            expect(response.status).toBe(200)
            expect(response.data).toEqual(data)
        }).catch(error => console.log(error))
})
 
