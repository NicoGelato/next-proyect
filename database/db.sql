CREATE DATABASE productsdb IF NOT EXISTS;
USE productsdb;
CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(400) NOT NULL,
    price DECIMAL,
    createdAT TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);