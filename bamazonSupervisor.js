
var mysql = require("mysql");
var cliTable = require("cli-table");
var prompt = require("prompt");
var inquirer = require("inquirer");
var colors = require("colors/safe");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Cr051998",
    database: "Bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  console.log(colors.rainbow("\n**************WELCOME TO BAMAZON SUPERVISOR VIEW!**************"));
});

//prompts user to select action
function actionPrompt() {
    inquirer.prompt([
        {
          name: "action",
          message: colors.blue("What would you like to do?"),
          type: "list",
          choices: ["View Product Sales by Department", "Create New Department", "Exit App"]
        }
      ]).then(function(response) {
        switch (response.action) {
            case "View Product Sales by Department":
                viewDeptSales();
                break;
            case "Create New Department":
                addDept();
                break;
            case "Exit App":
                process.exit();
                break;
            default:
                console.log(colors.red("Sorry there was an error. Try again."));
                prompt();
        }
    });
}

//shows department info, including total profit
function viewDeptSales() {
	connection.query("SELECT * FROM departments", function(err, results) {
        if (err) throw err;
        console.log("\n" + colors.yellow("---------------------PRODUCTS FOR SALE---------------------") + "\n");
        var table = new cliTable({ head: ["ID", "Department", "OverHead Costs", "Total Sales", "Total Profit"] });
        for (var i = 0; i < results.length; i++) {
            table.push([results[i].deptID, results[i].departmentName, results[i].overHeadCosts, results[i].totalSales, results[i].totalSales - results[i].overHeadCosts]);
        }
        console.log(table.toString() + "\n");
        actionPrompt();
    });
}

//adds department
function addDept() {
	prompt.start();
	prompt.get([
        {
            name: "department",
            description: colors.blue("What department would you like to add?"),
            type: "string",
            required: true
        },
        {
            name: "overhead",
            description: colors.blue("What are the overhead costs for this department?"),
            type: "number"
        }
    ], function (err, request) {
          	if (err) throw err;
          	connection.query("INSERT INTO departments SET ?", [
          		{
                	departmentName: request.department,
                	overHeadCosts: request.overhead
            	}
          	],function(err, response) {
              	if (err) throw err;
              	console.log(colors.green("You have successfully added " + request.department + " as a department."));
              	//asks if want to add another department
                  	inquirer.prompt([
                      	{
                          	type: "confirm",
                          	message: colors.blue("Would you like to add another department?"),
                          	name: "confirm"
                      	}
                  	]).then(function(user) {
                        if (user.confirm) {
                            addDept();
                        }
                        else {
                            actionPrompt();
                        }
                  	});
          	});//ends connection.query
    });//ends function (err, request)
}//ends addDept()

//starts app
//setTimeout so prompt displays after connected message
setTimeout(actionPrompt, 500);


