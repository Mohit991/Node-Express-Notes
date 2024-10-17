const express = require("express");
const connectDb = require("./configs/dbConnection");
const dotenv = require("dotenv").config();

const port = process.env.PORT || 5000;

//connecting to mongoDB
connectDb();
const app = express();

//importing contactRoutes and userRoutes from the routes folder and then using it with the /api/contacts
const contactRoutes = require("./routes/contactRoutes");
const userRoutes = require("./routes/userRoutes");
//importing the error handler middleware
const errorHandler = require("./middleware/errorHandler");
//Using this middleware to read the body of the request.
app.use(express.json());
app.use("/api/contacts", contactRoutes);
app.use("/api/users", userRoutes);

//Using the errorHandler middleware.
//This middleware function will only be used if the res is not already sent from the contactRoutes file.
//If res is already sent, we will not get to the error handler.
// If there is some issue only then we will get to the error handler and handle the error.
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});
