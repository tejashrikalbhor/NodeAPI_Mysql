const express =require('express');
const bodyParser = require('body-parser');
const demmo = express.Router();
var mysql = require('mysql2');
var mysql_ =require('mysql');
// const { Router } = require('express');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Admin@123",
    database:"BANK_SYSTEM"
});
con.connect(function (err) {
    if (err) {
        console.log("Error Message:", err);
    }
    else {
        console.log("Connected!");
    }
});
demmo.get('/DETAILS',async(req,res)=>{
    try{
        con.query('call SP_CUSTOMER_ACCOUNTS_TRANSACTION()',(err,results,fields)=>{
            if(err)throw err;
            else{
                return res.status(200).json({Result:results[0]});
            }
        });  
    } 

catch(err){
    return res.status(500).json({Error:err.Message()});
}
});
module.exports ={demmo}