import React, { Component } from 'react';
//import LoginForm from '../LoginForm/loginForm'
//import CreateAcctForm from '../CreateAcctForm/createAcctForm'
import './card.css';
import { GoogleLogout, GoogleLogin } from 'react-google-login';
import API from '../../../utils/API';

const logout = () => {
  console.log('logout') // eslint-disable-line
  sessionStorage.clear();
  window.location.reload();
}

let isUserInDB = (response) => {
  if (API.getUserRecord(response.profileObj.googleId)) {
      sessionStorage.setItem("username", response.profileObj.name);
      sessionStorage.setItem("email", response.profileObj.email);
      API.getUsersSavedRecipes(response.profileObj.googleId);
  }  
  else {
      API.createUser(response.profileObj.name, response.profileObj.googleId, response.profileObj.imageUrl, response.profileObj.email);
      sessionStorage.setItem("username", response.profileObj.name);
      sessionStorage.setItem("email", response.profileObj.email);
  }
}




class Card extends Component {
  
  // state ={
  //   login : false,
  //   createAcct : false
  // }

  // // not rendering any modal when page first loads 
  // modalRendering = () => {
  //     if (this.state.login) {
  //       return <LoginForm />;
  //     } else if (this.state.createAcct) {
  //       return <CreateAcctForm/>;
  //   }
  // }

  render(){
    const responseGoogle = (response) => {
      console.log(response);
      isUserInDB(response);
      window.location.reload(); // This reload is here so that once logged in, the user doesn't have to manually refresh to see their data appear in the app.
    }

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
            <div className="card-footer bg-dark">
        
        {/* buttons for login or sign up 
            Currently Not working in the onClick Function within btn element - it does work 
            if you drag out <LoginForm/> and place it between the open/closing tags of btn - 
            the issues then is that it is always rendered */}
        {/* <button type="button" className="btn" onClick= {()=>(
           this.setState({login:true, createAcct:false})
          )}
        >   
         Login
        </button>
        
        <button type="button" className="btn" onClick= {()=>(
          this.setState({createAcct:true, login:false})
          )}>
        SignUp
        </button> */}

        {/* {this.modalRendering()} */}
        <GoogleLogin
                clientId="219205541710-tbgv10kbpl60g72od59iu9t68aaiu8e3.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                />
            <GoogleLogout
                buttonText="Logout"
                onLogoutSuccess={logout}
            >
            </GoogleLogout>
   </div>
  </div>
</div>
  );
}
}
export default Card;