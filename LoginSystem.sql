CREATE DATABASE box;
USE box;

CREATE TABLE users(
  id int(11) NOT NULL AUTO_INCREMENT,
  firstname varchar(50),
  surname varchar(50),
  email varchar(50),
  password varchar(50),
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

INSERT INTO users (id, firstname, surname, email, password) VALUES
(1, 'Terrence', 'Bailey', 'terrencebailey@gmail.com', 'password'),
(2, 'Ginger', 'Mackenzie', 'gingerkenzie@gmail.com', 'qiuetryr'),
(3, 'Maxi', 'Millian', 'maximillian@gmail.com', 'finesse');