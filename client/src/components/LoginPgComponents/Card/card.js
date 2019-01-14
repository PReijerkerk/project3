import React, { Component } from 'react';
import './card.css';
import { GoogleLogout, GoogleLogin } from 'react-google-login';
import LoggedInNavTabs from '../../MainPgComponents/NavTabs/loggedInRendering'


const logout = () => {
  console.log('logout') // eslint-disable-line
  sessionStorage.clear();
}
// let isUserInDB = (response) => {
//   if (TCAPI.getUserRecord(response.profileObj.googleId)) {
//       sessionStorage.setItem("username", response.profileObj.name);
//       sessionStorage.setItem("email", response.profileObj.email);
//       TCAPI.getUserCollection(response.profileObj.googleId);
//   }  
//   else {
//       TCAPI.createUser(response.profileObj.name, response.profileObj.googleId, response.profileObj.imageUrl, response.profileObj.email);
//       sessionStorage.setItem("username", response.profileObj.name);
//       sessionStorage.setItem("email", response.profileObj.email);
//   }
// }

class Card extends Component {

    state = {
    isLoggedIn: false
  }

  // upon being called the full navBar will Render again
  //this should be set up for the login, logout buttons
  loggedInRendering = () =>{
    if(this.state.isLoggedIn){
      return <LoggedInNavTabs/>
    }
  }

  render(){
    const responseGoogle = (response) => {
      console.log(response);
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
            <div className="card-footer">
        
        {/* added onClick rendering that worked on the NavTabs.js 
        to the loggedInRendering.js file */}
        <GoogleLogin

                className="btn"    
                clientId="954580373008-teabf1ael8s16gqpriuf257i298gr2fv.apps.googleusercontent.com"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                onClick= {()=>(
                  this.setState({isLoggedIn:true})
                )}
                />
            <GoogleLogout
                className="btn"
                buttonText="Logout"
                onLogoutSuccess={logout}
            >
            </GoogleLogout>
   </div>
  </div>
  {this.loggedInRendering()}

</div>
  );
}
}
export default Card;
