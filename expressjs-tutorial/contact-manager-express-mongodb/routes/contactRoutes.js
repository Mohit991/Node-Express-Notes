const express = require("express");
const router = express.Router();
const {
    getAllContacts,
    getSingleContact,
    createNewContact,
    updateContact,
    deleteContact,
} = require("../controllers/contactController");

//Importing the middleware.
const validateToken = require("../middleware/tokenHandler");
//Using the middleware on every route. 
//We first call the validateToken, if it passes then we allow the get and post requests below the middleware.
router.use(validateToken)
router.route("/").get(getAllContacts).post(createNewContact);;
router.route("/:id").get(getSingleContact).put(updateContact).delete(deleteContact);

module.exports = router;
