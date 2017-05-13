
# Bamazon

A Node.js & MySQL command line application that mimics an Amazon online retailer.

 - Customers can make purchases. (bamazonCustomer.js)

 - Managers can view all or low inventory products for sale, add new products, or add units to existing products. (bamazonManager.js)

 - Supervisors can view product sales by department or create new departments. (bamazonSupervisor.js)

## Table of Contents

- [:dvd: Installation](#installation)
- [:bar_chart: MySQL Configuration](#mysql-configuration)
- [:crystal_ball: Usage](#usage)
- [:credit_card: Customer View](#customer-view)
- [:ledger: Manager View](#manager-view)
- [:briefcase: Supervisor View](#supervisor-view)
- [:computer: Technologies Used](#technologies-used)
- [:email: Questions or Comments](#questions-or-comments)

## :dvd: Installation

* Install [Node.js](https://nodejs.org/en/download/), [MySQL](https://www.mysql.com/downloads/), and [MySQL Workbench](https://dev.mysql.com/downloads/workbench/) if you don't have them.
* Clone the Bamazon repository to your local computer.
* On your terminal, navigate to the folder where the repository is located.
* Run the command `npm install` to download all required dependencies.

## :bar_chart: MySQL Configuration

* In bamazonCustomer.js, find the following code. 

![database setup](/screenshots/Database_Connection.png)

* Comment out the database (unless you already created it in MySQL Workbench), and enter your password, if you have one.
* Run the code you just modified in the terminal. 
* Uncomment out the database. (You'll need to connect to the database later.)
* Now that you are connected to MySQL Workbench, run bamazonSchema.sql to create the database and tables, then bamazonSeeds.sql to populate the tables.

## :crystal_ball: Usage

* Run bamazonCustomer.js to see the customer view.
* Run bamazonManager.js to see the manager view.
* Run bamazonSupervisor.js to see the supervisor view.


## :credit_card: Customer View


**When bamazonCustomer.js is first run...**
a table of all items for sale is displayed and the user is prompted to choose an item to purchase.

![database setup](/screenshots/Welcome_to_Bamazon.png)


**If the user selects an item id or quantity that does not exist ...**
the user is prompted to enter the id again, enter the quantity again (if they selected 0 or less), or the number of items available is displayed and they are prompted to try ordering again (if the quantity was greater than available).

![database setup](/screenshots/Too_Much_Too_Little.png)


**After the user inputs purchase choices that are available...**
the total cost is displayed and the user is asked if he/should would like to make another purchase.

![database setup](/screenshots/Purchase_Item.png)


**If the user types yes...**
a table of all items for sale is displayed and the user is prompted to choose another item to purchase.

![database setup](/screenshots/Return_To_Items.png)


**If the user types no...**
a thank you message is displayed.

![database setup](/screenshots/Complete_Order.png)


## :ledger: Manager View


**When bamazonManager.js is first run...**
the user is prompted to choose from a list of actions.

![database setup](/screenshots/Manager_Welcome.png)

 
**If the user selects View Products For Sale...**
a table of all products for sale with prices and quantities is displayed.

![database setup](/screenshots/View_Products_For_Sale.png) 


**If the user selects View Low Inventory...**
a table of all products with less than 5 items available with prices and quantities is displayed.

![database setup](/screenshots/View_Low_Inventory.png)


**If the user selects Add To Inventory...**
the user is prompted to enter the number of units to add to an item. If that item does not exit, the user is asked to enter a different item number. After adding inventory, the user is asked if her/she would like to add more inventory. If the user types yes, the user is asked to enter the number of units to add to the item. 

![database setup](/screenshots/Add_To_Inventory.png)


**If the user types No...**
the user is prompted to choose a new action. 

![database setup](/screenshots/Do_Not_Add_Units.png)


**If the user selects Add New Product...**
the user is prompted to enter a description of the item to add, as well as the item's department, price, and quantity. After adding the product, the user is asked if her/she would like to add another product. If the user types yes, the user is asked for the new product's information. If the user types no, the user is prompted to choose a new action.  

![database setup](/screenshots/Add_New_Product.png)


**If the user selects Exit App...**
the application is disconnected.

![database setup](/screenshots/Exit_App.png)


## :briefcase: Supervisor View 

**When bamazonSupervisor.js is first run...**
the user is prompted to choose from a list of actions.

![database setup](/screenshots/Supervisor_Welcome.png)


**If the user selects View Product Sales By Dept...** 
a table of products for sale is displayed showing the the cost and profit of each department.

![database setup](/screenshots/View_Product_Sales.png)


**If the user selects Create New Department...** 
the user is prompted to enter the department name and department overhead cost, then the user is asked if he/she would like to enter a new department. If the user types yes, he/she is asked for the new department information. 

![database setup](/screenshots/Create_New_Dept.png)


**If the user types no...**
the user is prompted to choose a new action. 

![database setup](/screenshots/No_New_Dept.png)


**If the user selects Exit App...**
the application is disconnected.

![database setup](/screenshots/Exit_App2.png)


## :computer: Technologies Used

* Node.js
* MySQL
* MySQL Workbench
* Sublime Text
* Terminal/Gitbash
* Node Modules
	* [mysql](https://www.npmjs.com/package/mysql) 
	* [prompt](https://www.npmjs.com/package/prompt)
	* [inquirer](https://www.npmjs.com/package/inquirer) 
	* [cli-table](https://www.npmjs.com/package/cli-table) 
	* [colors](https://www.npmjs.com/package/colors) 

## :email: Questions or Comments

If you have any questions or comments, feel free to message me on [LinkedIn](https://www.linkedin.com/in/maria-wong-116119113/).

Thanks for checking out Bamazon!
