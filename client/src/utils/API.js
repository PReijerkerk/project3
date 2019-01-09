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

    deleteCollection: function(id) {
        return axios.delete("/api/collections/" + id);
      },
    // Posts a collection to the DB uder the user ID
    saveCollection: function(collectionData) {
        console.log("post call recieved")
        return axios.post("/api/collections", collectionData);
    },
};