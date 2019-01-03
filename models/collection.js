const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const collectionSchema = new Schema({
  name: { type: String, required: true },
  notes: String,
  date: { type: Date, default: Date.now },
  user: String,
});

const Collection = mongoose.model("Collection", collectionSchema);

module.exports = Collection;
