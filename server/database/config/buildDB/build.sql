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
    votes INT DEFAULT 0 ,
    content text NOT NULL ,
    img text ,
    created_at timestamp NOT NULL DEFAULT NOW(),
    user_id INT REFERENCES users(id) ON UPDATE CASCADE
);

COMMIT;