const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getAllContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

//@desc Get single contacts
//@route GET /api/contacts/:id
//@access public
const getSingleContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
});

//@desc Create new contact
//@route POST /api/contacts
//@access public
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
    });
    res.status(200).json(contact);
});

//@desc Update a contacts
//@route PUT /api/contacts/:id
//@access public
const updateContact = asyncHandler(async (req, res) => {
    const id = await Contact.findById(req.params.id);
    if (!id) {
        res.status(404);
        throw new Error("Contact not found");
    }

    const updatedContactFromBody = req.body;
    const updatedContact = await Contact.findByIdAndUpdate(
        id,
        updatedContactFromBody,
        { new: true }
    );

    res.status(200).json(updatedContact);
});

//@desc Delete a contacts
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
    const id = await Contact.findById(req.params.id);
    if (!id) {
        res.status(404);
        throw new Error("Contact not found");
    }

    const deletedContact = await Contact.deleteOne(id);
    res.status(200).json(deletedContact);
});

module.exports = {
    getAllContacts,
    getSingleContact,
    createNewContact,
    updateContact,
    deleteContact,
};
