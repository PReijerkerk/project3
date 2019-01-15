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
        type: Number,
        default: 0
    },
    note: {
        type: String
    },
    imageURL: {
        type: String,
        default: "default"
    }
    // case: {
    //     type: mongoose.Schema.ObjectId, ref: 'Case',
    //     required: true
    // },
})

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;