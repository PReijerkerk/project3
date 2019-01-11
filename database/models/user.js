
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        // validate: {
        //     isUsername: true
        // }
    },
    password: {
        type: String,
        required: true,
        allowNull: false
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
});

//Create model from Schema
const User = mongoose.model('User', userSchema);
   
module.exports = User;