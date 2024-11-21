-- Day 2
-- CREATE TRIGGERS
INSERT INTO Product values(105,'Airpod',20,2500);
CREATE TABLE ItemCount
(product_count int DEFAULT 0);
INSERT INTO ItemCount
(product_count)values (0);
DELIMITER &&
CREATE Trigger Count_Item
AFTER INSERT ON Product 
for each row
BEGIN
UPDATE ItemCount
SET product_count=product_count+1;
end &&
DELIMITER ;
set SQL_SAFE_UPDATES=0;
INSERT INTO Product (ProductId,ProductName,ProductQty,Price)values(105,'Watch',70,2800),(106,'Airpod',20,2500);
select * from ItemCount;