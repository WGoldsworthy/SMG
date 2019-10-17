var Twitter = require('twitter');
const express = require('express');
const cors = require('cors');
const automator = require('./automator');
const readTests = require('./tests/readTests');
const app = express();
const port = 3001;

app.use(cors());

app.post('/automate', (req, res) => {
  console.log("Automate Request Received.")
  automator.automate();
})

app.get('/tests/scenarios', (req, res) => {
  readTests.read.then(scenarios => {
    res.send(scenarios);
  });
})

app.listen(port, () => console.log(`App listening on port: ${port}`))