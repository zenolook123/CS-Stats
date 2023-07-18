const express = require('express');
const axios = require('axios');

const app = express();

// Enable CORS middleware
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  next();
});

// Endpoint to make the API request
app.get('/make-request', (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://public-api.tracker.gg/v2/csgo/standard/profile/steam/76561198008049283',
    headers: {
      'TRN-Api-Key': '356dde61-28e0-4d8c-a07d-df486bed187d',
      'Accept': 'application/json'
    }
  };

  axios(options)
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Internal Server Error');
    });
});

'https://public-api.tracker.gg/v2/csgo/standard/profile/steam/76561198008049283?TRN-Api-Key=356dde61-28e0-4d8c-a07d-df486bed187d'
// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
