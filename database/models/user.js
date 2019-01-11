
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
    case:  [
        {
          // Store ObjectIds in the array
          type: Schema.Types.ObjectId,
          // The ObjectIds will refer to the ids in the Note model
          ref: "Case"
        }
      ]
});

//Create model from Schema
const User = mongoose.model('User', userSchema);
   
module.exports = User;