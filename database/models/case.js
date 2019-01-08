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
    {type: mongoose.Schema.ObjectId, ref: 'Item'}
],
user: {
    type: mongoose.Schema.ObjectId, ref: 'User',
    required: true
}
})

const Case = mongoose.model("Case", caseSchema);

module.exports = Case;
