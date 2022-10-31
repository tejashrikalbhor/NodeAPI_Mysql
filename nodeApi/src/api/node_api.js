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
routes.get('/getStudentDetails',async(req,res)=>{
    try{
        const sql = `call GET_STUDENT_DETAILS()`;
        con.query(sql,(err,results,fields)=>{
            if(err)throw err;
            else{
                console.log("result:",results[0].length)
                return res.status(200).json({Result:results[0]});
            }
        });  
    }
    catch(err){
        return res.status(500).json({Error:err.Message()});
    }
});
routes.get('/createStudent',async(req,res)=>{
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
        const TEACHER_ID = req.body.TEACHER_ID;
        if(!NAME || !AGE || !TEACHER_ID){
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
});
routes.put('/updateStudent/:id',async(req,res)=>{
    try{
        if(!req.body.NAME || !req.body.AGE){
            return res.status(400).json({Error:"PLEASE ENTER THE CORRECT DETAILS."});
        }
                else{
                    const sql_query = `call ID_EXIST(?)`;
                    con.query(sql_query,[req.params.id],(err,results,fields)=>{
                        if(err){
                            return res.status(400).json({ErrorMessage:err});
                        }
                        else{
                            console.log("Result Length:",results[0].length);
                            if(results[0].length==0){
                                return res.status(400).json({ErrorMessage:"ID DOES NOT EXIST."});
                            }
                            else{
                                const sql = `call SP_UPDATE_STUDENT(?,?,?)`;
                                con.query(sql,[req.params.id,req.body.NAME,req.body.AGE],(err,results)=>{
                                     if(err){
                                      return res.status(400).json({ErrorMessage:err});
                                     }
                                     else{
                                        return res.status(200).json({Message:"STUDENT RECORD UPDATED SUCESSFULLY."});

                                     }
                            } )
                        }
                    }
                });
            }
        }
    catch(err){
        return res.status(500).json({Error:err.Message()});
    }
});
routes.delete('/deleteStudent/:id',async(req,res)=>{
    try{
        const sql_query = `call ID_EXIST(?)`;
        con.query(sql_query,[req.params.id],(err,results,fields)=>{
            if(err){
                return res.status(400).json({ErrorMessage:err});
            }
            else{
                console.log("Result Length:",results[0].length);
                if(results[0].length==0){
                    return res.status(400).json({ErrorMessage:"ID DOES NOT EXIST."});
                }
                else{
                    const sql  = `call DELETE_STUDENT_DATA(?)`;
                    con.query(sql,[req.params.id],(err,results)=>{
                         if(err){
                          return res.status(400).json({ErrorMessage:err});
                         }
                         else{
                            return res.status(200).json({Message:"STUDENT RECORD DELETED SUCESSFULLY."});
                         }
                } )
                }
            }
            });

    }
    catch(err){
        return res.status(500).json({Error:err.Message()});
    }
})
module.exports ={routes}
