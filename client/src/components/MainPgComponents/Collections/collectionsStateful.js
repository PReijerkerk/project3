// import React, {Component} from 'react'
// import Grid from '@material-ui/core/Grid';
// import TextField from '@material-ui/core/TextField';
// // import * as contentful from 'contentful'; dont think I need this if i did look up cli for contentful

// // in case you need tokes for users: 
// // const USER_ID = '';
// // const ACCESS_TOKEN = '';

// // set user to a string until we find out what we need this constant to be
// const user = '';

// class Collections extends Component {
  
//   // state will have collections and search options for the user
//   state = { 
//     collections: [],
//     search: ''
//    }

//    constructor(){
//      super()
//      this.getCollections()
//    }

//   //  sometype of retrieving of collections function
//    getCollections = () => {
//     user.getLoggedCollections({
//       content_type:'collection',
//       query: this.state.search
//     })
//     // know that this change of state will need to be set... not sure what goes before it
//     .then((response){
//       this.setState({collections: response})
//     })
//     .catch((error) =>{
//       console.log("error occured while fetching data");
//       console.log(error);
//     });
//   )}

//   onSearchInputChange = (import) => {
//     if (event.target.value){
//       this.setState({searchString:event.target.value})
//     } else {
//       this.setState({searchString: ''})
//     }
//     this.getCollections();
//   }
//   render() { 
//     return ( 
//       <div>
//         {this.state.collections ? (

//         ): "No Collection Found"}
//       </div>
//      );
//   }
// }

// export default Collections;
