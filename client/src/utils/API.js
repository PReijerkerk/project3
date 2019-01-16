// import axios from "axios";
// todos---
// CRUD for USERS COLLECTIONS ITEMS [x]
import axios from "axios";

export default {
    /////////////////////////////////
    ///////// ITEM API CRUD /////////
    // Create Item 
    createItem: function(itemData) {
        axios.post("/api/item", itemData)
    },
    // Get all items from database 
    getAllItems: function() {
        return axios.get("/api/items")
    },
    // Get Item By ID
    getItemById: function(id) {
        return axios.get("/api/items/" + id)
    },
    // Update Item Info
    updateItem: function(id, itemData) {
        return axios.put("/api/item/" + id, itemData)
    },
    // Delete Item by ID
    deleteItem: function(id) {
        return axios.delete("/api/item" + id)
    },

    /////////////////////////////////
    ///////// CASE API CRUD /////////
    //Creates a collection to the DB uder the user ID
    createCollection: function(collectionData) {
        return axios.post("/api/collections", collectionData);
    },
    //Get All collections -- not user specific
    getAllCollections: function() {
        return axios.get("/api/collections")
    },
    //Get collection by ID
    getCollectionById: function(id) {
        return axios.get("/api/collections/" + id)
    },
    //Update Collection by collection id
    updateCollection: function(id, collectionData) {
        return axios.put('/api/collections/'+ id, collectionData)
    },
    //Delete Collection with matching ID
    deleteCollection: function(id) {
        return axios.delete("/api/collections/" + id);
    },
/////////////////////////////////
///////// USER API CRUD /////////
    // Create User
    createUser: function(userData) {
        return axios.post('/api/users', userData)
    },
    // Get all Users
    getAllUsers: function() {
        return axios.get('/api/users')
    },
    // Get User by Id
    getUserById: function(id) {
        return axios.get('/api/users/' + id)
    },
    // Update User Data
    updateUser: function(id, userData) {
        return axios.put('/api/users/' + id, userData)
    },
    // Deletes User by ID
    deleteUser: function(id) {
        return axios.delete('/api/users/' + id)
    },
    userLogin: function(userData) {
        return axios.post('/api/login', userData)
    }   
};