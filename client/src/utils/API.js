// import axios from "axios";
import axios from "axios";

export default {
    // Get All collections -- not user specific
    getAllCollections: function() {
        console.log("call recieved");
        return axios.get("/api/collections")
    },
    //Get collection by ID
    getCollectionById: function(id) {
        return axios.get("/api/collections/" + id)
    },
    // update Collection by collection id
    updateCollection: function(id, collectionData) {
        return axios.put('/api/collections/'+ id, collectionData)
    },

    deleteCollection: function(id) {
        return axios.delete("/api/collections/" + id);
      },
    // Posts a collection to the DB uder the user ID
    createCollection: function(collectionData) {
        console.log("post call recieved")
        return axios.post("/api/collections", collectionData);
    },
};