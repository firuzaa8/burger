create database burgers_db;
use burgers_db;
create table burgers (
id INTEGER auto_increment NOT NULL,
burger_name VARCHAR(100) NOT NULL,
devoured BOOLEAN NOT NULL,
primary key(id) 
);