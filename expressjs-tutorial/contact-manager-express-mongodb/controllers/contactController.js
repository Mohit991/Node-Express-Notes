const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
//@desc Get all contacts
//@route GET /api/contacts
//@access private
const getAllContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find({ user_id: req.user_id });
    res.status(200).json(contacts);
});

//@desc Get single contacts
//@route GET /api/contacts/:id
//@access private
const getSingleContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    //If the contact's user id and user id of the logged in user does not match
    if (contact.user_id.toString() !== req.user.id) {
        res.status(403)
        throw new Error("User do not have permission to update another user's contacts")
    }
    res.status(200).json(contact);
});

//@desc Create new contact
//@route POST /api/contacts
//@access private
const createNewContact = asyncHandler(async (req, res) => {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are needed!");
    }
    //creating and adding new contact to mongo
    const contact = await Contact.create({
        name: name,
        email: email,
        phone: phone,
        user_id: req.user.id //This will come because we added it at the time of the token
    });
    res.status(200).json(contact);
});

//@desc Update a contacts
//@route PUT /api/contacts/:id
//@access private
const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    //If the contact's user id and user id of the logged in user does not match
    if (contact.user_id.toString() !== req.user.id) {
        res.status(403)
        throw new Error("User do not have permission to update another user's contacts")
    }
    const updatedContactFromBody = req.body;
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        updatedContactFromBody,
        { new: true }
    );

    res.status(200).json(updatedContact);
});

//@desc Delete a contacts
//@route DELETE /api/contacts/:id
//@access private
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    //If the contact's user id and user id of the logged in user does not match
    if (contact.user_id.toString() !== req.user.id) {
        res.status(403)
        throw new Error("User do not have permission to update another user's contacts")
    }
    const deletedContact = await Contact.deleteOne(req.params.id);
    res.status(200).json(deletedContact);
});

module.exports = {
    getAllContacts,
    getSingleContact,
    createNewContact,
    updateContact,
    deleteContact,
};
