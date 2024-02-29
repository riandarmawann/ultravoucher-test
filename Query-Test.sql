//DDL
CREATE TABLE student (
    id SERIAL PRIMARY KEY,
    name VARCHAR(25) NOT NULL,
    parent_id INTEGER
);

//DML
INSERT INTO student (name, parent_id) VALUES
('Zaki', 2),
('Ilham', NULL),
('Irwan', 2),
('Arka', 3);

//Jawaban Query Test
SELECT
t1.id,
t1.name,
t2.name AS parent_name
FROM student AS t1
LEFT JOIN
student AS t2 ON t1.parent_id = t2.id