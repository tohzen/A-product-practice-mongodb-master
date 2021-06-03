const Product = require('../model/Product');

module.exports = {
    getAllProducts: function (callback) {
        Product.find({}, function (err, payload){
            if (err){
                callback(err, null);
            } else {
                callback(null, payload)
            }
        })
    },

    createProduct: function (body, callback) {
        // create a mongodb user object it will assign a unique id for the user
        let createdProduct = new Product({
            productName: body.productName,
        })

        createdProduct.save(function (err, payload) {
            // the save() function will save it to the database.
            if (err) {
                callback(err, null);
            } else {
                callback(null, payload)
            }
        })
    },

    getProductByID: function (id, callback) {
        Product.findById(
            { _id: id },
            (err, payload)=>{
                if (err){
                    callback(err,null);
                } else {
                    callback(null, payload)
                }
            }
            )
    },

    updateProductByID: function (id, body, callback) {
        Product.findByIdAndUpdate(
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

    deleteProductByID: function (id, callback) {
        Product.findByIdAndRemove({_id: id}, (err, deletedPayLoad) => {
            if (err){
                callback(err, null);
            } else {
                callback(null, deletedPayLoad)
            }
        });
    },
}