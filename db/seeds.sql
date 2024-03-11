INSERT INTO department (name)

    VALUES  ('Castodial'), 
            ('Adminstration'),
            ('Food and Beverage'),
            ('Spa');

INSERT INTO role (title, salary, department_id)

    VALUES  ('Line cook', 17, 3),
            ('Stylist', 25, 4),
            ('HR', 30, 2),
            ('Housekeeping', 22, 1),
            ('Accountant', 35, 2),
            ('Room Service', 20, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)

    VALUES  ('Melissa', 'Carpone', 1, NULL),
            ('Courtney', 'Minnows', 6, NULL),
            ('Dale', 'Jones', 1, 1),
            ('Patrick', 'Peroni', 3, NULL),
            ('Bobby', 'Lynfeild', 4, 4),
            ('Thomas', 'Riddle', 5, 2),
            ('Steven', 'Ramirez', 2, 2),
            ('Balinda', 'Matthews', 2, 4),
            ('Dennis', 'Carpenter', 6, 1);