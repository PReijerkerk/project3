import axios from "axios";

//Get users collection
let getUserCollection = (googleId) => {
    axios.get('/api/user/collection/' + googleId)
    .then(function(response) {
    });
}

let getUserRecord = (googleId) => {
    axios.get('/api/user/' + googleId)
    .then(function(response) {
    });
}

let getItemDetails = (itemId) => {
    axios.get('/api/savedItem/' + itemId)
    .then(function(response) {
    });
}

let createUser = (name, googleId, imageURL, email) => {
    axios.post('/api/user/create-user', {
        name: name,
        googleId: googleId,
        imageURL: imageURL,
        email: email
    }).then(function(response) {
    });
}

export default {
    getUserCollection: getUserCollection,
    getUserRecord: getUserRecord,
    getItemDetails: getItemDetails,
    createUser: createUser
}