

-- department table
SELECT *
FROM department


-- roles table
SELECT *
FROM roles
JOIN department ON roles.department_id = department.department_id;

-- employee table
SELECT *
FROM employee
JOIN employee ON employee.manager_id = employee.id;
