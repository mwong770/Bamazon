
//for info on npm cli-table: https://www.npmjs.com/package/cli-table
//for info on npm prompt: https://www.npmjs.com/package/prompt

//npm packages
var mysql = require("mysql");
//renders tables on console 
var cliTable = require('cli-table');
//prompts command line user for info
var prompt = require("prompt");
//prompts command line user for info (allows confirm type, prompt yes/no validator not as appealing)
var inquirer = require("inquirer");
//npm package to display colors in console - supported by prompt npm package
var colors = require("colors/safe");

//creates the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "See Bootcamp Notes",
  database: "Bamazon"
});

//connects to the mysql server and sql database
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    //placing this here moves it's display to after "connected as id "
    console.log(colors.rainbow("\n*******************WELCOME TO BAMAZON!*******************"));
});

//displays items available for sale in table
function itemsAvailable() {
    connection.query("SELECT * FROM products", function(err, results) {
        if (err) throw err;
        console.log("\n" + colors.yellow("---------------------ITEMS FOR SALE---------------------") + "\n");
        var table = new cliTable({ head: ["ID", "Item", "Price"] });
        for (var i = 0; i < results.length; i++) {
        	  table.push([results[i].id, results[i].productName, results[i].price.toFixed(2)]);
        }
        console.log(table.toString() + "\n");
        promptOrder();
    });
}

//prompts user to enter their order and calls completeOrder()
function promptOrder() {
    prompt.start();
    prompt.get([
        {
            name: "id",
            description: colors.blue("What is the product id of the item you'd like to purchase?"),
            type: "integer",
            required: true
        },
        {
            name: "quantity",
            description: colors.blue("What quantity would you like to purchase?"),
            type: "integer",
            conform: function(id) { if (id < 1) {
              console.log(colors.red("Please enter a number greater than 0."));
            } else
              return id;
            },
            required: true
        }
    ], function (err, request) {
          if (err) throw err;
          completeOrder(request);
    });
}//ends promptOrder()

//fulfills order after checking if enough in stock
function completeOrder(request) {
    //checks if selected id in database
    // - without this step, choosing a nonexisting id throws error and exits user from app
    connection.query("SELECT id FROM products", function(err, response) {
        var idArray = [];
        for (var i = 0; i < response.length; i++) {
            idArray.push(response[i].id);
        }
        //if id doesn't exist, display message
        if (idArray.indexOf(request.id) === -1) {
            console.log (colors.red("Oops. We don't have an item with that id. Please try again."));
            promptOrder();
        }
        //if id exits, complete order
        else {
            connection.query("SELECT * FROM products WHERE ?" , {id: request.id}, function(err, itemInfo) {
                if (err) throw err;
                //if ordered < 0
                if (request.quantity < 1) {
                    console.log(colors.red("You must select a quantity greater than 0. Please try ordering again."));
                    additionalOrderPrompt();
                }
                //if enough in stock, updates database and displays purchase cost
                else if (itemInfo[0].stockQuantity >= request.quantity) {
                    var updatedQuantity = itemInfo[0].stockQuantity - request.quantity;
                    var totalCost = itemInfo[0].price * request.quantity;
                    connection.query("UPDATE products SET ? WHERE ?", [
                        {
                            stockQuantity: itemInfo[0].stockQuantity - request.quantity,
                            productSales: itemInfo[0].productSales + totalCost
                        }, 
                        {
                            id: itemInfo[0].id
                        }
                    ], function(err, response) {
                        if (err) throw err;
                        console.log(colors.green("Thanks for your order. Your total cost is $" + totalCost.toFixed(2) + "\n"));
                        additionalOrderPrompt();
                    });
                    connection.query("UPDATE departments SET totalSales = totalSales + ? WHERE departmentName = ?", [totalCost, itemInfo[0].departmentName], function(err, response) {   
                        if (err) throw err;
                    });
                }
                //if not enough in stock
                else {
                    console.log(colors.red("Sorry, we only have " + itemInfo[0].stockQuantity + " of the " + itemInfo[0].productName + " in stock. Please try ordering again.\n"));
                    additionalOrderPrompt();
                }
            });//ends connection.query("SELECT...
        }//ends else { connection.query
    });//ends connection.query("SELECT id
}//ends completeOrder()

//determines if user wants to place a new order
function additionalOrderPrompt() {
    inquirer.prompt([
        {
            type: "confirm",
            message: colors.blue("Would you like to see our items for sale?"),
            name: "confirm"
        }
    ]).then(function(user) {
          //if confirm, shows items available
          if (user.confirm) {
              itemsAvailable();
          }
          //if not, displays message
          else {
              console.log(colors.rainbow("Thanks for visiting Bamazon. Come again soon!"));
              //instructs Node.js to terminate the process
              process.exit();
          }
    });
}//ends additionalOrderPrompt()

//begins app
itemsAvailable();













