const express = require('express');
const bodyParser = require('body-parser');
const api = require('./api/node_api');
const app = express();
app.use(bodyParser.json());
app.use('/demo',app);
module.exports={}