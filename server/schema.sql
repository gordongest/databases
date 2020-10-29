DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id int not null primary key auto_increment,
  message varchar(140),
  createdAt date not null,
  room_id int,
  user_id int
);

CREATE TABLE users (
  id int not null primary key auto_increment,
  username varchar(20)
);

CREATE TABLE rooms (
  id int not null primary key auto_increment,
  roomname varchar(20)
);

ALTER TABLE messages ADD FOREIGN KEY (user_id) REFERENCES users (id);
ALTER TABLE messages ADD FOREIGN KEY (room_id) REFERENCES rooms (id);

/* Create other tables and define schemas for them here! */

-- must add room and user first so that our messages can have foreign key references.
insert into rooms (roomname) values ('Electric Boogaloo'),('Hollapalooza');

insert into users (username) values ('Kelvin'),('Gordon');
-- insert message into the table to test, using the 1, 1 because thays the auto incremented numbers for room and user id's
insert into messages (message, user_id, room_id, createdAt) values
('This Works', 1, 1, STR_TO_DATE('28-10-2020 11:30:51 AM','%d-%m-%Y %h:%i:%s %p')),
('This Also Works', 2, 2, STR_TO_DATE('28-10-2020 11:30:51 AM','%d-%m-%Y %h:%i:%s %p'));


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

