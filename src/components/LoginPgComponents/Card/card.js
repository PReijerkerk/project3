import React from 'react';
import LoginForm from '../LoginForm/loginForm'
import CreateAcctForm from '../CreateAcctForm/createAcctForm'
import './card.css';

function Card() {

  return (
    <div>
      <div className="card border-success mb-3 text-center">
        <div className="card-header bg-transparent border-success"><h1>Trophy Case</h1></div>
          <div className="card-body text-success">
            <h5 className="card-title">Who We Are:</h5>
              <p className="card-text"> Our Telos is to compile user collections! 
                We want your hobbies & passtimes to be conveniently accessible for 
                you. That said, we pride ourselves in top tier data-storage 
                and an inviting user experience that will display what we call your "Trophy Case" 
                in all its glory!
              </p>
          </div>
            <div className="card-footer bg-dark border-success">
        
        {/* buttons for login or sign up 
            Currently Not working in the onClick Function within btn element - it does work 
            if you drag out <LoginForm/> and place it between the open/closing tags of btn - 
            the issues then is that it is always rendered */}
        <button type="button" className="btn btn-outline-success" onClick= {()=>(
           <LoginForm/>
          )}
        >
         Login
         {/* <LoginForm/> cannot place here because it looks crazy and esentially is a form that is also a button */}
        </button>
        {/* <LoginForm/> cannot place here because the card is then the div of the form - this the buttons login and sign up have no use with this implementation */}
        
        <button type="button" className="btn btn-outline-secondary" onClick= {()=>(
          <CreateAcctForm/>
          )}>
        SignUp
        
        </button>
   </div>
  </div>
</div>

  );
}

export default Card;