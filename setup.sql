DROP DATABASE IF EXISTS tradingengine;
CREATE DATABASE tradingengine;
\c tradingengine
DROP TABLE IF EXISTS accounts;
CREATE TABLE acounts (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50),
    password VARCHAR(100)
)