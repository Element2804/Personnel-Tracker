const inquirer = require("inquirer")
const mysql = require("mysql2")
require("dotenv").config();


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
          case "Add Department":
          addDepartment();
          break;
          case "Update Employee Role":
          updateEmployeeRole();
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
     console.table(res)
      start();
    });
  }

function viewRoles() {
    const query = `SELECT * FROM role
            `;
    connection.query(query, (err, res) => {
      if (err) throw err;
    console.table(res)
      start();
    });
  }

function viewDepartments() {
    const query = `SELECT * FROM department
            `;
    connection.query(query, (err, res) => {
      if (err) throw err;
     console.table(res)
      start();
    });
  }
//adds employee
  function addEmployee() {
    inquirer
      .prompt([
        {
          name: "first_name",
          type: "input",
          message: "What is the employee's first name?",
        },
        {
          name: "last_name",
          type: "input",
          message: "What is the employee's last name?",
        },
        {
          name: "role_id",
          type: "input",
          message: "Enter the employees role by #1-8",
         },
        {
          name: "manager_id",
          type: "input",
          message: "Is this employee a manager?",
        },
        {
          name: "salary",
          type: "input",
          message: "What is the employee's salary?",
        },
      ])

      .then((answers) => {
       
        connection.query("INSERT INTO employees SET ?",
          {
            first_name: answers.first_name,
            last_name: answers.last_name,
            role_id: answers.role_id,
            manager_id: answers.manager_id
            
          },
         
          (err, res) => {
            if (err) throw err;
            console.log("Employee added successfully!");
            start();
          }
        );
      });
  }
// add roll
  function addRole() { 
      inquirer
         .prompt([
          {
            name: "title",
            type: "input",
            message: "What is the role title?"
          },
          {
            name: "salary",
            type: "input",
            message: "What is the salary of the roll?"
          },
          {
            name: "department_id",
            type: "input",
            message: "Please enter the department from #1-4"
  
          } 
         ])

         .then((answers) => {
       
            connection.query("INSERT INTO role SET ?",
              {
                title: answers.title,
                salary: answers.salary,
                department_id: answers.department_id,
                              
              },
             
              (err, res) => {
                if (err) throw err;
                console.log("Role added successfully!");
                start();
              }
            );
          });
      }

  function addDepartment() { 
      inquirer
         .prompt([
          {
            name: "title",
            type: "input",
            message: "What is the title of the Department?"
          }         
         ])

         .then((answers) => {
       
            connection.query("INSERT INTO department SET ?",
              {
                name: answers.title,
                                            
              },
             
              (err, res) => {
                if (err) throw err;
                console.log("Department added successfully!");
                start();
              }
            );
          });
      }

      function updateEmployeeRole() {
        inquirer
          .prompt([
            {
              name: "emp_id",
              type: "input",
              message: "What is the employee id you want to update?",
            },
            {
              name: "role_id",
              type: "input",
              message: "What is the employee's new role id?",
            },
          ])
          .then((answers) => {
       
            connection.query("UPDATE employees SET role_id = ? WHERE id = ?",
            [answers.role_id, answers.emp_id],
                         
              (err, res) => {
                if (err) throw err;
                console.log("Employee updated successfully!");
                start();
              }
            );
          });
      }