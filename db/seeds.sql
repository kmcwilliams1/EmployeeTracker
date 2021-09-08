USE work_db;


INSERT INTO department ( name)
VALUES
    (  "Sales"),
    (  "Management"),
    (  "HR");

INSERT INTO roles ( role_title, department_id, salary)
VALUES
    (  "Manager", 2, 100 ),
    (  "Sales Associate", 1 , 10.25),
    (  "Mediator" , 3 , 35);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ( "Mary,", "Queen of Scots", 1, NULL),
    ( "Don", "Cheedle" ,  2, 1),
    ( "Bob", "Marley",  3, 1);