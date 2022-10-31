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
        return res.status(200).json({Message:"ok"});
        // const sql = `call GET_STUDENT_DETAILS()`;
        // con.query(sql,(err,results,fields)=>{
        //     if(err)throw err;
        //     else{
        //         console.log("result:",results[0].length)
        //         return res.status(200).json({Result:results[0]});
        //     }
        // });  
    }
    catch(err){
        return res.status(500).json({Error:err.Message()});
    }
});
module.exports ={bankDb}