var Twitter = require('twitter');
const express = require('express');
const cors = require('cors');
var bodyParser = require("body-parser");
const automator = require('./automator');
const readTests = require('./tests/readTests');
const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/automate', (req, res) => {
  automator.automate(req.body).then(passed => {
  	res.send({passed: passed});
  });
})

app.get('/tests/scenarios', (req, res) => {
  readTests.read.then(scenarios => {
    res.send(scenarios);
  });
})

app.listen(port, () => console.log(`App listening on port: ${port}`))