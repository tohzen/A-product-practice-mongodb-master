const User = require('../model/User');

module.exports = {
    getAllUsers: function (callback) {
        User.find({}, function (err, payload) {
            if (err) {
                callback(err, null);
            } else {
                callback(null, payload)
            }
        });
    },

    createUser: function (body, callback) {
        // create a mongodb user object it will assign a unique id for the user
        let createdUser = new User({
            firstName: body.firstName,
            lastName: body.lastName,
            userName: body.userName,
            password: body.password,
            email: body.email
        })

        createdUser.save(function (err, payload) {
            // the save() function will save it to the database.

            if (err) {
                callback(err, null);
            } else {
                callback(null, payload)
            }
        })
    },

    updateUserByID: function (id, body, callback) {
        User.findByIdAndUpdate(
            { _id: id },
            body,
            { new: true },
            function (err, updatedPayload) {
                if (err) {
                    callback(err, null);
                } else {
                    callback(null, updatedPayload);
                }
            }
        );
    },

    deleteUserByID: function (id, callback) {
        User.findByIdAndRemove({ _id: id }, function (err, deletedPayload) {
            if (err) {
                callback(err, null);
            } else {
                callback(null, deletedPayload);
            }
        });
    },
}