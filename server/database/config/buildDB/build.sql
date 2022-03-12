BEGIN ;
DROP TABLE IF EXISTS users , posts ;

CREATE TABLE users(
    id serial PRIMARY KEY ,
    name VARCHAR(50) NOT NULL ,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL
);
CREATE TABLE posts(
    id serial PRIMARY KEY ,
    titel VARCHAR(50) NOT NULL ,
    content text NOT NULL ,
    img text ,
    user_id INT REFERENCES users(id) ON UPDATE CASCADE
);

COMMIT;