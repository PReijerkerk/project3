import React from 'react';
import './LoginCard.css';

const LoginCard = props =>(
  <div className="card teal darken-3">
  <div className="card-content">
  <h4>Trophy Case</h4>
    <h5>Welcome! Choose your entry:</h5>
  </div>
  <div className="card-tabs">
    <ul className="tabs tabs-fixed-width">
      <li className="tab"><a href="#login">Login</a></li>
      <li className="tab"><a className="active" href="#cAcct">Create Account</a></li>
      <li className="tab"><a href="#about">About</a></li>
    </ul>
  </div>
  <div className="card-content teal darken-3 !important;">
    <div id="login">Welcome Back: <button className="waves-effect waves-light btn-small brown darken-2" >Login</button></div>
    <div id="cAcct">Create Your Trophy Case Profile: <button className="waves-effect waves-light btn-small lime lighten-4">New User</button></div>
    <div id="about">
      Our Telos is to compile user collections! 
      We want your hobbies & passtimes to be conveniently accessible for 
      you. That said, we pride ourselves in top tier data-storage 
      and an inviting user experience that will display what we call your "Trophy Case" 
      in all its glory!
    </div>
  </div>
</div>
)

export default LoginCard;