const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'list',
      message: 'What would you like to do?',
      choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"],
      name: 'initalPrompt'
    },
    {
        when: (answers) => answers.initalPrompt === 'view all departments'
    },
    {
        when: (answers) => answers.initalPrompt === 'view all roles'
    },
    {
        when: (answers) => answers.initalPrompt === 'view all employees'
    },
    {
        type: 'intput',
        message: 'What is the name of the new department',
        when: (answers) => answers.initalPrompt === 'add a department'
    },
    {
        type: 'intput',
        message: 'What is the name of the new role',
        when: (answers) => answers.initalPrompt === 'add a role'
    },
    {
        type: 'intput',
        message: `What is the salary of ${role}`,
        when: (answers) => answers.initalPrompt === 'add a role'
    },
    {
        type: 'intput',
        message: `What department does ${role} belong to?`,
        when: (answers) => answers.initalPrompt === 'add a role'
    },
    {
        type: 'intput',
        message: 'What is the first and last name of the new employee',
        when: (answers) => answers.initalPrompt === 'add an employee'
    },
    {
        type: 'intput',
        message: `What is ${employee}'s role`,
        when: (answers) => answers.initalPrompt === 'add an employee'
    },
    {
        type: 'intput',
        message: `Who is ${employee}'s manager`,
        when: (answers) => answers.initalPrompt === 'add an employee'
    },
    {
        type: 'list',
        message: 'Which employee would you like to update?',
        choices: [""] ,//how do i input all the employees here?
        when: (answers) => answers.initalPrompt === 'update an employee role'
    },
]).then 
   
    
    