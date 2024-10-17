const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

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

    //hashing password with 10 salt rounds
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await User.create({
        username: username,
        email: email,
        password: hashedPassword
    })
    console.log("User Created");
    if (user) {
        res.status(201).json({ _id: user.id, email: user.email })
    }
    else {
        res.status(400)
        throw new Error("User data not valid")
    }
});

//@desc Login user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        res.status(400)
        throw new Error("All fields needed!")
    }

    const user = await User.findOne({ email: email })

    //compare password with the hashed password
    if (user && (await bcrypt.compare(password, user.password))) {
        //Creating JWT token
        const accessToken = jwt.sign({
            //payload
            user: {
                username: user.username,
                email: user.email,
                id: user.id
            }
        },
            //providing the access token secret from the env file
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "20m" }
        )

        //Sending the access token to the user after successful authentication
        res.status(200).json({ accessToken })
    }
    else {
        res.status(401)
        throw new Error("Email or password is not valid")
    }
});

//@desc Get current user info
//@route POST /api/users/current
//@access private
const currentUser = asyncHandler(async (req, res) => {
    //Sending the user from the req itself.
    res.json(req.user);
});

module.exports = { registerUser, loginUser, currentUser };
