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


Async Handler
-------------
Now we will do async-await try-catch all the time handling asynchronous operations so to do that effectively we can create a wrapper function for that.

- Async Handler is a function that takes a function as a parameter `fn` and returns a new function which is an async function that takes `req,res,next` as paramaters and inside the new function, `fn` is executed in `try` block and in `catch` block the error part is handled

Error Handler
-------------
To handle the error part effectively we can create a utility function for that to handle the error same way for every route

1. `class ApiErrorHandler extends Error`: This code declares a new class `ApiErrorHandler` that extends the built-in `Error` class in JavaScript. This means that `ApiErrorHandler` inherits properties and methods from the `Error` class.

2. `constructor(statusCode, message = "Something went wrong", errors = [], stack = "")`: The constructor of the `ApiErrorHandler` class takes four parameters: `statusCode`, `message` (with a default value of "Something went wrong"), `errors` (an array with a default empty array), and `stack` (with a default value of an empty string).

3. `super(message)`: This line calls the constructor of the parent class (`Error` in this case) with the provided `message` parameter. The `super` keyword is used to refer to the parent class and call its constructor.

So, when an instance of `ApiErrorHandler` is created, it first calls the constructor of the `Error` class (the parent class) with the specified `message` parameter. After that, the constructor of the `ApiErrorHandler` class initializes some additional properties specific to this class, such as `statusCode`, `data`, `success`, and `errors`.



## User and video model with hooks and JWT
MongoDB uses BSON format (Binary JSON) to store data (document) in the collection

There is some challenge with password which we will have to encrypt for our db and decrypt when comparing or doing some operation

We will require a package `mongoose-aggregate-paginate-v2` where we will be able to write advanced aggregation queries on mongoose by just doing `your_Schema.plugin(mongooseAggregatePaginate)` which will enable the use of aggregation queries along with regular queries.

## bcrypt
We will use `bcrypt` library to hash our password and `jsonwebtoken` (jwt) library to create tokens which basically uses some algorithm to hash our info and to help us for authentication purpose so that user doesn't have to login again and again.

`pre` hook or middleware functions are executed just before saving the data in our DB

`userSchema.pre()` takes two things one is the action and here will require to encrypt our password just before saving the data so `save` will be used and for the second thing, we will use normal function as we have `this keyword` to access the reference to the current object and it will be an `async` function with parameter `next` to change to next handler function once the task is done

Now there is a problem with `userSchema.pre()` as it will be executed everytime some data is saved regardless it is related to password or not so to fix this we are going to check if the password is modified or not `this.isModified("password")` will be used to check if the value is modified or not and if not then just return `next()` otherwise just `this.password = bycrypt.hash(this.password, 10) next()`

```
userSchema.pre("save", async function(){
    if(!this.isModified("password")) return next()
    this.password = bcrypt.hash(this.password, 10)
    next()
})
```

We can create our custom methods in mongoose `To check the password is correct or not` so `userSchema.methods` will have our custom function and this function is async (might take time to do task) and takes password as parameter that we want to check.

```
userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

This will return true/false as bcrypt compares the password we give and the encrypted password stored in our db.
```

## JWT
JWT is a bearer token that means someone who bears the token (owns a key) and we will require Access Token and Refresh Token. Refresh Token is stored in our backend but Access token is not.

Now we need to generate our Access Token and Refresh Token and both of them can be generated the same way using `jwt.sign()` method. So we are gonna make a method in userSchema to generate them

```
userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id
            email: this.email,
            username: this.username,
            fullName: this.fullName
        },
        access_token_secret,
        {
            expiresIn: access_token_expiry
        }
    )    
}
```

`jwt.sign()` takes 3 things `jwt.sign(payload,secret_key,expiresIn)`

Same way we can this for Refresh Token

```
userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id
        },
        refresh_token_secret,
        {
            expiresIn: refresh_token_expiry
        }
    )    
}
```