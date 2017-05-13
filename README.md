
# Bamazon

A Node.js & MySQL command line application that mimics an Amazon online retailer.

 - Customers can make purchases. (bamazonCustomer.js)

 - Managers can view all or low inventory products for sale, add new products, or add units to existing products. (bamazonManager.js)

 - Supervisors can view product sales by department or create new departments. (bamazonSupervisor)

## Table of Contents

- [Installation](#installation)
- [MySQL Configuration](#mysql-configuration)
- [Usage](#usage)
- [Customer View](#customer-view)
- [Manager View](#manager-view)
- [Supervisor View](#supervisor-view)
- [Technologies Used](#technologies-used)
- [Questions or Comments](#questions-or-comments)

## Installation

* Install [Node.js](https://nodejs.org/en/download/), [MySQL](https://www.mysql.com/downloads/), and [MySQL Workbench](https://dev.mysql.com/downloads/workbench/) if you don't have them.
* Clone the Bamazon repository to your local computer.
* On your terminal, navigate to the folder where the repository is located.
* Run the command `npm install` to download all required dependencies.

## MySQL Configuration

* In bamazonCustomer.js, find the following code. 

![database setup](/screenshots/Database_Connection.png)

* Comment out the database (unless you already created it in MySQL Workbench), and enter your password, if you have one.
* Run the code you just modified in the terminal. 
* Uncomment out the database. (You'll need to connect to the database later.)
* Now that you are connected to MySQL Workbench, run bamazonSchema.sql to create the database and tables, then bamazonSeeds.sql to populate the tables.

## Usage

* Run bamazonCustomer.js to see the customer view.
* Run bamazonManager.js to see the manager view.
* Run bamazonSupervisor.js to see the supervisor view.

## Customer View
## Manager View
## Supervisor View


## Technologies Used

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

## Questions or Comments

If you have any questions or comments, feel free to message me on [LinkedIn](https://www.linkedin.com/in/maria-wong-116119113/).

Thanks for checking out Bamazon!
