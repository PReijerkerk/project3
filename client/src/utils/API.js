// import axios from "axios";
import axios from "axios";

export default {
    // Get User collections
    getUserData: function(user) {
        return axios.get("/api/collections/" + user)
    },
    //  Get specific User collection 
    getUserCollection: function( user, collId) {
        return axios.get("/api/collections/" + collId);
    },
    // Get collection Item
    getCollectionObj: function (user, collId, objId) {
        return axios.get("/api/" + user +"/collections/" + collId + "/" + objId);
    },
    // Deletes the collection with the given collection id
    deleteCollection: function(user, collId) {
    return axios.delete("/api/" + user +"/collections/" + collId);
    },
    // Posts a collection to the DB uder the user ID
    saveCollection: function(user, collectionData) {
        return axios.post("/api/" + user +"/collections", collectionData);
    },
};