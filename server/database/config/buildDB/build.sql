BEGIN ;
DROP TABLE IF EXISTS users , posts , user_post CASCADE;

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
    user_id INT REFERENCES users(id)  ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE user_post (
    isvote BOOLEAN ,
    user_id INT REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE ,
    post_id INT REFERENCES posts(id) ON UPDATE CASCADE ON DELETE CASCADE , 
    UNIQUE(user_id,post_id)
);
COMMIT;