CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    cohortID INTEGER NOT NULL,
    FOREIGN KEY (cohortID) REFERENCES cohort(id),
    UNIQUE (userID) 
);

CREATE TABLE instructors (
    id SERIAL PRIMARY KEY,
    userID INTEGER NOT NULL,
    UNIQUE (userID)
);

CREATE TABLE cohort (
    id SERIAL PRIMARY KEY,
    cohortName VARCHAR(255) NOT NULL,
    descript VARCHAR(255) NOT NULL,
    instructorID INTEGER NOT NULL,
    FOREIGN KEY (instructorID) REFERENCES instructors(id)
);

CREATE TABLE assignments (
    id SERIAL PRIMARY KEY,
    cohortID INTEGER NOT NULL,
    assignmentName VARCHAR(255) NOT NULL,
    descript VARCHAR(255) NOT NULL,
    dueDate DATE NOT NULL,
    FOREIGN KEY (cohortID) REFERENCES cohort(id)
);

CREATE TABLE submissions (
    id SERIAL PRIMARY KEY,
    userID INTEGER NOT NULL,
    assignmentID INTEGER NOT NULL,
    submitDate DATE NOT NULL,
    grade VARCHAR(255) NOT NULL,
    FOREIGN KEY (userID) REFERENCES students(userID),
    FOREIGN KEY (assignmentID) REFERENCES assignments(id)
);