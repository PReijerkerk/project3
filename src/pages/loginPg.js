import React from 'react'
// import React, { Component } from 'react';
import Card from '../Components/LoginPgComponents/Card/Card';

// not sure how this will react with the collectionsPg.js state
// class LoginPg extends Component {
//   state = { 
//     name: '', // <-- Do we need this?
//     userName: '',
//     Password: ''
//    }

//   //  not sure if this should be name or userName
//    handleChange = name => event => {
//      this.setState({
//        [name]:event.target.value,
//      });
//    };

//   render() { 

    // const {classes} = this.props;
  function LoginPg() {
    return ( 
    <div>
{/* need to install bootstrap component here */}
    <Card />
    </div>
     );
  }

export default LoginPg;