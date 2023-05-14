INSERT INTO department (name)
VALUES 
('IT'),
('Research & Development'),
('Sales'),
('Operations');

INSERT INTO role (title, salary, department_id)
VALUES
('Lead Technician', 80000, 1),
('Computer Technician', 70000, 1),
('Research & development Manager', 85000, 2),
('Researcher', 70000, 2),
('Sales Coordinator', 90000, 3), 
('Salesperson', 60000, 3), 
('Project Manager', 1000000, 4),
('Process Engineer', 80000, 4);



INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
('Chuck', 'Noris', 1, null),
('Thakul', 'Llaidmon', 2, 1),
('Crangis', 'McBasketball', 3, null),
('Downtown', 'Murphybrown', 4, 3),
('Liam', 'Harrison', 5, null),
('Andy', 'Howson', 6, 5),
('Rafael', 'Ninturtle', 7, null),
('Duke', 'Nukem', 8, 7);

