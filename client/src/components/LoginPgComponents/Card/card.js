import React, { Component } from 'react';
import LoginForm from '../LoginForm/loginForm'
import CreateAcctForm from '../CreateAcctForm/createAcctForm'
import './card.css';


class Card extends Component {
  
  state ={
    login : false,
    createAcct : false
  }

  // not rendering any modal when page first loads 
  modalRendering = () => {
      if (this.state.login) {
        return <LoginForm />;
      } else if (this.state.createAcct) {
        return <CreateAcctForm/>;
    }
  }

  render(){
 
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
        <button type="button" className="btn" onClick= {()=>(
           this.setState({login:true, createAcct:false})
          )}
        >   
         Login
        </button>
        
        <button type="button" className="btn" onClick= {()=>(
          this.setState({createAcct:true, login:false})
          )}>
        SignUp
        </button>

        {this.modalRendering()}
   </div>
  </div>
</div>
  );
}
}
export default Card;