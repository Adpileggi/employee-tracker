function displayDept(db,startMenu) {
db.query(`SELECT * FROM department`, function (err, results) {
    console.table(results);
    startMenu()
})
}

function displayRole(db,startMenu) {
db.query(`SELECT * FROM role`, function (err, results) {
    console.table(results);
    startMenu()
})
}

function displayEmployee(db,startMenu) {
    db.query(`SELECT * FROM employee`, function (err, results) {
        console.table(results);
        startMenu()
    })
}

module.exports = {
    displayDept,
    displayRole,
    displayEmployee
}