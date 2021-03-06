const inquirer = require('inquirer');
const fs = require('fs');
const mysql = require('mysql2');
require('console.table')
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'work_db'
    },
    console.log(`Connected to the work_db database.`)
);

db.connect(
    (err) => {
        if (err) throw err
        initialPrompt();
    }
)

const initialPrompt = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'What would you like to do?',
                choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"],
                name: 'initalPrompt'
            },
        ]).then(data => {
            switch (data.initalPrompt) {
                case "view all departments":
                    viewalldepartments();
                    break;
                case "view all roles":
                    viewallroles();
                    break;
                case "view all employees":
                    viewallemployees();
                    break;
                case "add a department":
                    addDepartment();
                    break;
                case "add a role":
                    addRole();
                    break;
                case "add an employee":
                    addEmployee();
                    break;
                case "update an employee role":
                    updateanemployee();
                    break;
                default:
                    break;
            }
        })
}

const viewalldepartments = () => {
    db.query('SELECT * FROM department', function (err, results) {
        console.table(results);
        initialPrompt();
    });
}

const viewallroles = () => {
    db.query('SELECT * FROM roles', function (err, results) {
        console.table(results);
        initialPrompt();
    });
}

const viewallemployees = () => {
    db.query('SELECT * FROM employee', function (err, results) {
        console.table(results);
        initialPrompt();
    });
}



const addDepartment = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the name of the new department?',
                name: "newdepartment"
            }
        ]).then(data => {
            const newdepartment = {
                name: data.newdepartment,
            }
            db.query('INSERT INTO department SET ?', newdepartment, function (err, results) {
                initialPrompt();
            });
        })
}

// how to add string interpolation?
const addRole = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the name of the new role?',
                name: "newrole"
            },
            {
                type: 'input',
                message: `What is the salary of this role?`,
                name: "newrolesalary"
            },
            {
                type: 'input',
                message: `What department does this role belong to?`,
                name: "newroledepartment"
            },
        ]).then(data => {

            const newrole = {
                role_title : data.newrole,
                department_id : data.newrolesalary,
                salary : data.newroledepartment
            }
            db.query('INSERT INTO roles SET ?', newrole, function (err, results) {
                initialPrompt();
            });
        })
}


const addEmployee = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the first name of the new employee?',
                name: "firstname"
            },
            {
                type: 'input',
                message: 'What is the last name of the new employee?',
                name: "lastname"
            },
            {
                type: 'input',
                message: `What is their role?`,
                name: "newemployeerole"
            },
            {
                type: 'input',
                message: `Who is their manager?`,
                name: "newemployeemanager"
            },
        ]).then(data => {
            const newemployee = {
                first_name: data.firstname,
                last_name: data.lastname,
                role_id: data.newemployeerole,
                manager_id: data.newemployeemanager
            }
            db.query('INSERT INTO employee SET ?', newemployee, function (err, results) {
                initialPrompt();
            });
        })
}



const updateanemployee = () => {

    db.query("SELECT * FROM employee", (err, res) => {
        // console.log(res);


        inquirer
            .prompt([
                {
                    type: 'list',
                    message: 'Which employee would you like to update?',
                    choices: employee.map(employee => ({name:`${employee.first_name} ${employee.last_name}`, value: employee.id})),
                    name: "getallEmployees",
                },
                {
                    type: 'input',
                    message: `What is their new role?`,
                    name: "employeenewerole"
                }
            ]).then(data => {
                const updateemployee = {
                    employeenewrole:  data.employeenewrole,
                }
                db.query('INSERT INTO employee SET ?', updateemployee, function (err, results) {
                    initialPrompt();
                });
            })
        console.table(allEmployees)
    }
    )
}
