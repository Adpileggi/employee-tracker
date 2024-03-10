const inquirer = require('inquirer');
const fs = require ('fs')

const prompt = require('../prompts/prompts')

inquirer
    .prompt([
        {
            type: 'list',
            name: 'options',
            message: 'Please select an option.',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
        }
    ])
        .then((data) => {
            console.log(data)
            console.log(data.options)
            if (data.options === 'View all departments') {
                // make get route here
                
            } else if (data.options === 'View all roles') {
                // make get route here
            } else if (data.options === 'View all employees') {
                // make get route here
            } else if (data.options === 'Add a department') {
                prompt.addDept
            } else if (data.options === 'Add a role') {
                prompt.addRole
            } else if (data.options === 'Add an employee') {
                prompt.addEmployee
            } else {prompt.updateEmployee}
        })