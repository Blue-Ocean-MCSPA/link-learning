CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    roleID BIGINT,
    contact_info  TEXT,
    certifications_and_training TEXT,
    performance_metrics TEXT,
    activity_log TEXT,
    grade INT,
    assignments_completed INT,
    course_started TIMESTAMP,
    course_ended TIMESTAMP,
    absent_days INT, -- Add other columns as needed
    FOREIGN KEY (roleID) REFERENCES roles (id)
);

CREATE TABLE admin (
    id BIGINT NOT NULL,
    FOREIGN KEY (id) REFERENCES users(id)
);

CREATE TABLE instructors (
    id BIGINT NOT NULL,
    FOREIGN KEY (id) REFERENCES users(id)
);

CREATE TABLE cohort (
    id SERIAL PRIMARY KEY,
    cohort_name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    instructorID BIGINT NOT NULL,
    FOREIGN KEY (instructorID) REFERENCES users (id)
);

CREATE TABLE assignments (
    id SERIAL PRIMARY KEY,
    cohortID BIGINT NOT NULL,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    due_date DATE NOT NULL,
    FOREIGN KEY (cohortID) REFERENCES cohort (id)
);


CREATE TABLE submissions (
    id SERIAL PRIMARY KEY,
    assignmentID BIGINT NOT NULL,
    userID BIGINT NOT NULL,
    submission_date DATE NOT NULL,
    grade VARCHAR(255) NOT NULL,
    FOREIGN KEY (assignmentID) REFERENCES assignments(id),
    FOREIGN KEY (userID) REFERENCES users (id)
);

CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    cohortID BIGINT NOT NULL,
    userID BIGINT NOT NULL,
    FOREIGN KEY (cohortID) REFERENCES cohort (id),
    FOREIGN KEY (userID) REFERENCES users (id)
);

CREATE TABLE enrollments (
    id SERIAL PRIMARY KEY,
    userID BIGINT NOT NULL,
    cohortID BIGINT NOT NULL,
    FOREIGN KEY (userID) REFERENCES users (id),
    FOREIGN KEY (cohortID) REFERENCES cohort (id)
);

CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    senderID BIGINT NOT NULL,
    recipientID BIGINT NOT NULL,
    time_stamp DATE NOT NULL,
    message TEXT NOT NULL,
    FOREIGN KEY (senderID) REFERENCES users(id),
    FOREIGN KEY (recipientID) REFERENCES users(id)
);
