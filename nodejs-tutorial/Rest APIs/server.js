const http = require("http");
require("dotenv").config();
const PORT = process.env.PORT || 5001;

//importing the methods
const getReq = require("./methods/get-request")
const postReq = require("./methods/post-request")
const putReq = require("./methods/put-request")
const deleteReq = require("./methods/delete-request")

//importing movie
//it will be let and not const because the movies json file will change
//since we will get/post/put/delete into this json file. 
let movies = require("./data/movies.json")

const server = http.createServer((req, res) => {
    //creating a new property called movies in the req object
    req.movies = movies
    switch (req.method) {
        case "GET":
            getReq(req, res);
            break;

        case "POST":
            postReq(req, res);
            break;

        case "PUT":
            putReq(req, res);
            break;

        case "DELETE":
            deleteReq(req, res);
            break;

        default:
            res.statusCode = 404;
            res.setHeader("Content-Type", "application/json");
            res.write(JSON.stringify({ title: "Not Found", message: "Route not found" }));
            res.end();
    }
});

server.listen(PORT, () => {
    console.log("Server started on port ", PORT);
});
