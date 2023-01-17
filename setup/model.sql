

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



with  old_products as (
  select
    product_id,
    product_name,
    product_price,
    product_description
  from products 
  where product_id = $1 
) update products as p
      set
        product_name = case
                          when length($2) > 0 then $2
                          else o.product_name
                       end, 
        product_price = case
                          when length($3) > 0 then $3
                          else o.product_price
                       end,
        product_description = case
                          when length($4) > 0 then $4
                          else o.product_description
                       end
      from old_products as o
      where p.product_id = $1                                                       