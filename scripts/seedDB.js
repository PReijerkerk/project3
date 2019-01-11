const mongoose = require("mongoose");
const db = require("../database/models");

// This file empties the Cases collection and inserts the Cases below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/trophycase"
);

const caseSeed = [

  {
    name: "Music",
    story: "This is all my music stuff",
    date: new Date(Date.now()),
    items: ["item1", "item2", "item3"],
    user: "Dantheman",
    
  },
  {
    name: "Movies",
    story: "This is all my movie stuff",
    date: new Date(Date.now()),
    items: [],
    user: "Dantheman"
  },
  {
    name: "Cards",
    story: "This is all my cards",
    date: new Date(Date.now()),
    items: ["item1", "item2", "item3"],
    user: "Dantheman"
  },

];

db.Case
  .remove({})
  .then(() => db.Case.collection.insertMany(caseSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
