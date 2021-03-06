//A drawback of user-defined functions is that they cannot execute transactions. In other words, inside a user-defined function, you cannot start a 
//transaction, and commit or rollback it.

drop table if exists accounts;

create table accounts (
    id int generated by default as identity,
    name varchar(100) not null,
    balance dec(15,2) not null,
    primary key(id)
);

insert into accounts(name,balance)
values('Bob',10000);

insert into accounts(name,balance)
values('Alice',10000);


// ================================================================== PROCEDURE ========================================================================================

create or replace procedure transfer(
    sender int,
    receiver int, 
    amount dec
 )
 language plpgsql    
 as $$
 begin
     //-- subtracting the amount from the sender's account 
     update accounts 
     set balance = balance - amount 
     where id = sender;
 
     //-- adding the amount to the receiver's account
     update accounts 
     set balance = balance + amount 
     where id = receiver;
 
     commit;
 end;$$



call transfer(1,2,1000);

//===================================================================PROCEDURE =====================================================================================
/* Creating StudentRecord table */
CREATE TABLE StudentRecord (
    RegID SERIAL PRIMARY KEY,
    Name 	varchar(100) NOT NULL,
    Age 		varchar(3),
    Gender 		varchar(10),
    City 		varchar(100)
);

/* Inserting records in StudentRecord table */
INSERT INTO StudentRecord 
    (Name, Age, Gender , City) 
  VALUES
    ('George','20', 'Male', 'London'),
    ('Emma','22', 'Female', 'Manchester'),
    ('Harry','15', 'Male', 'Cambridge'),
    ('Ava','17', 'Female', 'Manchester'),
    ('Olivia','25', 'Female', 'Manchester'),
    ('Thomas','23', 'Male', 'Cambridge');

/* Displaying all records from the table */
SELECT * FROM StudentRecord;

/* Creating stored procedure to insert data */
CREATE PROCEDURE DataIn(IN _name text, 
                        IN _age text DEFAULT NULL, 
                        IN _gender text DEFAULT NULL, 
                        IN _city text DEFAULT NULL) 
LANGUAGE plpgsql 
AS $$ 
BEGIN 
  INSERT INTO StudentRecord 
      (Name, Age, Gender , City) 
    VALUES
      (_name, _age, _gender, _city);
END 
$$;

/* Calling stored procedure to insert record */
CALL DataIn('Ali', '18', 'Male', 'Lahore');

/* Displaying all records to verify insertion */
SELECT * FROM StudentRecord;

//====================================================================================================================================================

CREATE OR REPLACE PROCEDURE sp_test ()
LANGUAGE plpgsql
AS $$
BEGIN
INSERT INTO proc_test (company_id, name, address, phone, country) VALUES (1, 'PQR', 'Mumbai', '1234567890', 'India');
INSERT INTO proc_test (company_id, name, address, phone, country) VALUES (2, 'ABC', 'Pune', '1234567890', 'India');
COMMIT;
INSERT INTO proc_test (company_id, name, address, phone, country) VALUES (3, 'XYZ', 'Pune', '1234567890', 'India');
ROLLBACK;
END;
$$;

CREATE OR REPLACE PROCEDURE SP_TEST()
LANGUAGE plpgsql
AS 