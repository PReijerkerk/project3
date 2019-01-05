const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    note: {
        type: String
    },
    collection: {
        type: mongoose.Schema.ObjectId, ref: 'Collection',
        required: true
    },
    user: {
        type: mongoose.Schema.ObjectId, ref: 'User',
        required: true
    }


})

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;