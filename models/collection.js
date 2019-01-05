const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const collectionSchema = new Schema({
name: {
    type: String,
    required: true
    },
date: {
    type: Date,
    default: Date.now
},
items: [
    {type: mongoose.Schema.ObjectId, ref: 'Item'}
],
user: {
    type: mongoose.Schema.ObjectId, ref: 'User',
    required: true
}
})

const Collection = mongoose.model("Collection", collectionSchema);

module.exports = Collection;
