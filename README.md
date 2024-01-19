Backend Development
====================
-> 2 major components

1. A Programming language
Java, JS, PHP, golang, C++ 
-> on a framework

2. A Database
Mongo, MySQL, Postgres, sqlite
-> ORM ODM

Database is on another continent always

-> A Javascript based Backend
Data, File, Third Party (API)

-> A JS Runtime : Nodejs / Deno / Bun
Package.json, .env, (Readme, git, lint, prettier,etc)

-> src (folder which contains all the code)

File Structure
---------------
index -> Entry point of the application (DB connects)
app -> config, cookie
constants -> enums, db-name

Folder Structure
-----------------
- DB -> Actual code for the connection with Database
- Models -> contains the schema/structure of the Data
- Controllers -> functions/methods (functionality)
- Routes -> routes for our website
- Middlewares 
- Utils -> Common things we can use everywhere
- More (depends)

Data modelling for backend with mongoose
========================================
Data modelling -> Defining the structure of the data

Models -> collection that contains data in the Database
Schema -> structure of the data inside the collection

User (collection) contains username,password and the type of username and password is string (schema)

Practice Link => https://stackblitz.com/edit/data-modelling-hitesh-sir?file=models%2Ftodos%2Fsub_todo.models.js

Important => Always plan the structure of the data and all before even starting to connect database and all

Data models for practice
------------------------
1. TodoApp (done)
2. Ecommerce (done)
3. Hospital Management

How to connect database in MERN with debugging
==============================================
We will use MongoDB Atlas

MongoDB Atlas
-------------
It is a subservice of mongodb which gives an online DB

- First we need to create a project and do the steps
- Then we need to create a cluster (Mongodb goes to the aws server and creates a Db for us to work on)
