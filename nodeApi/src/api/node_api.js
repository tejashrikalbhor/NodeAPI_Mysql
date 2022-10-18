const express =require('express');
const bodyParser = require('body-parser');
const routes = express.Router();
routes.get('/',async(req,res)=>{
    return res.status(200).json({Message:"OK"});
})

module.exports ={routes}
