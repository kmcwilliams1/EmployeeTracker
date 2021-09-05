DROP DATABASE IF EXISTS work_db;

CREATE DATABASE work_db;

USE work_db;

CREATE TABLE department (
  id INT NOT NULL,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
  id INT,
  role_title VARCHAR(30) NOT NULL,
  department_id INT,
  salary DECIMAL,
  FOREIGN KEY (department_id)
  REFERENCES department(id)
  ON DELETE SET NULL
);

CREATE TABLE employee (
  id INT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  manager_id INT
  FOREIGN KEY (manager_id)
  REFERENCES employee(id)
  ON DELETE SET NULL
);


