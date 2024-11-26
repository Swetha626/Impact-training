-- Basic SQL query
create database task;
use task;
create table emp(
empId int,
empName varchar(30),
empSalary int,
empLoaction varchar(30),
deptId int,
doj date); 

insert into emp values
(101, 'Karthi',25000,'Chennai',001,'2024-10-16'),
(102, 'Gokul',40000,'Chochin',002,'2022-11-13'),
(103, 'Ram',30000,'Chennai',001,'2023-06-27'),
(104, 'Monisha',15000,'Bangalore',003,'2024-11-13');
insert into emp values(105,'Manoj',50000,'Bengalore',004,'2021-06-23');
insert into emp values(102,'Gokul',40000,'Cochin',004,'2022-12-12','Yes');
insert into emp values(106,'Sindhu',15000,'Bengalore',005,'2019-05-13','No');

alter table emp add Manager varchar(30);
set SQL_SAFE_UPDATES=0;
update emp set Manager = 'Yes' where empId=101;
update emp set Manager = 'No' where empId=102;
update emp set Manager = 'Yes' where empId=103;
update emp set Manager = 'Yes' where empId=104;
update emp set Manager = 'No' where empId=105;


create table department(
deptId int,
deptName varchar(30),
deptcount int );

insert into department values
(001,'D&A',20),
(002,'ES', 10),
(003,'IAS',10),
(004,'Testing',15);
insert into department values(005,'Bench',5);


create table project
(
projectId int,
projectName varchar(30),
empId int);

insert into project values
(111,'VM Ware',101),
(112,'IBM',101),
(113,'Azure',103),
(114,'SP',104),
(115,'IBM',105);

-- Basic Queries

-- Write a query to display all rows and columns from the employees table
select * from emp;
select * from department;

-- Retrieve only the name and salary of all employees from the employees table.
select empName, empSalary from emp;

-- Write a query to find all employees whose salary is greater than 50,000.
select * from emp where empSalary>25000;

-- List all employees who joined the company in the year 2020.
select * from emp where extract(year from doj)=2024;

-- Retrieve the details of employees whose names start with the letter 'A'.
select * from emp where empName like 'M%';

-- Aggregate Functions

-- Write a query to calculate the average salary of all employees.
select AVG(empSalary) as avgSalary from emp;

-- Find the total number of employees in the company.
select count(*) as totalCount from emp;

-- Write a query to find the highest salary in the employees table.
select Max(empSalary) as highestSalary from emp;

-- Calculate the total salary paid by the company for all employees.
select sum(empSalary) as total_salary from emp;

-- Find the count of employees in each department.
select deptId, count(*) as emp_count from emp group by deptId;

-- Joins

-- Write a query to retrieve employee names along with their department names (using employees and departments tables).
select e.empName, d.deptName from emp as e inner join department as d on e.deptId=d.deptId; 

-- List all employees who have a manager (self-join on employees table).
select empName from emp where Manager ='yes';

-- Find the names of employees who are working on multiple projects (using employees and projects tables).
 select e.empName from emp e join project p on e.empId=p.empId group by e.empname having count(distinct p.projectId)>1;

-- Write a query to display all projects and the employees assigned to them.
select d.deptName from department as d right join employee as e on d.deptId=e.deptId group by d.deptName;  

-- Retrieve the names of employees who do not belong to any department.
-- select e.empName,d.empId,d.deptName from emp as e join department d on e.deptId=d.deptId where d.deptName='Bench'; 

-- Subqueries

-- 1.  Write a query to find the employees with the second-highest salary.
select empName, max(empSalary) as secondHighest from emp where empSalary<(select max(empsalary) from emp); 


-- 2. Retrieve the names of employees whose salary is above the department average salary.

-- 3. Find employees who earn more than the average salary of the entire company.

-- 4. Write a query to find the department with the highest number of employees.
select deptName, count(*) as num_emp from department group by deptName order by num_emp > 1; 

-- 5. List all employees who work in a department located in 'New York'.
select empName from emp where empLoaction ='Chennai';
