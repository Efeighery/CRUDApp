# Both the database and the table is created here, along with some dummy table entries
CREATE DATABASE box;

CREATE TABLE users(
  id int(11) NOT NULL AUTO_INCREMENT,
  username varchar(50),
  surname varchar(50),
  email varchar(50),
  password varchar(50),
  PRIMARY KEY (id)
);


INSERT INTO users (id, username, surname, email, password) VALUES
(1, 'Terrence', 'Bailey', 'terrencebailey@gmail.com', 'password'),
(2, 'Ginger', 'Mackenzie', 'gingerkenzie@gmail.com', 'qiuetryr'),
(3, 'Maxi', 'Millian', 'maximillian@gmail.com', 'finesse');

SELECT * FROM `user-login`.users;

