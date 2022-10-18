const express = require('express');
const bodyParser = require('body-parser');
const {routes} = require('./api/node_api');
const app = express();
app.use(bodyParser.json());
app.use('/demo',routes);

module.exports=app ;