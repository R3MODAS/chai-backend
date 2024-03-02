# Backend Development
-> 2 major components

- A Programming language
Java, JS, PHP, golang, C++ 
-> on a framework

- A Database
Mongo, MySQL, Postgres, sqlite
-> ORM ODM

-> Database is always on another continent 

-> A Javascript based Backend
Data, File, Third Party (API)

-> A JS Runtime : Nodejs / Deno / Bun

-> Package.json, (Readme, git, lint, prettier,etc), .env (to keep secret files)
-> public (folder which contains all the temp files)
-> src (folder which contains all the code)

File Structure
---------------
- index.js -> Entry point of the application (DB connects)
- app.js -> config, cookie
- constants.js -> enums, db-name

Folder Structure
-----------------
- DB -> Actual code for the connection with Database
- Models -> contains the schema/structure of the Data
- Controllers -> functions/methods (functionality)
- Routes -> routes for our website
- Middlewares -> functions that are used for validations/checks
- Utils -> Common things we can use everywhere
- More (depends)

## Data modelling for backend with mongoose
Data modelling -> Defining the structure of the data

Mongoose is a popular ODM (Object Data Modelling) library for Nodejs and MongoDB.

Models are basically collection (in terms of MongoDB) which contains one/more documents. Eg: "User" (Model) we create in our code is just "users" (Collection) in our DB and inside the Collection, we can have data such as username, email,age (Document), Now that document has to have a structure (Schema).

- Model is a constructor function representing a MongoDB collection.
- Collection is a group of MongoDB documents stored in the database.
- Schema defines the structure and constraints for documents within a collection.
- Document is an instance of a model, representing a single record in the collection.


## Data models for practice
- TodoApp (done)
- Ecommerce (done)
- Hospital Management (done)

## Setting up Professional Backend Project
[Youtube Model Link](https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj)

[Youtube Design Link](https://www.figma.com/file/shmxWL5FKRO5GNOPPopBg6/PLAY?type=design&mode=design&t=ndeoSp2w6ZrnCro2-0)

## How to connect database in MERN with debugging
We will use MongoDB Atlas

## MongoDB Atlas
It is a subservice of mongodb which gives an online DB

- First we need to create a project and do the steps
- Then we need to create a cluster (Mongodb goes to the aws server and creates a Db for us to work on)

## Mongoose
Whenever we will use Database there will be 2 problem

- When we will try to talk to db always wrap the db logic inside try/catch, promises.
- Db is always in some other continent so use async/await or then,catch while connecting to the db

## Connection with Database
Two approach can be used to write code

- All code inside index.js (Not a good practice)
- Inside each folder(db,middlewares) write individual code of its own and export them and import them on index.js (Preferred)

While we connect to the Database using MongoDB URI and DB name, we will get an connectionInstance where we will be able to get a lot of values but for now we will require hostName

## Configuration for Backend
- app.use() is used for middlewares / configuration
- app.use(cors()) to use the cors middleware 
- app.use(express.urlencoded()) to get data from url
- app.use(express.static("public")) to store document(video,pdf,images) in the public directory
- app.use(cookieParser()) to get/send cookies

## Middleware
A function that acts as a checker (middleman) who does some prechecks then lets you execute the main function to send response back to the user/client

## Utility asyncHandler function
It is basically a higher order function that takes a function as parameter and then returns a async function which takes paramater(req,res,next) and uses try catch - try for awaiting the passed function with parameter(req,res,next) and catch the errors with some status and json

## Utility Error and Response Class
- Creating a class which will inherit the Error(class) and we can send the custom response in the constructor function of the class

- For Response we can just create a class which will just take statusCode, data, message in the constructor function and act accordingly while using it