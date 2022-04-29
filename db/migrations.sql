DROP TABLE IF EXISTS users;

CREATE TABLE users (
    username VARCHAR (30) NOT NULL,
    score INT NOT NULL
);

INSERT INTO users (username, score)
VALUES
    ('ikenna98', 5);
