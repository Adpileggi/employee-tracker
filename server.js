const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        // make database
        database: 'employee_db'
    },
    console.log(`Connected to the employee_db database`)
);

// add department route

// add role route 

// add employee route
db.query(``)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});