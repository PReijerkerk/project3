import React from 'react';
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
        
        {/* buttons for login or sign up */}
        <button type="button" className="btn btn-outline-success">Login</button>
        <button type="button" className="btn btn-outline-secondary">SignUp</button>
   </div>
  </div>
</div>

  );
}

export default Card;