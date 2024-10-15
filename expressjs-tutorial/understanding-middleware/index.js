const express = require("express");
const app = express();
const port = 5001;
const router = express.Router();
const path = require("path");
//Built-in Middleware
//In Express.js, the express.json() middleware is used to parse incoming requests with JSON payloads
//and convert them into JavaScript objects.
//This middleware is built-in since Express version 4.16.0 and is based on the body-parser middleware.
app.use(express.json());

// It takes the data from the body of an HTTP request that is encoded in the x-www-form-urlencoded format
// (commonly used by HTML forms) and parses it into a JavaScript object that can be accessed in your request handlers.
app.use(express.urlencoded({ extended: true }));

// In Express.js, the app.use(express.static()) middleware is used to serve static files such as images, CSS files,
// and JavaScript files from a specified directory.
// Directory Path: You pass the directory path containing your static files
// as an argument to express.static().
app.use("/static", express.static(path.join(__dirname, "public")));

//Application-level middleware
//Creating a middleware that logs the request
const loggerMiddleware = (req, res, next) => {
    console.log(`${new Date()} --- Request ${req.method} ${req.url}`);
    //Calling the next middleware function
    next();
};
//We want to use this middleware application wide.
//We pass the middleware function to the use method.
app.use(loggerMiddleware);

//Router-level middleware
//Registering the router middleware
// The routes will work with localhost:5001/api/users
app.use("/api/users", router);

//This function acts as a authentication method.
//It does authentication and if successful calls next() else throws an error.
const fakeAuth = (req, res, next) => {
    const authStatus = true;
    if (authStatus) {
        console.log("User AuthStatus");
        next();
    } else {
        res.status(401);
        throw new Error("User not authenticated!");
    }
};

const getUsers = (req, res) => {
    res.json({ message: "Get all users!" });
};

const createUser = (req, res) => {
    console.log("Request body received from client ", req.body);
    res.json({ message: "Create new users!" });
};

//When someone sends a request at any route, then we are going to execute the fakeAuth function first.
//If auth is successful then we will see the response else we see the error.
router.use(fakeAuth);
//Middleware will call the given function on route "/" after the localhost:5001/api/users.
//GET and POST methods at the given route.
router.route("/").get(getUsers).post(createUser);

//Error Handling Middleware
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.status(statusCode);

    switch (statusCode) {
        case 401:
            res.json({
                title: "Unauthorized",
                message: err.message,
            });
            break;

        case 404:
            res.json({
                title: "Not Found",
                message: err.message,
            });
            break;

        case 500:
            res.json({
                title: "Server Error",
                message: err.message,
            });
            break;

        default:
            break;
    }
};

//This middleware will be called for all other routes.
//If we reach till this point that would mean that the route we are looking for does not exist.
//In that case will send status 404 and an error.
app.all("*", (req, res) => {
    res.status(404);
    throw new Error("No such route");
});

//Using the error handler middleware. Same as using application level middleware.
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
