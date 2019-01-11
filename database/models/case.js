const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
    {type: mongoose.Schema.ObjectId, ref: 'Items'}
],

// May be an error
user: {
    type: mongoose.Schema.ObjectId, ref: 'User',
    type: String,
    required: true
}
})

const Case = mongoose.model("Case", caseSchema);

module.exports = Case;
