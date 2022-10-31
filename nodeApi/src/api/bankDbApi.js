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
    database:"API_CALLING_SP"
});
con.connect(function (err) {
    if (err) {
        console.log("Error Message:", err);
    }
    else {
        console.log("Connected!");
    }
});
bankDb.get('/BANK_BRANCH',async(req,res)=>{
        try{
            con.query('call SP_CREATE_TABLE_BANK_BRANCH()',(err,results,fields)=>{
                if(err)throw err;
                else{
                    return res.status(200).json({Message:"TABLE CREATED SUCESSFULLY."});
                }
            });  
        } 
    
    catch(err){
        return res.status(500).json({Error:err.Message()});
    }
});
//
bankDb.get('/EMPLOYEE',async(req,res)=>{
    try{
        con.query('call SP_CREATE_TABLE_EMPLOYEE()',(err,results,fields)=>{
            if(err)throw err;
            else{
                return res.status(200).json({Message:"TABLE CREATED SUCESSFULLY."});
            }
        });  
    } 

catch(err){
    return res.status(500).json({Error:err.Message()});
}
});
//
bankDb.get('/DEPARTMENT',async(req,res)=>{
    try{
        con.query('call SP_CREATE_TABLE_DEPARTMENT()',(err,results,fields)=>{
            if(err)throw err;
            else{
                return res.status(200).json({Message:"TABLE CREATED SUCESSFULLY."});
            }
        });  
    } 

catch(err){
    return res.status(500).json({Error:err.Message()});
}
});
//
bankDb.get('/CUSTOMER',async(req,res)=>{
    try{
        con.query('call SP_CREATE_TABLE_CUSTOMER()',(err,results,fields)=>{
            if(err)throw err;
            else{
                return res.status(200).json({Message:"TABLE CREATED SUCESSFULLY."});
            }
        });  
    } 

catch(err){
    return res.status(500).json({Error:err.Message()});
}
});
//
bankDb.get('/ACCOUNTS',async(req,res)=>{
    try{
        con.query('call SP_CREATE_TABLE_ACCOUNTS()',(err,results,fields)=>{
            if(err)throw err;
            else{
                return res.status(200).json({Message:"TABLE CREATED SUCESSFULLY."});
            }
        });  
    } 

catch(err){
    return res.status(500).json({Error:err.Message()});
}
});
//
bankDb.get('/TRANSACTION',async(req,res)=>{
    try{
        con.query('call SP_CREATE_TABLE_TRANSACTION()',(err,results,fields)=>{
            if(err)throw err;
            else{
                return res.status(200).json({Message:"TABLE CREATED SUCESSFULLY."});
            }
        });  
    } 

catch(err){
    return res.status(500).json({Error:err.Message()});
}
});
//GET API


module.exports ={bankDb}