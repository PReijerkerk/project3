// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var collectionArray = [
  {
    name: "Ahmed",
    story: "ahmed@example.com",
    user: "Dantheman",
    item: [],
    date: 11/11/2011
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = collectionArray;
