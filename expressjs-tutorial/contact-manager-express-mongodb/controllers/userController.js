const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

//@desc Register a user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("All fields are needed");
    }
    const userAvailable = await User.findOne({ email: email });
    if (userAvailable) {
        res.status(400);
        throw new Error("User already exists");
    }
    res.json({ message: "Register the user" });
});

//@desc Login user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler((req, res) => {
    res.json({ message: "Login user" });
});

//@desc Current user info
//@route POST /api/users/current
//@access private
const currentUser = asyncHandler((req, res) => {
    res.json({ message: "Get current user info" });
});

module.exports = { registerUser, loginUser, currentUser };
