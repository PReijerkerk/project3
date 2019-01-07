import React from 'react'
import Card from '../components/LoginPgComponents/Card/card'
import Footer from '../components/MainPgComponents/Footer/footer'
import Carousel from '../components/LoginPgComponents/Carousel/Carousel'

  function LoginPg() {
    return ( 
      <div>
        <Carousel />
        <Card/>
        <Footer />
      </div>
     );
  }

export default LoginPg;
