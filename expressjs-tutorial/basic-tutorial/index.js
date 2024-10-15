const express = require("express");
const app = express();

const port = 3001;

//Routes
//GET request at route "/" or "http://localhost:3001/"
app.get("/", (req, res) => {
    res.json({ message: "This is home page." });
});

//GET request at route "/users" or "http://localhost:3001/users"
app.get("/users", (req, res) => {
    res.json({ message: "Get all the users." });
});

//GET request at route "/users/:id" or "http://localhost:3001/users/:id"
app.get("/users/:id", (req, res) => {
    const id = req.params.id;
    res.json({ message: `Get the user with id: ${id}` });
});

//POST request at route "/users/" or "http://localhost:3001/users/"
app.post("/users/", (req, res) => {
    res.json({ message: `Create new user.` });
});

//PUT request at route "/users/:id" or "http://localhost:3001/users/:id"
app.put("/users/:id", (req, res) => {
    res.json({ message: `Update user with id: ${req.params.id}` });
});

//DELETE request at route "/users/:id" or "http://localhost:3001/users/:id"
app.delete("/users/:id", (req, res) => {
    res.json({ message: `Delete user with id: ${req.params.id}` });
});

app.listen(port, () => {
    console.log(`Simple App at ${port}`);
});
