import React from 'react'
import Card from '../components/LoginPgComponents/Card/card'
import Footer from '../components/MainPgComponents/Footer/footer'
import Carousel from '../components/LoginPgComponents/Carousel/Carousel'

  function LoginPg(props) {
    return ( 
      <div>
        <Carousel />
        <Card toggleLoggedIn={props.toggleLoggedIn}/>
        <Footer />
      </div>
     );
  }

export default LoginPg;
