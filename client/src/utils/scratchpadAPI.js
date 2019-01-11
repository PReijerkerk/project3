// that the user clicked before
// turn this into an axios call for the collections controller

import axios from "axios";

export default {
    updateCollection: function(id, collectionData) {
        return axios.put("/api/collections/${id}", collectionData)
    },

}

// $.ajax({
//     type: "POST",
//     url: "/update/" + selected.attr("data-id"),
//     dataType: "json",
//     data: {
//       title: $("#title").val(),
//       note: $("#note").val()
//     },
//     // On successful call
//     success: function(data) {
//       // Clear the inputs
//       $("#note").val("");
//       $("#title").val("");
//       // Revert action button to submit
//       $("#action-button").html("<button id='make-new'>Submit</button>");
//       // Grab the results from the db again, to populate the DOM
//       getResults();
//     }
//   });
// });
