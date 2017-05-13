
# Bamazon

A Node.js & MySQL command line application that mimics an Amazon online retailer.

 - Customers can make purchases. (bamazonCustomer.js)

 - Managers can view all or low inventory products for sale, add new products, or add units to existing products. (bamazonManager.js)

 - Supervisors can view product sales by department or create new departments. (bamazonSupervisor.js)

## Table of Contents

- [:dvd: Installation](#installation)
- [:bar_chart: MySQL Configuration](#mysql-configuration)
- [:smile: Usage](#usage)
- [:credit_card: Customer View](#customer-view)
- [:clipboard: Manager View](#manager-view)
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

## :smile: Usage

* Run bamazonCustomer.js to see the customer view.
* Run bamazonManager.js to see the manager view.
* Run bamazonSupervisor.js to see the supervisor view.

## :credit_card: Customer View





## :clipboard: Manager View





## :briefcase: Supervisor View 




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
