import axios from  'axios';


/*
curl -XGET 'https://api.newscatcherapi.com/v2/search?q=Tesla' -H 'x-api-key: your_key_1'
*/

export const baseUrl = `https://api.newscatcherapi.com/v2/`;
export const apiKey = `19f9l4aMnYHFlIpSnRtyHADTdpfDdWh7olGxZJOiCJc`;

const api = axios.create({
    baseURL: baseUrl,
    timeout: 5000,
    headers: {
        'x-api-key': apiKey
    }
  });

export default api;
