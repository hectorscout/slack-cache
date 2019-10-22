Getting Started with local development

Install in start PostgreSQL
* `brew install postgresql`
* `brew services start postgresql` (runs as a service)

Login to postgres
* psql postgres

Create a user and password and give them create database access
* `CREATE ROLE api_user WITH LOGIN PASSWORD 'password';`
* `ALTER ROLE api_user CREATEDB;`

Log out of the root user and log in to the newly created user.
* `\q`
* `psql -d postgres -U api_user`

Create a `slack_cache` database and connect to it
* `CREATE DATABASE slack_cache;`
* `\c slack_cache`

Create a `projects` table
CREATE TABLE projects (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL
);

Create a `.env` with the following:

DB_USER=api_user
DB_PASSWORD=password
DB_HOST=localhost
DB_PORT=5342
DB_DATABASE=slack_cache

