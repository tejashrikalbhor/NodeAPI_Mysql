USE API_CALLING_SP;
DELIMITER //
CREATE PROCEDURE SP_GET_ACCOUNTS()
BEGIN
SELECT * FROM ACCOUNTS ORDER BY CUSTOMER_ID ASC ;
END // 
DELIMITER ;
--
DROP PROCEDURE SP_GET_ACCOUNTS;
DELIMITER //
CREATE PROCEDURE SP_GET_BANK_BRANCH()
BEGIN
SELECT * FROM BANK_BRANCH ;
END // 
DELIMITER ;
--
CALL SP_GET_BANK_BRANCH;
DELIMITER //
CREATE PROCEDURE SP_GET_EMPLOYEE()
BEGIN
SELECT * FROM EMPLOYEE ;
END // 
DELIMITER ;
--
DELIMITER //
CREATE PROCEDURE SP_GET_DEPARTMENT()
BEGIN
SELECT * FROM DEPARTMENT ;
END // 
DELIMITER ;
--
DELIMITER //
CREATE PROCEDURE SP_GET_CUSTOMER()
BEGIN
SELECT * FROM CUSTOMER ;
END // 
DELIMITER ;
--
DELIMITER //
CREATE PROCEDURE SP_GET_TRANSACTION()
BEGIN
SELECT * FROM TRANSACTION ;
END // 
DELIMITER ;

--
DELIMITER //
CREATE PROCEDURE SP_GET_DATA_MAINTAINANCE()
BEGIN
SELECT * FROM DATA_MAINTAINANCE ;
END // 
DELIMITER ;
CALL SP_GET_DATA_MAINTAINANCE;
