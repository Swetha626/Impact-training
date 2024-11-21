-- Day1
-- CREATE DATABASE
CREATE DATABASE Store;
USE Store;

-- CREATE TABLE
CREATE TABLE Product(
ProductId int,
ProductName varchar(30),
ProductQty int,
Price int
);


-- INSERT VALUES
INSERT INTO Product values
(101,'Laptop',40,50000),
(102,'Mobile',60,35000),
(103,'Speaker',25,2000),
(104,'Headphones',30,1500);


-- CREATE STORED PROCEDURE
DELIMITER &&
CREATE procedure getDetails(IN Product_Id int)
BEGIN
select ProductId, ProductName,ProductQty, Price from Product where ProductId=Product_Id;
end &&
DELIMITER ;
call getDetails(103);


-- CREATE FUNCTION
DELIMITER &&
CREATE FUNCTION getPrice(price int)
RETURNS varchar(30)
deterministic
begin
DECLARE Products varchar(30);
SELECT ProductName into Products from Product where Price > price;
RETURN Products;
END &&
Delimiter ;
SELECT getPrice(2000);

