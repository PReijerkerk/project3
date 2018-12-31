import React, { Component } from 'react';
// import posed from 'react-pose';
import Card from "../Components/LoginPgComponents/Card/Card";

// creating this to animate the Card component
//having it swoop in ideally from the left
// const Box = posed.div({
//   visible: { opacity: 1 },
//   hidden: { opacity: 0 }
// });

// not sure how this will react with the collectionsPg.js state
class LoggedIn extends Component {
  state = { 
    name: "",
    userName: "",
    Password: ""
   }

  //  not sure if this should be name or userName
   handleChange = name => event => {
     this.setState({
       [name]:event.target.value,
     });
   };

  render() {
    // const {classes} = this.props;
    return ( 
    <div>

    <Card/>

    </div>
     );
  }
}

export default LoggedIn;