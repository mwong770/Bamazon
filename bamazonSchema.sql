CREATE DATABASE Bamazon;

USE Bamazon;

CREATE TABLE products (
   id INT AUTO_INCREMENT NOT NULL,
   productName VARCHAR(100) NOT NULL,
   departmentName VARCHAR(100),
   price DECIMAL(10,2) NOT NULL,
   stockQuantity INT DEFAULT 0,
   productSales DECIMAL(15,2) DEFAULT 0,
   PRIMARY KEY(id)
);

CREATE TABLE departments (
   deptID INT AUTO_INCREMENT NOT NULL,
   departmentName VARCHAR(100),
   overHeadCosts DECIMAL(10,2),
   totalSales DECIMAL(10,2) DEFAULT 0,
   primary key(deptID)
);


