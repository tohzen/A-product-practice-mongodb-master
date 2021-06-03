const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    userName: {
        type: String
    }
});

module.exports = mongoose.model('user', userSchema)

// new keyword creates new object
// mongodb {}  ----- blank object until we put stuff in it via the user router and user controller.

// This is where we keep our database format sheet.
// this is what we use to fill in our database information slots.