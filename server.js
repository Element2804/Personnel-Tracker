const inquirer = require("inquirer")
const mysql = require("mysql2")
require("dotenv").config();
// const cTable = require('console.table');

const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const connection = mysql.createConnection(
    {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
},
// console.log("test")
);

connection.connect((err) => {
    if (err) throw (err)
   

  start();
});

function start() {
    inquirer
      .prompt({       
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
          "View Employees",
          "View Roles",
          "View Departments",
          "Add Employee",
          "Add Role",
          "Add Department",
          "Update Employee Role",
          "Remove Employee",
          "Remove Department",
          "Remove Role",
          "Quit",
        ],
      })
      .then((answer) => {
            switch (answer.action) {
          case "View Employees":
            viewEmployees();
            break;
          case "View Roles":
            viewRoles();
            break;
          case "View Departments": 
            viewDepartments();
            break;
          case "Add Employee":
          addEmployee();
            break;
          case "Add Role":
          addRole();
          break;
 

        case "Quit":
          connection.end();
          break;
      }
    });
}

function viewEmployees() {
    const query = `SELECT * FROM employees
            `;
    connection.query(query, (err, res) => {
      if (err) throw err;
      console.table(res);
      start();
    });
  }

function viewRoles() {
    const query = `SELECT * FROM role
            `;
    connection.query(query, (err, res) => {
      if (err) throw err;
      console.table(res);
      start();
    });
  }
