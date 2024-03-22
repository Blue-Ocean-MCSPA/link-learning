INSERT INTO roles (name) VALUES ('admin');
INSERT INTO roles (name) VALUES ('instructor');
INSERT INTO roles (name) VALUES ('student');

INSERT INTO users (
    email,
    password_hash,
    first_name,
    last_name,
    roleID,
    contact_info,
    certifications_and_training,
    performance_metrics,
    activity_log,
    grade,
    assignments_completed,
    course_started,
    course_ended,
    absent_days
)
VALUES
('admin@example.com', 'hashed_password', 'John', 'Doe', 1, '{"email": "admin@example.com", "phone": "123-456-7890", "address": "123 Admin St, Admin City, Adminland"}', NULL, NULL, 'Admin activity log', NULL, NULL, NULL, NULL, NULL),
('instructor1@example.com', 'hashed_password', 'Michael', 'Smith', 2, '{"email": "instructor1@example.com", "phone": "456-789-0123", "address": "456 Instructor Ave, Instructor City, Instructorland"}', 'ITIL Foundation, CCNA, CompTIA Security+', 'Fake performance metric', NULL, NULL, NULL, NULL, NULL, NULL),
('instructor2@example.com', 'hashed_password', 'Emily', 'Brown', 2, '{"email": "instructor2@example.com", "phone": "789-012-3456", "address": "789 Instructor Rd, Instructor City, Instructorland"}', 'Microsoft Certified: Azure Solutions Architect Expert, AWS Certified Solutions Architect', 'Fake performance metric', NULL, NULL, NULL, NULL, NULL, NULL),
('instructor3@example.com', 'hashed_password', 'James', 'Rodriguez', 2, '{"email": "instructor3@example.com", "phone": "123-456-7890", "address": "123 Instructor St, Instructor City, Instructorland"}', 'Cisco Certified Network Associate (CCNA), CompTIA A+, AWS Certified Developer', 'Fake performance metric', NULL, NULL, NULL, NULL, NULL, NULL),
('instructor4@example.com', 'hashed_password', 'Olivia', 'Martinez', 2, '{"email": "instructor4@example.com", "phone": "456-789-0123", "address": "456 Instructor Ave, Instructor City, Instructorland"}', 'Certified Information Systems Security Professional (CISSP), Certified Ethical Hacker (CEH)', 'Fake performance metric', NULL, NULL, NULL, NULL, NULL, NULL),
('instructor5@example.com', 'hashed_password', 'Liam', 'Lopez', 2, '{"email": "instructor5@example.com", "phone": "789-012-3456", "address": "789 Instructor Rd, Instructor City, Instructorland"}', 'Microsoft Certified: Azure Administrator Associate, Google Certified Professional Cloud Architect', 'Fake performance metric', NULL, NULL, NULL, NULL, NULL, NULL),
('student1@example.com', 'hashed_password', 'Alice', 'Johnson', 3, '{"email": "student1@example.com", "phone": "234-567-8901", "address": "234 Student Ln, Student City, Studentland"}', NULL, NULL, NULL, 'A', 10, '2023-01-01', '2023-06-30', 2),
('student2@example.com', 'hashed_password', 'Bob', 'Williams', 3, '{"email": "student2@example.com", "phone": "567-890-1234", "address": "567 Student Blvd, Student City, Studentland"}', NULL, NULL, NULL, 'B', 8, '2023-01-01', '2023-06-30', 1),
('student3@example.com', 'hashed_password', 'Carol', 'Jones', 3, '{"email": "student3@example.com", "phone": "890-123-4567", "address": "890 Student Rd, Student City, Studentland"}', NULL, NULL, NULL, 'C', 12, '2023-01-01', '2023-06-30', 0),
('student4@example.com', 'hashed_password', 'David', 'Wilson', 3, '{"email": "student4@example.com", "phone": "012-345-6789", "address": "12 Student Ave, Student City, Studentland"}', NULL, NULL, NULL, 'B', 9, '2023-01-01', '2023-06-30', 3),
('student5@example.com', 'hashed_password', 'Emma', 'Anderson', 3, '{"email": "student5@example.com", "phone": "345-678-9012", "address": "345 Student St, Student City, Studentland"}', NULL, NULL, NULL, 'A', 11, '2023-01-01', '2023-06-30', 1),
('student6@example.com', 'hashed_password', 'Frank', 'Martinez', 3, '{"email": "student6@example.com", "phone": "678-901-2345", "address": "678 Student Dr, Student City, Studentland"}', NULL, NULL, 'Student activity log', 'B', 7, '2023-01-01', '2023-06-30', 0),
('student7@example.com', 'hashed_password', 'Grace', 'Taylor', 3, '{"email": "student7@example.com", "phone": "901-234-5678", "address": "901 Student Blvd, Student City, Studentland"}', NULL, NULL, 'Student activity log', 'C', 9, '2023-01-01', '2023-06-30', 2),
('student8@example.com', 'hashed_password', 'Henry', 'Lee', 3, '{"email": "student8@example.com", "phone": "234-567-8901", "address": "234 Student Ln, Student City, Studentland"}', NULL, NULL, 'Student activity log', 'D', 6, '2023-01-01', '2023-06-30', 4),
('student9@example.com', 'hashed_password', 'Isabella', 'Thomas', 3, '{"email": "student9@example.com", "phone": "567-890-1234", "address": 567 Student Rd, Student City, Studentland"}', NULL, NULL, 'Student activity log', 'A', 8, '2023-01-01', '2023-06-30', 1),
('student10@example.com', 'hashed_password', 'Jack', 'Garcia', 3, '{"email": "student10@example.com", "phone": "890-123-4567", "address": "890 Student Ave, Student City, Studentland"}', NULL, NULL, 'Student activity log', 'B', 10, '2023-01-01', '2023-06-30', 3),
('student11@example.com', 'hashed_password', 'Sophia', 'Martinez', 3, '{"email": "student11@example.com", "phone": "123-456-7890", "address": "123 Student St, Student City, Studentland"}', NULL, NULL, 'Student activity log', 'C', 9, '2023-01-01', '2023-06-30', 2),
('student12@example.com', 'hashed_password', 'Daniel', 'Hernandez', 3, '{"email": "student12@example.com", "phone": "456-789-0123", "address": "456 Student Ave, Student City, Studentland"}', NULL, NULL, 'Student activity log', 'D', 11, '2023-01-01', '2023-06-30', 1),
('student13@example.com', 'hashed_password', 'Olivia', 'Lopez', 3, '{"email": "student13@example.com", "phone": "789-012-3456", "address": "789 Student Rd, Student City, Studentland"}', NULL, NULL, 'Student activity log', 'A', 7, '2023-01-01', '2023-06-30', 3),
('student14@example.com', 'hashed_password', 'William', 'Gonzalez', 3, '{"email": "student14@example.com", "phone": "012-345-6789", "address": "12 Student Blvd, Student City, Studentland"}', NULL, NULL, 'Student activity log', 'B', 9, '2023-01-01', '2023-06-30', 2),
('student15@example.com', 'hashed_password', 'Ava', 'Perez', 3, '{"email": "student15@example.com", "phone": "345-678-9012", "address": "345 Student Ln, Student City, Studentland"}', NULL, NULL, 'Student activity log', 'C', 8, '2023-01-01', '2023-06-30', 0);


INSERT INTO admin (id) VALUES (1);

INSERT INTO instructors (id) VALUES (2), (3), (4), (5), (6);

INSERT INTO cohort (cohort_name, description, instructorID)
VALUES 
('Cohort 1', 'Description of Cohort 1', 3),
('Cohort 2', 'Description of Cohort 2', 2),
('Cohort 3', 'Description of Cohort 3', 4),
('Cohort 4', 'Description of Cohort 4', 5),
('Cohort 5', 'Description of Cohort 5', 6);



INSERT INTO assignments (cohortID, title, description, due_date)
VALUES 
(1, 'Assignment 1', 'Description of Assignment 1', '2023-04-10'),
(2, 'Assignment 2', 'Description of Assignment 2', '2023-04-15'),
(3, 'Assignment 1', 'Description of Assignment 1', '2023-04-10'),
(4, 'Assignment 2', 'Description of Assignment 2', '2023-04-15'),
(5, 'Assignment 3', 'Description of Assignment 1', '2023-04-10'),
(2, 'Assignment 2', 'Description of Assignment 2', '2023-04-15'),
(3, 'Assignment 3', 'Description of Assignment 1', '2023-04-10'),
(5, 'Assignment 2', 'Description of Assignment 2', '2023-04-15');

INSERT INTO submissions (assignmentID, userID, submission_date, grade)
VALUES 
(1, 5, '2023-04-09', 'A'),
(2, 6, '2023-04-14', 'B'),
(1, 7, '2023-04-09', 'C'),
(2, 8, '2023-04-14', 'D'),
(1, 9, '2023-04-09', 'A'),
(2, 10, '2023-04-14', 'B'),
(1, 11, '2023-04-09', 'C'),
(2, 12, '2023-04-14', 'D');


INSERT INTO students (cohortID, userID)
VALUES 
(1, 1),
(1, 2),
(1, 3),
(2, 4),
(2, 4),
(2, 6),
(3, 7),
(3, 8),
(3, 9),
(4, 10),
(4, 11),
(4, 12),
(5, 13),
(5, 14),
(5, 15);

INSERT INTO enrollments (userID, cohortID)
VALUES 
(1, 1),
(2, 1),
(3, 1),
(4, 2),
(5, 2),
(6, 2),
(7, 3),
(8, 3),
(9, 3),
(10, 4),
(11, 4),
(12, 4),
(13, 5),
(14, 5),
(15, 5);


INSERT INTO messages (senderID, recipientID, time_stamp, message)
VALUES 
(1, 1, '2023-04-05', 'Please check your permissions settings'),
(1, 2, '2023-04-05', 'Please check your permissions settings'),
(2, 1, '2023-04-05', 'Permissions settings checked'),
(2, 1, '2023-04-05', 'Permissions settings checked'),
(1, 5, '2023-04-05', 'Welcome to the course!'),
(1, 6, '2023-04-05', 'Welcome to the course!'),
(1, 7, '2023-04-05', 'Welcome to the course!'),
(1, 8, '2023-04-05', 'Welcome to the course!'),
(1, 9, '2023-04-05', 'Welcome to the course!'),
(1, 5, '2023-04-05', 'Please review the syllabus.'),
(1, 6, '2023-04-05', 'Please review the syllabus.'),
(1, 7, '2023-04-05', 'Please review the syllabus.'),
(1, 8, '2023-04-05', 'Please review the syllabus.'),
(1, 9, '2023-04-05', 'Please review the syllabus.'),
(2, 5, '2023-04-05', 'Welcome to the course!'),
(2, 6, '2023-04-05', 'Welcome to the course!'),
(2, 7, '2023-04-05', 'Welcome to the course!'),
(2, 8, '2023-04-05', 'Welcome to the course!'),
(2, 9, '2023-04-05', 'Welcome to the course!'),
(2, 5, '2023-04-05', 'Please review the syllabus.'),
(2, 6, '2023-04-05', 'Please review the syllabus.'),
(2, 7, '2023-04-05', 'Please review the syllabus.'),
(2, 8, '2023-04-05', 'Please review the syllabus.'),
(2, 9, '2023-04-05', 'Please review the syllabus.'),
(3, 2, '2023-04-01', 'Did you get my review?'),
(2, 3, '2023-04-02', 'Yes, I did. Thank you!'),
(1, 2, '2023-04-03', 'Please submit your assignment.'),
(1, 2, '2023-04-04', 'I have submitted my assignment.'),
(5, 6, '2023-04-06', 'Want to pair up for coding assignemtn later'),
(6, 5, '2023-04-07', 'Sure, let''s meet at 3pm.');


-- INSERT INTO cohort_assignments (cohortID, assignmentID)
-- VALUES 
-- (1, 1),  
-- (1, 2),  
-- (2, 1),  
-- (2, 2);

