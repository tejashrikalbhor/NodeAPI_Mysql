const express =require('express');
const bodyParser = require('body-parser');
const routes = express.Router();
var mysql = require('mysql2');
var mysql_ =require('mysql');
const { Router } = require('express');
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
routes.get('/',async(req,res)=>{
    return res.status(200).json({Message:"OK"});
})
routes.get('/student',async(req,res)=>{
try{
    con.query('call SP_CREATE_TABLE()',(err,results,fields)=>{
        if(err)throw err;
        else{
            return res.status(200).json({Result:results,Message:"TABLE CREATED SUCESSFULLY."});
        }
    });  
}
catch(err){
    return res.status(500).json({Error:err.Message});
}
});
routes.post('/addStudent',(req,res)=>{
    try{
        const NAME = req.body.NAME;
        const AGE = req.body.AGE;
        if(!NAME || !AGE){
            return res.status(400).json({ErrorMessage : "PLEASE ENTER THE CORRECT DETAILS:"});
        }
        else{
            console.log("inside else");
            // con.query('call SP_ADD_STUDENT(name,age)',(err,results,fields)=>{
                // let sql =`call SP_ADD_STUDENT(@NAME,@AGE)`;
                let sql =`call SP_ADD_STUDENT(?,?)`;
              con.query(sql,[ req.body.NAME, req.body.AGE],(err,results,fields)=>{
                // con.query(sql,(err,results,fields)=>{
                console.log("NAME",NAME);
                if(err) {
                    return res.status(400).json({ErrorMessage:err});
                }
                else{
                    return res.status(200).json({Result:results,Message:"STUDENT RECORD ADDED SUCESSFULLY."});
                }
            })
        }
    }
    catch(err){
        return res.status(500).json({Error:err.Message});
    }
})
module.exports ={routes}
