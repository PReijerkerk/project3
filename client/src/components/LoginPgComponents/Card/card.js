import React, { Component } from 'react';
import './card.css';
import { GoogleLogout, GoogleLogin } from 'react-google-login';
import LoggedInNavTabs from '../../MainPgComponents/NavTabs/loggedInRendering'
import { FormBtn } from '../../CollectionsPgComponents/Form';
import API from "../../../utils/API";
import axios from 'axios';


const logout = () => {
  console.log('logout') // eslint-disable-line
  sessionStorage.clear();
}

class Card extends Component {

  constructor(props){
    super(props);
    this.state = {
      email: " ",
      password: " ",
      firstName: " ",
      lastName: " "
    }
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("Clicked!! Email: " + this.state.email + " Password: " + this.state.password);
    API.createUser({
      email: this.state.email,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName
    })
    .then(response => {
      if(response.data) {
        console.log('successful signup')
        this.setState({
          redirectTo: '/profile'
        })
      } else {
        console.log('Sign-up error');
      }
    }).catch(error => {
      console.log('Sign up server error: ')
      console.log(error);
    })

    
  }

  // upon being called the full navBar will Render again
  //this should be set up for the login, logout buttons
  loggedInRendering = () =>{
    if(this.state.isLoggedIn){
      //return <LoggedInNavTabs/>
    }
  }

  render(){
    // const responseGoogle = (response) => {
    //   console.log("This is the RESPONSE! " + response);
    // }

  return (
    <div>
      <div className="card border-success mb-3 text-center">
        <div className="card-header bg-transparent border-success"><h1>Trophy Case</h1></div>
          <div className="card-body text-success">
            <h5 className="card-title">Who We Are:</h5>
              <p className="card-text"> Our Telos is to compile user collections! 
                We want your hobbies and pastimes to be conveniently accessible for 
                you. That said, we pride ourselves in providing top-tier data storage 
                and an inviting user experience that will display your "Trophy Case" of collections
                in all their glory!
              </p>
          </div>
            <div className="card-footer">
        <form> 
            <label htmlFor="firstName">First Name: </label>
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleInputChange}
              />

              <br/>
              <br/>

            <label htmlFor="lastName">Last Name: </label>
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleInputChange}
              />
              <br/>
              <br/>

            <label htmlFor="email">Email: </label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              />
              <br/>
              <br/>

            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              />

              <br/>
              <FormBtn
              disabled={!(this.state.email && this.state.password && this.state.firstName && this.state.lastName)}
              onClick={this.handleFormSubmit}
              >
              Sign UP
              </FormBtn>
        </form>
        {/* added onClick rendering that worked on the NavTabs.js 
        to the loggedInRendering.js file */}
        {/* <GoogleLogin

                className="btn"    
                clientId="954580373008-teabf1ael8s16gqpriuf257i298gr2fv.apps.googleusercontent.com"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}

                // this should be called after the login is confirmed (this might need to be passed as a prop again)
                onClick= {this.props.toggleLoggedIn}
                uxMode="redirect"
                redirectUri="https://tc-trophy-case.herokuapp.com/profile"
                />
            <GoogleLogout
                className="btn"
                buttonText="Logout"
                onLogoutSuccess={logout}
            >
            </GoogleLogout> */}
  
   </div>
  </div>
  {/* {this.loggedInRendering()} */}

</div>
  );
}
}
export default Card;
