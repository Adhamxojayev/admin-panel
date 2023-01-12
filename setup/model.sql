

CREATE DATABASE admin_panel;
\c admin_panel;

CREATE EXTENSION pgcrypto;

CREATE TABLE admin(
  admin_id serial primary key,
  username varchar(32) not null,
  password varchar(60) not null
);


CREATE TABLE categories(
  category_id serial primary key,
  category_name varchar(64) not null,
  created_at timestamp default current_timestamp,
  updated_at timestamp,
  deleted_at timestamp
);


CREATE TABLE products(
  product_id serial primary key,
  product_name varchar(32) not null,
  product_price numeric(9,2) not null,
  product_description text not null,
  category_id int references categories(category_id),
  product_image text not null,
  created_at timestamp default current_timestamp,
  updated_at timestamp,
  deleted_at timestamp
);

CREATE TABLE news(
  new_id serial primary key,
  new_title varchar(32) not null,
  new_description text not null,
  new_image text not null,
  created_at timestamp default current_timestamp,
  updated_at timestamp,
  deleted_at timestamp
);


INSERT INTO admins(username, password) VALUES ('ali', crypt('123456789', gen_salt('bf')));


INSERT INTO categories(category_name) VALUES ('hp'), ('samsung'), ('acer'), ('asus');


INSERT INTO products (product_name, product_price ,product_description ,category_id, product_image) VALUES
('hp pavilon', 200, '2 yil ishlatilgan', 1, 'https://picsum.photos/400'),
('hp pavilon 2', 300, '1 yil ishlatilgan', 1, 'https://picsum.photos/400'),
('acer 2', 140, '4 yil ishlatilgan', 3, 'https://picsum.photos/400');