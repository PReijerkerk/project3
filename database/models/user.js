
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CaseSchema = require('./case');
const ItemSchema = require('./items')
const bcrypt = require('bcryptjs');

//Create Schema
const userSchema = new Schema({
    firstName: {
        type: String,
        default: ''
    },
    lastName: {
        type: String,
        default: ''
    },
    password: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    tcase:  [
        {
          // Store ObjectIds in the array
          type: Schema.Types.ObjectId,
          // The ObjectIds will refer to the ids in the Note model
          ref: "Case"
        }, 
    ]
});

userSchema.methods = {
    checkPassword: function (inputPassword) {
        return bcrypt.compareSync(inputPassword, this.password)
    },
    hashPassword: plainTextPassword => {
        return bcrypt.hashSynch(plainTextPassword, 10)
    }
}

// userSchema.pre('save', function (next) {
//     if (!this.password) {
//         console.log('models/user.js ========NO PASSWORD PROVIDED')
//         next()
//     } else {
//         console.log('models/user.js hashPassword in pre save');

//         this.password = this.hashPassword(this.password)
//         next()
//     }
// })
//Create model from Schema
const User = mongoose.model('User', userSchema);
   
module.exports = User;
