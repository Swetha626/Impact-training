-- Day 3
-- Procedure and View
use store;
alter table Product add expiryDate date;
update  Product set expiryDate = '2023-11-12' where ProductId=101;
update  Product set expiryDate = '2026-06-06' where ProductId=102;
update  Product set expiryDate = '2026-11-03' where ProductId=103;
update  Product set expiryDate = '2029-04-01' where ProductId=104;
update  Product set expiryDate = '2029-12-19' where ProductId=105;
update  Product set expiryDate = '2025-06-27' where ProductId=106;

DELIMITER &&
create procedure expDate(in expProduct numeric)
begin
select * from Product where year(expiryDate)=expProduct;
end &&
Delimiter ;
drop procedure expDate;
call expDate(2029);

CREATE VIEW HighestPrice
as
SELECT * FROM  Product where Price=(SELECT MAX(Price) from Product);
SELECT * from HighestPrice;
