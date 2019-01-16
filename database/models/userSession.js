const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CaseSchema = require('./case');
const ItemSchema = require('./items')

//Create Schema
const userSessionSchema = new Schema({
    userId: {
        type: String,
        default: -1
    },
    timestamp: {
        type: Date,
        default: Date.now()
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
});

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
}

//Create model from Schema
const UserSession = mongoose.model('UserSession', userSessionSchema);
   
module.exports = UserSession;