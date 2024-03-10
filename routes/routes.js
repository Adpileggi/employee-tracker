const router = require('express').Router();

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Cfh8189Pil!',
        // make database
        database: 'employee_db'
    },
    console.log(`Connected to the employee_db database`)
);

// request to display department table
db.query(`SELECT * FROM department`, function (err, results) {
    console.log(results);
})

// request to display role table
db.query(`SELECT * FROM role`, function (err, results) {
    console.log(results);
})

// request to display employee table
db.query(`SELECT * FROM employee`, function (err, results) {
    console.log(results);
})

// request to add department
db.query(`INSERT INTO department (name) VALUES (${data.add-dept})`, function (err, results) {
    if (err) {
        console.log(err);
    }
    console.log(results);
})

// request to add role
    // to find dept id do arry.find(el = el.deptid === id)
    // deptarray.indexof(dept id) + 1
db.query(`INSERT INTO role (title, salary, department_id) VALUES (${data.role.name}, ${data.role-salary}, ${data.role-dept[i]})`, function (err, results) {
    if (err) {
        console.log(err);
    }
    console.log(results);
})

// request to add employee
db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (${data.employee-first}, ${data.employee-last}, ${data.employee-role[i]}, ${data.employee-mgr})`, function (err, results) {
    if (err) {
        console.log(err);
    }
    console.log(results);
})