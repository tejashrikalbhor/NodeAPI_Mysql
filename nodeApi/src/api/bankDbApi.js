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
});//
bankDb.get('/DATA_MAINTAINANCE',async(req,res)=>{
    try{
        con.query('call SP_CREATE_TABLE_DATA_MAINTAINANCE()',(err,results,fields)=>{
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
bankDb.get('/GETBANK_BRANCH',async(req,res)=>{
        try{
            con.query('call SP_GET_BANK_BRANCH()',(err,results,fields)=>{
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
//
bankDb.get('/GETEMPLOYEE',async(req,res)=>{
    try{
        con.query('call SP_GET_EMPLOYEE()',(err,results,fields)=>{
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
//
bankDb.get('/GETDEPARTMENT',async(req,res)=>{
    try{
        con.query('call SP_GET_DEPARTMENT()',(err,results,fields)=>{
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
//
bankDb.get('/GETCUSTOMER',async(req,res)=>{
    try{
        con.query('call SP_GET_CUSTOMER()',(err,results,fields)=>{
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
//
bankDb.get('/GETACCOUNTS',async(req,res)=>{
    try{
        con.query('call SP_GET_ACCOUNTS()',(err,results,fields)=>{
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
//
bankDb.get('/GETTRANSACTION',async(req,res)=>{
    try{
        con.query('call SP_GET_TRANSACTION()',(err,results,fields)=>{
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
//
bankDb.get('/GETDATA_MAINTAINANCE',async(req,res)=>{
    try{
        con.query('call SP_GET_DATA_MAINTAINANCE()',(err,results,fields)=>{
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
//POST API
bankDb.post('/ADDBANK_BRANCH',(req,res)=>{
    try{

       const BRANCH_ID = req.body.BRANCH_ID;
       const BANK_NAME = req.body.BANK_NAME;
       const IFSC_CODE = req.body.IFSC_CODE;
       const ADDRESS = req.body.ADDRESS;
       const CITY = req.body.CITY;
       const STATE =  req.body.STATE;
       const MANAGER_ID = req.body.MANAGER_ID;
        
        if(!BRANCH_ID || !BANK_NAME || !IFSC_CODE || !ADDRESS || !CITY ||!STATE){
            return res.status(400).json({ErrorMessage : "PLEASE ENTER THE CORRECT DETAILS:"});
        }
        else {
            let sql = `call SP_ADD_BANK_BRANCH(?,?,?,?,?,?,?)`;
            con.query(sql, [req.body.BRANCH_ID,
            req.body.BANK_NAME,
            req.body.IFSC_CODE,
            req.body.ADDRESS,
            req.body.CITY,
            req.body.STATE,
            req.body.MANAGER_ID
            ], (err, results, fields) => {
                if (err) {
                    return res.status(400).json({ ErrorMessage: err });
                }
                else{
                    return res.status(200).json({Result:results,Message:"BANK_BRANCH RECORD ADDED SUCESSFULLY."});
                }
            })
        }
    }
    catch(err){
        return res.status(500).json({Error:err.Message});
    }
});
//
bankDb.post('/ADDEMPLOYEE',(req,res)=>{
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
//
bankDb.post('/ADDDEPARTMENT',(req,res)=>{
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
//
bankDb.post('/ADDCUSTOMER',(req,res)=>{
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
//
bankDb.post('/ADDACCOUNTS',(req,res)=>{
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
//
bankDb.post('/ADDTRANSACTION ',(req,res)=>{
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

module.exports ={bankDb}