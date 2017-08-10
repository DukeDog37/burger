CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table actors.
CREATE TABLE burgers (
  id int AUTO_INCREMENT,
  burger_name varchar(30) NOT NULL,
  devoured boolean NOT NULL,
  date timestamp NOT NULL,
  PRIMARY KEY(id)
);


 