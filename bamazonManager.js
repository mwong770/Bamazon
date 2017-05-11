
var mysql = require("mysql");
var cliTable = require('cli-table');
var prompt = require("prompt");
var inquirer = require("inquirer");
var colors = require("colors/safe");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "See Notes on Bootcamp Spot",
  database: "Bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  console.log(colors.rainbow("\n*******************WELCOME TO BAMAZON MANAGER VIEW!*******************\n"));
});

//prompts user to select action
function actionPrompt() {
    inquirer.prompt([
        {
          name: "action",
          message: colors.blue("What would you like to do?"),
          type: "list",
          choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product", "Exit App"]
        }
      ]).then(function(response) {
        switch (response.action) {
            case "View Products for Sale":
                viewProducts();
                break;
            case "View Low Inventory":
                viewLowInventory();
                break;
            case "Add to Inventory":
                addInventory();
                break;
            case "Add New Product":
                addProduct();
                break;
            case 'Exit App':
                process.exit();
                break;
            default:
                console.log(colors.red("Sorry there was an error. Try again."));
                prompt();
        }
    });
}

//displays products for sale
function viewProducts() {
    connection.query("SELECT * FROM products", function(err, results) {
        if (err) throw err;
        console.log("\n" + colors.yellow("---------------------PRODUCTS FOR SALE---------------------") + "\n");
        var table = new cliTable({ head: ["ID", "Item", "Price", "Quantity"] });
        for (var i = 0; i < results.length; i++) {
            table.push([results[i].id, results[i].productName, results[i].price, results[i].stockQuantity]);
        }
        console.log(table.toString() + "\n");
        actionPrompt();
    });
}

//displays low inventory
function viewLowInventory() {
    connection.query("SELECT * FROM products WHERE stockQuantity < 5", function(err, results) {
        if (err) throw err;
        console.log("\n" + colors.yellow("---------------------LOW INVENTORY PRODUCTS---------------------") + "\n");
        var table = new cliTable({ head: ["ID", "Item", "Price", "Quantity"] });
        for (var i = 0; i < results.length; i++) {
            table.push([results[i].id, results[i].productName, results[i].price, results[i].stockQuantity]);
        }
        console.log(table.toString() + "\n");
        actionPrompt();
    });
}

//adds quantity to inventory
function addInventory() {
    prompt.start();
    prompt.get([
        {
            name: "id",
            description: colors.blue("What is the product id of the item you'd like to add to?"),
            type: "integer",
            required: true
        },
        {
            name: "quantity",
            description: colors.blue("How many units would you like to add?"),
            type: "integer",
            required: true
        }
    ], function (err, response) {
        if (err) throw err;
        connection.query("SELECT id FROM products", function(err, ids) {
            var idArray = [];
            for (var i = 0; i < ids.length; i++) {
                idArray.push(ids[i].id);
            }
            //if id doesn't exist, display message
            if (idArray.indexOf(response.id) === -1) {
                console.log (colors.red("Oops. We don't have an item with that id. Please try again."));
                addInventory();
            }
            //if id exits, complete order
            else {
                connection.query("SELECT * FROM products WHERE ?" , {id: response.id}, function(err, itemInfo) {
                    if (err) throw err;
                    //updates database with new quantity
                    var quantity = response.quantity;
                    var updatedQuantity = itemInfo[0].stockQuantity + quantity;
                    connection.query("UPDATE products SET stockQuantity = ? WHERE id = ?", [updatedQuantity, itemInfo[0].id], function(err, response) {
                        if (err) throw err;
                        console.log(colors.green("You have successfulled added " + quantity + " units of " + itemInfo[0].productName + ".\n"));
                        //asks if user wants to add to more inventory
                        inquirer.prompt([
                            {
                                type: "confirm",
                                message: colors.blue("Would you like to add units to another item?"),
                                name: "confirm"
                            }
                        ]).then(function(user) {
                            if (user.confirm) {
                                addInventory();
                            }
                            else {
                                actionPrompt();
                            }
                        });
                    });//ends connection.query("UPDATE...
                });//ends connection.query("SELECT *
            }//ends else { connection.query("SELECT * 
        });//ends connection.query("SELECT id
    });//ends ], function (err, response) 
}//ends addInventory()

//adds new product to inventory
function addProduct() {
    prompt.start();
    prompt.get([
        {
            name: "name",
            description: colors.blue("What item would you like to add?"),
            type: "string",
            required: true
        },
        {
            name: "department",
            description: colors.blue("In what department would you like to place this item?"),
            type: "string"
        },
        {
            name: "price",
            description: colors.blue("What is the price of this item?"),
            type: "number",
            required: true
        },
        {
            name: "quantity",
            description: colors.blue("How many units are there of this item?"),
            type: "integer"
        }
    ], function (err, request) {
          if (err) throw err;
          connection.query("INSERT INTO products SET ?", [{
                productName: request.name,
                departmentName: request.department,
                price: request.price,
                stockQuantity: request.quantity}
          ],function(err, response) {
              if (err) throw err;
              console.log(colors.green("You have successfully added " + request.name + " to the inventory."));
              //asks if user wants to add another item
                  inquirer.prompt([
                      {
                          type: "confirm",
                          message: colors.blue("Would you like to add another item?"),
                          name: "confirm"
                      }
                  ]).then(function(user) {
                        if (user.confirm) {
                            addProduct();
                        }
                        else {
                            actionPrompt();
                        }
                  });
          });//ends connection.query
    });//ends function (err, request)
}//ends addProduct()

//starts app
//setTimeout so prompt displays after connected message
setTimeout(actionPrompt, 500);


