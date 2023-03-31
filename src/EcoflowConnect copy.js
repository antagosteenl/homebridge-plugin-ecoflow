const axios = require('axios');

const API_KEY = 'IHR_API_KEY';

axios({
  method: 'get',
  url: 'https://api.ecoflow.com/iot-service/open/api/device/queryDeviceQuota',
  headers: {
    'Authorization': `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  },
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error.response.data);
  });
