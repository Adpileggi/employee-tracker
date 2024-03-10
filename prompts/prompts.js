

function addDept() {
    inquirer
        .prompt ([
            {
                type: 'input',
                name: 'add-dept',
                message: 'Please provide the name of the department'
            }
        ]).then((data) => {
            console.log(data)
        })
}

function addRole() {
    inquirer
        .prompt ([
            {
                type: 'input',
                name: 'role-name',
                message: 'Please provide the name of the role'
            },
            {
                type: 'input',
                name: 'role-salary',
                message: `Please provide the role's salary`
            },
            {
                type: 'list',
                name: 'role-dept',
                message: `Please provide the role's department`
                // choices: an array of all the departments
            }
        ]).then((data) => {
            console.log(data)
        })
}

function addEmployee() {
    inquirer
        .prompt ([
            {
                type: 'input',
                name: 'employee-first',
                message: `Please provide the employee's first name`
            },
            {
                type: 'input',
                name: 'employee-last',
                message: `Please provide the employee's last name`
            },
            {
                type: 'list',
                name: 'employee-role',
                message: `Please provide the employee's role`
                // choices: an array of all the roles
            },
            {
                type: 'list',
                name: 'employee-mgr',
                message: `Please provide the employee's manager`
                // choices: an array of all the managers
            },
        ]).then((data) => {
            console.log(data)
        })
}

function updateEmployee() {
    inquirer
        .prompt ([
            {
                type: 'list',
                name: 'update_role',
                message: `Please provide the employee's new role`
                // choices: an array of all the roles
            },
        ]).then((data) => {
            console.log(data)
        })
}

module.exports = {
    addDept, addRole, addEmployee, updateEmployee
}