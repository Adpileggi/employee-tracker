const inquirer = require('inquirer');
const fs = require('fs')
require('console.table')
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: process.env.DB_user,
        password: process.env.DB_password,
        // make database
        database: process.env.DB_name
    },
    console.log(`Connected to the employee_db database`)
);

const prompt = require('./prompts/prompts')
const { displayDept, displayRole, displayEmployee } = require('./prompts/query')

function startMenu() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'options',
                message: 'Please select an option.',
                choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Exit App']
            }
        ])
        .then((data) => {
            console.log(data)
            console.log(data.options)
            if (data.options === 'View all departments') {
                // make get route here
                displayDept(db, startMenu)
            } else if (data.options === 'View all roles') {
                // make get route here
                displayRole(db, startMenu)
            } else if (data.options === 'View all employees') {
                // make get route here
                displayEmployee(db, startMenu)
            } else if (data.options === 'Add a department') {
                prompt.addDept(db, startMenu)
            } else if (data.options === 'Add a role') {
                prompt.addRole(db, startMenu)
            } else if (data.options === 'Add an employee') {
                prompt.addEmployee(db, startMenu)
            } else if (data.options === 'Update an employee role') {
                 prompt.updateEmployee(db, startMenu) }
            else {
                db.end()
                process.exit(0) //Exit app
            }
        })
}

startMenu()