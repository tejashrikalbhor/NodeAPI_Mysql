USE API_CALLING_SP;
DELIMITER //
CREATE TRIGGER TR_AFTER_INSERT_BANK_BRANCH
AFTER INSERT ON BANK_BRANCH 
FOR EACH ROW
BEGIN
INSERT INTO DATA_MAINTAINANCE VALUES(NULL,CONCAT('A ROW IS INSERTED IN BANK_BRANCH TABLE AT ',DATE_FORMAT(NOW(),' %d-%m-%y %h:%i:%s %p')));
END //
DELIMITER ;
--
DELIMITER //
CREATE TRIGGER TR_AFTER_INSERT_EMPLOYEE
AFTER INSERT ON EMPLOYEE 
FOR EACH ROW
BEGIN
INSERT INTO DATA_MAINTAINANCE VALUES(NULL,CONCAT('A ROW IS INSERTED IN EMPLOYEE TABLE AT ',DATE_FORMAT(NOW(),' %d-%m-%y %h:%i:%s %p')));
END //
DELIMITER ;
--
DELIMITER //
CREATE TRIGGER TR_AFTER_INSERT_DEPARTMENT
AFTER INSERT ON DEPARTMENT 
FOR EACH ROW
BEGIN
INSERT INTO DATA_MAINTAINANCE VALUES(NULL,CONCAT('A ROW IS INSERTED IN DEPARTMENT TABLE AT ',DATE_FORMAT(NOW(),' %d-%m-%y %h:%i:%s %p')));
END //
DELIMITER ;
--
DELIMITER //
CREATE TRIGGER TR_AFTER_INSERT_CUSTOMER
AFTER INSERT ON CUSTOMER 
FOR EACH ROW
BEGIN
INSERT INTO DATA_MAINTAINANCE VALUES(NULL,CONCAT('A ROW IS INSERTED IN CUSTOMER TABLE AT ',DATE_FORMAT(NOW(),' %d-%m-%y %h:%i:%s %p')));
END //
DELIMITER ;
--
DELIMITER //
CREATE TRIGGER TR_AFTER_INSERT_ACCOUNTS
AFTER INSERT ON ACCOUNTS 
FOR EACH ROW
BEGIN
INSERT INTO DATA_MAINTAINANCE VALUES(NULL,CONCAT('A ROW IS INSERTED IN ACCOUNTS TABLE AT ',DATE_FORMAT(NOW(),' %d-%m-%y %h:%i:%s %p')));
END //
DELIMITER ;
--
DELIMITER //
CREATE TRIGGER TR_AFTER_INSERT_TRANSACTION 
AFTER INSERT ON TRANSACTION  
FOR EACH ROW
BEGIN
INSERT INTO DATA_MAINTAINANCE VALUES(NULL,CONCAT('A ROW IS INSERTED IN TRANSACTION  TABLE AT ',DATE_FORMAT(NOW(),' %d-%m-%y %h:%i:%s %p')));
END //
DELIMITER ;

--
DELIMITER //
CREATE TRIGGER TR_AFTER_UPDATE_BANK_BRANCH
AFTER UPDATE ON BANK_BRANCH 
FOR EACH ROW
BEGIN
INSERT INTO DATA_MAINTAINANCE VALUES(NULL,CONCAT('A ROW IS UPDATED IN BANK_BRANCH TABLE AT ',DATE_FORMAT(NOW(),' %d-%m-%y %h:%i:%s %p')));
END //
DELIMITER ;
--
DELIMITER //
CREATE TRIGGER TR_AFTER_UPDATE_EMPLOYEE
AFTER UPDATE ON EMPLOYEE 
FOR EACH ROW
BEGIN
INSERT INTO DATA_MAINTAINANCE VALUES(NULL,CONCAT('A ROW IS UPDATED IN EMPLOYEE TABLE AT ',DATE_FORMAT(NOW(),' %d-%m-%y %h:%i:%s %p')));
END //
DELIMITER ;
--
DELIMITER //
CREATE TRIGGER TR_AFTER_UPDATE_DEPARTMENT
AFTER UPDATE ON DEPARTMENT 
FOR EACH ROW
BEGIN
INSERT INTO DATA_MAINTAINANCE VALUES(NULL,CONCAT('A ROW IS UPDATED IN DEPARTMENT TABLE AT ',DATE_FORMAT(NOW(),' %d-%m-%y %h:%i:%s %p')));
END //
DELIMITER ;
--
DELIMITER //
CREATE TRIGGER TR_AFTER_UPDATE_CUSTOMER
AFTER UPDATE ON CUSTOMER 
FOR EACH ROW
BEGIN
INSERT INTO DATA_MAINTAINANCE VALUES(NULL,CONCAT('A ROW IS UPDATED IN CUSTOMER TABLE AT ',DATE_FORMAT(NOW(),' %d-%m-%y %h:%i:%s %p')));
END //
DELIMITER ;
--
DELIMITER //
CREATE TRIGGER TR_AFTER_UPDATE_ACCOUNTS
AFTER UPDATE ON ACCOUNTS 
FOR EACH ROW
BEGIN
INSERT INTO DATA_MAINTAINANCE VALUES(NULL,CONCAT('A ROW IS UPDATED IN ACCOUNTS TABLE AT ',DATE_FORMAT(NOW(),' %d-%m-%y %h:%i:%s %p')));
END //
DELIMITER ;
--DELIMITER //
CREATE TRIGGER TR_AFTER_UPDATE_TRANSACTION 
AFTER UPDATE ON TRANSACTION  
FOR EACH ROW
BEGIN
INSERT INTO DATA_MAINTAINANCE VALUES(NULL,CONCAT('A ROW IS UPDATED IN TRANSACTION  TABLE AT ',DATE_FORMAT(NOW(),' %d-%m-%y %h:%i:%s %p')));
END //
DELIMITER ;
--
DELIMITER //
CREATE TRIGGER TR_AFTER_DELETE_BANK_BRANCH
AFTER DELETE ON BANK_BRANCH 
FOR EACH ROW
BEGIN
INSERT INTO DATA_MAINTAINANCE VALUES(NULL,CONCAT('A ROW IS DELETED IN BANK_BRANCH TABLE AT ',DATE_FORMAT(NOW(),' %d-%m-%y %h:%i:%s %p')));
END //
DELIMITER ;
--
DELIMITER //
CREATE TRIGGER TR_AFTER_DELETE_EMPLOYEE
AFTER DELETE ON EMPLOYEE 
FOR EACH ROW
BEGIN
INSERT INTO DATA_MAINTAINANCE VALUES(NULL,CONCAT('A ROW IS DELETED IN EMPLOYEE TABLE AT ',DATE_FORMAT(NOW(),' %d-%m-%y %h:%i:%s %p')));
END //
DELIMITER ;
--
DELIMITER //
CREATE TRIGGER TR_AFTER_DELETE_DEPARTMENT
AFTER DELETE ON DEPARTMENT 
FOR EACH ROW
BEGIN
INSERT INTO DATA_MAINTAINANCE VALUES(NULL,CONCAT('A ROW IS DELETED IN DEPARTMENT TABLE AT ',DATE_FORMAT(NOW(),' %d-%m-%y %h:%i:%s %p')));
END //
DELIMITER ;
--
DELIMITER //
CREATE TRIGGER TR_AFTER_DELETE_CUSTOMER
AFTER DELETE ON CUSTOMER 
FOR EACH ROW
BEGIN
INSERT INTO DATA_MAINTAINANCE VALUES(NULL,CONCAT('A ROW IS DELETED IN CUSTOMER TABLE AT ',DATE_FORMAT(NOW(),' %d-%m-%y %h:%i:%s %p')));
END //
DELIMITER ;
--
DELIMITER //
CREATE TRIGGER TR_AFTER_DELETE_ACCOUNTS
AFTER DELETE ON ACCOUNTS 
FOR EACH ROW
BEGIN
INSERT INTO DATA_MAINTAINANCE VALUES(NULL,CONCAT('A ROW IS DELETED IN ACCOUNTS TABLE AT ',DATE_FORMAT(NOW(),' %d-%m-%y %h:%i:%s %p')));
END //
DELIMITER ;
--DELIMITER //
CREATE TRIGGER TR_AFTER_DELETE_TRANSACTION 
AFTER DELETE ON TRANSACTION  
FOR EACH ROW
BEGIN
INSERT INTO DATA_MAINTAINANCE VALUES(NULL,CONCAT('A ROW IS DELETED IN TRANSACTION  TABLE AT ',DATE_FORMAT(NOW(),' %d-%m-%y %h:%i:%s %p')));
END //
DELIMITER ;

