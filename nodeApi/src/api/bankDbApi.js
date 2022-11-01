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
        const EMP_ID = req.body.EMP_ID;
        const EMP_NAME = req.body.EMP_NAME;
        const EMP_ADDRESS = req.body.EMP_ADDRESS;
        const BRANCH_ID = req.body.BRANCH_ID;
        const DEPARTMENT_ID = req.body.DEPARTMENT_ID;
        const ACC_NO =  req.body.ACC_NO;
         if(!EMP_ID || !EMP_NAME || !EMP_ADDRESS || !BRANCH_ID || !DEPARTMENT_ID ||!ACC_NO){
             return res.status(400).json({ErrorMessage : "PLEASE ENTER THE CORRECT DETAILS:"});
         }
         else {
             let sql = `call SP_ADD_EMPLOYEE(?,?,?,?,?,?)`;
             con.query(sql, [req.body.EMP_ID,
             req.body.EMP_NAME,
             req.body.EMP_ADDRESS,
             req.body.BRANCH_ID,
             req.body.DEPARTMENT_ID,
             req.body.ACC_NO
             ], (err, results, fields) => {
                if(err) {
                    return res.status(400).json({ErrorMessage:err});
                }
                else{
                    return res.status(200).json({Result:results,Message:"EMPLOYEE RECORD ADDED SUCESSFULLY."});
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
        const DEPARTMENT_ID = req.body.DEPARTMENT_ID;
        const DEPARTMENT_NAME = req.body.DEPARTMENT_NAME;
        const HEAD_OF_DEPARTMENT = req.body.HEAD_OF_DEPARTMENT;
        const DESIGNATION = req.body.DESIGNATION;
         if(!DEPARTMENT_ID || !DEPARTMENT_NAME || !HEAD_OF_DEPARTMENT || !DESIGNATION){
             return res.status(400).json({ErrorMessage : "PLEASE ENTER THE CORRECT DETAILS:"});
         }
         else {
             let sql = `call SP_ADD_DEPARTMENT(?,?,?,?)`;
             con.query(sql, [req.body.DEPARTMENT_ID,
             req.body.DEPARTMENT_NAME,
             req.body.HEAD_OF_DEPARTMENT,
             req.body.DESIGNATION
             ], (err, results, fields) => {
                if(err) {
                    return res.status(400).json({ErrorMessage:err});
                }
                else{
                    return res.status(200).json({Result:results,Message:"DEPARTMENT RECORD ADDED SUCESSFULLY."});
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
        const CUSTOMER_ID = req.body.CUSTOMER_ID;
        const CUSTOMER_NAME = req.body.CUSTOMER_NAME;
        const CUSTOMER_ADDRESS = req.body.CUSTOMER_ADDRESS;
        const BRANCH_ID = req.body.BRANCH_ID;
        const ACC_NO =  req.body.ACC_NO;
         if(!CUSTOMER_ID || !CUSTOMER_NAME || !CUSTOMER_ADDRESS || !BRANCH_ID || !ACC_NO){
             return res.status(400).json({ErrorMessage : "PLEASE ENTER THE CORRECT DETAILS:"});
         }
         else {
             let sql = `call SP_ADD_CUSTOMER(?,?,?,?,?)`;
             con.query(sql, [
             req.body.CUSTOMER_ID,
             req.body.CUSTOMER_NAME,
             req.body.CUSTOMER_ADDRESS,
             req.body.BRANCH_ID,
             req.body.ACC_NO
             ], (err, results, fields) => {
                if(err) {
                    return res.status(400).json({ErrorMessage:err});
                }
                else{
                    return res.status(200).json({Result:results,Message:"CUSTOMER RECORD ADDED SUCESSFULLY."});
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
        const ACC_NO =  req.body.ACC_NO;
        const BRANCH_ID = req.body.BRANCH_ID;
        const CUSTOMER_ID = req.body.CUSTOMER_ID;
        const ACC_TYPE = req.body.ACC_TYPE;
        const BALANCE = req.body.BALANCE;
        const ACC_STATUS =  req.body.ACC_STATUS;
         if(!ACC_NO || !BRANCH_ID || !CUSTOMER_ID || !ACC_TYPE || !BALANCE || !ACC_STATUS){
             return res.status(400).json({ErrorMessage : "PLEASE ENTER THE CORRECT DETAILS:"});
         }
         else {
             let sql = `call SP_ADD_ACCOUNTS(?,?,?,?,?,?)`;
             con.query(sql, [
             req.body.ACC_NO,
             req.body.BRANCH_ID,
             req.body.CUSTOMER_ID,
             req.body.ACC_TYPE,
             req.body.BALANCE,
             req.body.ACC_STATUS
             ], (err, results, fields) => {
                if(err) {
                    return res.status(400).json({ErrorMessage:err});
                }
                else{
                    return res.status(200).json({Result:results,Message:"ACCOUNTS RECORD ADDED SUCESSFULLY."});
                }
            })
        }
    }
    catch(err){
        return res.status(500).json({Error:err.Message});
    }
});
//
bankDb.post('/ADDTRANSACTION',(req,res)=>{
    try{
        const ACC_NO =  req.body.ACC_NO;
        const DATE_TIME_STAMP =new Date();
        const EMP_ID = req.body.EMP_ID;
        const CREDIT_OR_DEPOSIT = req.body.CREDIT_OR_DEPOSIT;
        const TRANSACTION_TYPE = req.body.TRANSACTION_TYPE;
        
         if(!ACC_NO || !EMP_ID || !CREDIT_OR_DEPOSIT ||!TRANSACTION_TYPE ){
             return res.status(400).json({ErrorMessage : "PLEASE ENTER THE CORRECT DETAILS:"});
         }
         else {
             let sql = `call SP_ADD_TRANSACTION(?,?,?,?,?)`;
             con.query(sql, [
             req.body.ACC_NO,
             DATE_TIME_STAMP,
             req.body.EMP_ID,
             req.body.CREDIT_OR_DEPOSIT,
             req.body.TRANSACTION_TYPE
             ], (err, results, fields) => {
                if(err) {
                    return res.status(400).json({ErrorMessage:err});
                }
                else{
                    return res.status(200).json({Result:results,Message:"TRANSACTION RECORD ADDED SUCESSFULLY."});
                }
            })
        }
    }
    catch(err){
        return res.status(500).json({Error:err.message});
    }
});
//  JOIN_BANK_BRANCH_ACCOUNTS
bankDb.get('/GETDATA_BANK_BRANCH_ACCOUNTS',(req,res)=>{
    try{
        con.query('call SP_JOIN_BANK_BRANCH_ACCOUNTS()',(err,results,fields)=>{
            if(err)throw err;
            else{
                return res.status(200).json({MESSAGE:"INFORMATION ABOUT BANK_BRANCH AND ACCOUNTS TABLES.",Result:results[0]});
            }
        }); 
    }
    catch(err){
        return res.status(500).json({Error:err.message});
    }
});
//  JOIN_EMPLOYEE_DEPARTMENT
bankDb.get('/GETDATA_EMPLOYEE_DEPARTMENT',(req,res)=>{
    try{
        con.query('call SP_JOIN_EMPLOYEE_DEPARTMENT()',(err,results,fields)=>{
            if(err)throw err;
            else{
                return res.status(200).json({MESSAGE:"INFORMATION ABOUT EMPLOYEE AND DEPARTMENT TABLES.",Result:results[0]});
            }
        }); 
    }
    catch(err){
        return res.status(500).json({Error:err.message});
    }
});
//  JOIN_EMPLOYEE_TRANSACTION
bankDb.get('/GETDATA_EMPLOYEE_TRANSACTION',(req,res)=>{
    try{
        con.query('call SP_JOIN_EMPLOYEE_TRANSACTION()',(err,results,fields)=>{
            if(err)throw err;
            else{
                return res.status(200).json({MESSAGE:"INFORMATION ABOUT EMPLOYEE AND TRANSACTION TABLES.",Result:results[0]});
            }
        }); 
    }
    catch(err){
        return res.status(500).json({Error:err.message});
    }
});
//  JOIN_ACCOUNTS_CUSTOMER
bankDb.get('/GETDATA_ACCOUNTS_CUSTOMER',(req,res)=>{
    try{
        con.query('call SP_JOIN_ACCOUNTS_CUSTOMER()',(err,results,fields)=>{
            if(err)throw err;
            else{
                return res.status(200).json({MESSAGE:"INFORMATION ABOUT ACCOUNTS AND CUSTOMER TABLES.",Result:results[0]});
            }
        }); 
    }
    catch(err){
        return res.status(500).json({Error:err.message});
    }
});
//  JOIN_BANK_BRANCH_ACCOUNTS_CUSTOMER
bankDb.get('/GETDATA_BANK_BRANCH_ACCOUNTS_CUSTOMER',(req,res)=>{
    try{
        con.query('call SP_JOIN_BANK_BRANCH_ACCOUNTS_CUSTOMER()',(err,results,fields)=>{
            if(err)throw err;
            else{
                return res.status(200).json({MESSAGE:"INFORMATION ABOUT ACCOUNTS, CUSTOMER AND BANK_BRANCH TABLES.",Result:results[0]});
            }
        }); 
    }
    catch(err){
        return res.status(500).json({Error:err.message});
    }
});
//
// // JOIN
// bankDb.get('/GETDATA_BANK_BRANCH_ACCOUNTS',(req,res)=>{
//     try{
//         con.query('call SP_JOIN_ALL_TABLES()',(err,results,fields)=>{
//             if(err)throw err;
//             else{
//                 return res.status(200).json({MESSAGE:"ALL INFORMATION ABOUT TABLES.",Result:results[0]});
//             }
//         }); 
//     }
//     catch(err){
//         return res.status(500).json({Error:err.message});
//     }
// });
// //
module.exports ={bankDb}