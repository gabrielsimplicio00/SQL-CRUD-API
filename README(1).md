
# SQL CRUD API

This is a project made with NodeJS, Express, Sequelize and Swagger to make the interactions with the API more intuitive

## Running locally

Create a SQL database that will store the data (you'll have to update the config.json file later for the connection to be successful)

MySQL example

```cmd
  CREATE DATABASE database_name;
```

Clone the project

```bash
  git clone git@github.com:gabrielsimplicio00/SQL-CRUD-API.git
```

Enter in the project's directory

```bash
  cd SQL-CRUD-API
```

Install dependencies

```bash
  npm install
```

Run the server with node

```bash
  npm start
```

Or nodemon

```bash
  npm run dev
```


## Connect locally to your database changing config.json

In this project I used a local MySQL database, fill this projects's config.json file with your SQL account's login, password and database name to be able use this API properly

```json
{
  "development": {
    "username": "your_username",
    "password": "your_password",
    "database": "database_name",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```


## Migrations and seeders

Since the migrations and seeders files are already created, you will only have to run these commands in order to create tables in your database and fill them with data

Run Migrations

```bash
  npx sequelize-cli db:migrate
```

Seeding

```bash
  npx sequelize-cli db:seed:all
```
## Stacks

**Front-end:** Swagger

**Back-end:** Node, Express, Sequelize/MySQL


## References

 - [Sequelize Docs](https://sequelize.org/docs/v6/)

