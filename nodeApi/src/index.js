const express = require('express');
const bodyParser = require('body-parser');
const {routes} = require('./api/node_api');
const {bankDb} = require('./api/bankDbApi');
const app = express();
app.use(bodyParser.json());
app.use('/demo',routes);
app.use('/bankDb',bankDb);

module.exports=app ;