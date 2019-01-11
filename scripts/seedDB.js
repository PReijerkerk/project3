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
    items: [],
    user: "Notme"
  },
  {
    name: "Random Things",
    story: "This is all my other stuff",
    date: new Date(Date.now()),
    items: [],
    user: "Dantheman"
  },

];

const itemSeed = [
  {
    name: 'Bag of Potatoes',
    description: 'its a large bag of potatoes',
    price: 1,
    note: 'rather than fill out a form for each potato i decided to put all potatoes together in one bag',
    case: 'random things',
    user: 'Dantheman'
  },
];

const userSeed = [
  {
    username: 'Dantheman',
    password: 'password',
    timestamp: new Date(Date.now()),
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

db.Items
  .remove({})
  .then(() => db.Items.collection.insertMany(itemSeed))
  .then(data => {
    console.log(data.result.n + "items insertend into collections");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + "users fabricated");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
