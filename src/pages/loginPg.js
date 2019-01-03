import React from 'react'
import Card from '../components/LoginPgComponents/Card/card';

// not sure how this will react with the collectionsPg.js state
// class LoginPg extends Component {
//   state = { 
//     name: '', // <-- Do we need this?
//     userName: '',
//     Password: ''
//    }
  function LoginPg() {
    return ( 
      <div>
        <Card/>
      </div>
     );
  }

export default LoginPg;
