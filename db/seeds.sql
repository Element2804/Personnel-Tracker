INSERT INTO department (name)
VALUES 
('IT'),
('Research & Development'),
('Sales'),
('Operations');

INSERT INTO role (title, salary, department_id)
VALUES
('Computer Technician', 70000, 1),
('Lead Technician', 80000, 1),
('Researcher', 70000, 2), 
('Research & development Manager', 85000, 2),
('Salesperson', 60000, 3), 
('Sales Coordinator', 90000, 3),
('Process Engineer', 80000, 4),
('Project Manager', 1000000, 4);


INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
('Thakul', 'Llaidmon', 1, 2),
('Chuck', 'Noris', 2, null),
('Downtown', 'Murphybrown', 3, 4),
('Crangis', 'McBasketball', 4, null),
('Andy', 'Howson', 5, 6),
('Liam', 'Harrison', 6, null),
('Duke', 'Nukem', 7, 8),
('Rafael', 'Ninturtle', 8, null);
