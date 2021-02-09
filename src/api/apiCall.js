import axios from 'axios';

const uri = process.env.X_RAPIDAPI_URI;
const key = process.env.X_RAPIDAPI_KEY;
const host = process.env.X_RAPIDAPI_HOST;

const options = {
    method: 'GET',
    url: uri,
    params: {q: '', days: '3'},
    headers: {
      'x-rapidapi-key': key,
      'x-rapidapi-host': host
    }
  };

export const apiCall = async (location) => {
  try {
      options.params.q = location;
      const response = await axios.request(options);
      const { data } = response;
      return data;
  } catch (error) {
      console.error(error);
  }
};