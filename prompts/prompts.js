const inquirer = require('inquirer');

function addDept(db, startMenu) {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'adddept',
                message: 'Please provide the name of the department'
            }
        ]).then((data) => {
            db.query(`INSERT INTO department (name) VALUES ("${data.adddept}");`, function (err, results) {
                if (err) {
                    console.log(err);
                }
                console.log(results);
                startMenu();
            })
        })
}

function addRole(db, startMenu) {

    let deptNameArray = [];

    db.query(`SELECT * FROM department;`, function (err, results) {

        for (let i = 0; i < results.length; i++) {
            deptNameArray.push({
                name: results[i].name,
                value: results[i].id
            })
        }


        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'roleName',
                    message: 'Please provide the name of the role'
                },
                {
                    type: 'input',
                    name: 'roleSalary',
                    message: `Please provide the role's salary`
                },
                {
                    type: 'list',
                    name: 'roleDept',
                    message: `Please provide the role's department`,
                    choices: deptNameArray
                }
            ]).then((data) => {
                console.log(data)

                db.query(`INSERT INTO role (title, salary, department_id) VALUES ("${data.roleName}", ${data.roleSalary}, ${data.roleDept})`, function (err, results) {
                    if (err) {
                        console.log(err);
                    }
                    console.log(results);
                    startMenu();
                })
            })
    })
}

function addEmployee(db, startMenu) {

    let roleTitleArray =[];

    let employeeLastNameArray =[];

    db.query(`SELECT * FROM role`, function (err, results) {

        for (let i = 0; i < results.length; i++) {
            roleTitleArray.push({
                name: results[i].title,
                value: results[i].id
            })
        }


        db.query(`SELECT * FROM employee where manager_id  IS NULL;`, function (err, results) {
            for (let i = 0; i < results.length; i++) {
                employeeLastNameArray.push({
                    name: results[i].last_name,
                    value: results[i].id
                })
            }

            inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'employeeFirst',
                        message: `Please provide the employee's first name`
                    },
                    {
                        type: 'input',
                        name: 'employeeLast',
                        message: `Please provide the employee's last name`
                    },
                    {
                        type: 'list',
                        name: 'employeeRole',
                        message: `Please provide the employee's role`,
                        choices: roleTitleArray
                    },
                    {
                        type: 'list',
                        name: 'employeeMgr',
                        message: `Please provide the employee's manager`,
                        choices: employeeLastNameArray
                    },
                ]).then((data) => {
                    console.log(data)

                    db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${data.employeeFirst}', '${data.employeeLast}', ${data.employeeRole}, ${data.employeeMgr})`, function (err, results) {
                        if (err) {
                            console.log(err);
                        }
                        console.log(results);
                        startMenu();
                    })
                })
        })
    })
}

function updateEmployee() {
    inquirer
        .prompt([
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