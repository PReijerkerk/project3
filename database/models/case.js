const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ItemSchema = require('./items')


const caseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    story: {
        type: String,

    },
    date: {
        type: Date,
        default: Date.now
    },
    items: [
        {type: mongoose.Schema.ObjectId, ref: 'Item'}
    ],

})

const Case = mongoose.model("Case", caseSchema);

module.exports = Case;
