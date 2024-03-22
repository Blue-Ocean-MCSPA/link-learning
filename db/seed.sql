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

('admin@example.com', 'hashed_password', 'Admin', 'Smith', 1, 'Contact info for admin', NULL, NULL, 'Admin activity log', NULL, NULL, NULL, NULL, NULL),
('instructor1@example.com', 'hashed_password', 'John', 'Doe', 2, 'Contact info for instructor 1', 'Certifications and training for instructor 1', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('instructor2@example.com', 'hashed_password', 'Jane', 'Doe', 2, 'Contact info for instructor 2', 'Certifications and training for instructor 2', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('student1@example.com', 'hashed_password', 'Student', 'One', 3, 'Contact info for student 1', NULL, NULL, NULL, 85, 10, NULL, NULL, NULL),
('student2@example.com', 'hashed_password', 'Student', 'Two', 3, 'Contact info for student 2', NULL, NULL, NULL, 75, 8, NULL, NULL, NULL),
('student3@example.com', 'hashed_password', 'Student', 'Three', 3, 'Contact info for student 3', NULL, NULL, NULL, 90, 12, NULL, NULL, NULL),
('student4@example.com', 'hashed_password', 'Student', 'Four', 3, 'Contact info for student 4', NULL, NULL, NULL, 80, 9, NULL, NULL, NULL),
('student5@example.com', 'hashed_password', 'Student', 'Five', 3, 'Contact info for student 5', NULL, NULL, NULL, 95, 11, NULL, NULL, NULL);

INSERT INTO admin (id) VALUES (1);

INSERT INTO instructors (id) VALUES (2), (3);

INSERT INTO cohort (cohort_name, description, instructorID)
VALUES 
('Cohort 1', 'Description of Cohort 1', 3),
('Cohort 2', 'Description of Cohort 2', 2);

INSERT INTO assignments (cohortID, title, description, due_date)
VALUES 
(1, 'Assignment 1', 'Description of Assignment 1', '2023-04-10'),
(2, 'Assignment 2', 'Description of Assignment 2', '2023-04-15');

INSERT INTO submissions (assignmentID, userID, submission_date, grade)
VALUES 
(1, 5, '2023-04-09', 'A'),
(2, 6, '2023-04-14', 'B');

INSERT INTO students (cohortID, userID)
VALUES 
(1, 5),
(1, 6),
(2, 7),
(2, 8),
(2, 9);

INSERT INTO enrollments (userID, cohortID)
VALUES 
(5, 1),
(6, 1),
(7, 2),
(8, 2),
(9, 2);

INSERT INTO messages (senderID, recipientID, time_stamp, message)
VALUES 
(2, 5, '2023-04-05', 'Welcome to the course!'),
(1, 7, '2023-04-06', 'Please review the syllabus.');

-- INSERT INTO cohort_assignments (cohortID, assignmentID)
-- VALUES 
-- (1, 1),  
-- (1, 2),  
-- (2, 1),  
-- (2, 2);