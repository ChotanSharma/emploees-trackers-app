IINSERT INTO department (name)
VALUES 
('IT'),
('Finance & Accounting'),
('Sales & Marketing'),
('Operations');

INSERT INTO department (name)
VALUES
    ('Sales'), ('Engineering'), ('Finance'), ('Legal');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Salesperson', 80000, 1), ('Sales Lead', 100000, 1), ('Software Engineer', 80000, 2), 
    ('Associate Software Engineer', 65000, 2), ('Team Lead Engineering', 150000, 2), ('Director of Engineering', 200000, 2), 
    ('Account Manager', 160000, 3), ('Lawyer', 190000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES
    ('Ranvir', 'Singh', 2, NULL), ('Rena', 'Roy', 1, 1), ('Chris', 'Matt', 5, NULL), ('Thomas', 'Muller', 3, 3);