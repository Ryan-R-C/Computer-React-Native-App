import axios from  'axios';


/*
curl -XGET 'https://api.newscatcherapi.com/v2/search?q=Tesla' -H 'x-api-key: your_key_1'
*/

export const baseUrl = `https://api.newscatcherapi.com/v2/`;
export const apiKey = `--OpI3FnWHfGu_ZQ88iiKVoEqcHssuX9E2vteNce3DQ`;

const api = axios.create({
    baseURL: baseUrl,
    timeout: 100000,
    headers: {
        'x-api-key': apiKey
    }
  });

export default api;
