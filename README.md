## Backend Development
[Youtube Model Link](https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj)

[Youtube Design Link](https://www.figma.com/file/shmxWL5FKRO5GNOPPopBg6/PLAY?type=design&mode=design&t=ndeoSp2w6ZrnCro2-0)

- A Programming language Eg: Java, JS, PHP, golang, C++ (on a Framework)
- A Database (Database is always on another continent) Eg: Mongo, MySQL, Postgres, sqlite (ORM, ODM)
- API is nothing but response that the function sends from the backend to the client
- A Javascript based Backend : Data, File, Third Party (API)
- A JS Runtime : Nodejs / Deno / Bun
- Package.json, (Readme, git, lint, prettier,etc), .env (to keep secret files)
- public (folder which contains all the temp files)
- src (folder which contains all the code)

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

## Deploying Code in Production
- Server listens to a PORT number and also to diff routes and provides diff response to the client.
- PORT is a number (House no of an address) to run diff services on backend server as one PORT can be used to send Api data another can be used to send Auth data

## Data modelling for backend with mongoose
Data modelling -> Defining the structure of the data (fields required for the data)

Mongoose is a popular ODM (Object Data Modelling) library for Nodejs and MongoDB.

Models are basically collection (in terms of MongoDB) which contains one/more documents. Eg: "User" (Model) we create in our code is just "users" (Collection) in our DB and inside the Collection, we can have data such as username, email,age (Document), Now that document has to have a structure (Schema).

- `Model` is a constructor function representing a MongoDB collection.
- `Collection` is a group of MongoDB documents stored in the database.
- `Schema` defines the structure and constraints for documents within a collection.
- `Document` is an instance of a model, representing a single record in the collection.

## Intro to Mongoose
Mongoose is an ODM (Object Data modelling) tool for Nodejs and MongoDB that defines the structure and type of data to be created inside the DB.

- Firstly we create a `Schema` in mongoose.
- Secondly we create a `model` and it takes name of the model and specify the `Schema`.
- The model name `User` will be converted to `users` in MongoDB (collection in mongodb)
- The data which we will store in our DB, we can do validation using mongoose to ensure we have the correct type of data inside our DB
- Inside the `mongoose.Schema` it takes two object one for the Schema and another for the timestamps which is basically `createdAt` and `updatedAt` which helps to know when the data is created and updated.
- `ObjectId` is a special type which is used for unique identifiers and `ref` is used to specify the reference

## How to connect DB in MERN
When Talking with Database, there will always be problems
- Make sure to wrap your db code inside try catch block or promises
- DB is always in another continent so always use async await to handle it
- The DB is there out on internet which is already hosted and we are just connecting to it (MongoDB Atlas)

## Introduction to Express
In express mostly we handle request(data from user) and response(data we send to user).

- `req.params` is mostly used to get the data from the url
- `req.body` is used to get data from the client (form data, json)
- `app.use()` is used for configurations and setting up the middlewares for our app
- `app.use(cors())` is used to tell our express to allow cross origin resource sharing feature without the browser blocking different domain
- `app.use(express.json())` is used to tell our express to parse the data (json) and add that data to the `req.body`
- `app.use(express.urlencoded())` is used to tell our express that the url may come in some encoded form so make sure to understand that
- `app.use(express.static("public"))` is used to serve/send files from our public directory so that anyone can access them `https://domain.com/img.jpg` as `img.jpg` exists in our public directory
- `app.use(cookieParser())` is used to get the cookies from the client side and do some actions accordingly as the data is available on `req.cookies` object.

Now we will do async-await try-catch all the time handling asynchronous operations so to do that effectively we can create a wrapper function for that.

- Async Handler is a function that takes a function as a parameter `fn` and returns a new function which is an async function that takes `req,res,next` as paramaters and inside the new function, `fn` is executed in `try` block and in `catch` block the error part is handled

To handle the error part effectively we can create a utility function for that to handle the error same way for every route

- Inheritance: ApiErrorHandler extends the built-in Error class, allowing it to inherit its behavior and properties.

- Constructor: The constructor function initializes the properties of the ApiErrorHandler instance. 
It takes four parameters:
`statusCode`: Represents the HTTP status code associated with the error.
`message`: Represents the error message (default is "Something went wrong").
`errors`: An array that can hold additional error details.
`stack`: The `stack` trace associated with the error.

- Custom Properties:
`statusCode`: Holds the HTTP status code for the error.
`data`: A placeholder for additional data that can be associated with the error.
`success`: Indicates whether the API call was successful or not.
`errors`: An array to store error details.

- Stack Trace Handling: It checks if a stack trace is provided. If provided, it uses it; otherwise, it captures the stack trace using `Error.captureStackTrace`.

- The `constructor` is used to set up the initial state of your `ApiErrorHandler` instances, and `super()` is used to invoke the constructor of the parent class `Error`, ensuring that the base error functionality is properly initialized.

## User and video model with hooks and JWT
MongoDB uses BSON format (Binary JSON) to store data (document) in the collection