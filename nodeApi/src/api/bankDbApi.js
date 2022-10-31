const express =require('express');
const bodyParser = require('body-parser');
const bankDb = express.Router();
var mysql = require('mysql2');
var mysql_ =require('mysql');
// const { Router } = require('express');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Admin@123",
    database:"MYSQL_DATABASE"
});
con.connect(function (err) {
    if (err) {
        console.log("Error Message:", err);
    }
    else {
        console.log("Connected!");
    }
});
bankDb.get('/db',async(req,res)=>{
        try{
            con.query('call SP_CALLING_ALL_CREATE_TABLES_SP()',(err,results,fields)=>{
                if(err)throw err;
                else{
                    return res.status(200).json({Message:"TABLE BANK_BRANCH CREATED SUCESSFULLY."});
                }
            });  
        } 
    
    catch(err){
        return res.status(500).json({Error:err.Message()});
    }
});
module.exports ={bankDb}