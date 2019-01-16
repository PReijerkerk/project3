import React from 'react'
import Card from '../components/LoginPgComponents/Card/card'
import Footer from '../components/MainPgComponents/Footer/footer'
import Carousel from '../components/LoginPgComponents/Carousel/Carousel'
import LoggedInRendering from '../components/MainPgComponents/NavTabs/loggedInRendering'

  function LoginPg(props) {
    return ( 
      <div>
        <LoggedInRendering/>
        <Carousel />
        <Card toggleLoggedIn={props.toggleLoggedIn}/>
        <Footer />
      </div>
     );
  }

export default LoginPg;
