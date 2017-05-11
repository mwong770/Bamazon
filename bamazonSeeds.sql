
USE Bamazon;

INSERT INTO products (productName, departmentName, price, stockQuantity) VALUES 
   ("14K Solid Gold Necklace", "Jewelry", 1149.00, 20),
   ("14K Gold Earrings", "Jewelry", 149.99, 20),
   ("The Hundredth Queen", "Book", 4.99, 50),
   ("Slow Cooker Recipes", "Book", 12.78, 50),
   ("Goodnight Moon", "Book", 4.49, 50),
   ("Dear Zoo: A Lift-the-Flap Book", "Book", 8.99, 50),
   ("Fitbit Blaze", "Electronics", 199.95, 25),
   ("Oculus Rift - Virtual Reality Headset", "Electronics", 499.99, 10),
   ("Apple Smart Watch", "Electronics", 321.99, 10),
   ("Mega Bloks 80-Piece", "Toys", 13.88, 100)
;

INSERT INTO departments (departmentName, overHeadCosts) VALUES 
   ("Book","3000.00"),
   ("Electronics","2000.00"),
   ("Jewelry","2500.00"),
   ("Toys","1000.00")
;
