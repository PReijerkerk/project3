import React from 'react'
import Profile from '../components/MainPgComponents/Profile/profile'
import "../components/MainPgComponents/Profile/profile.css"
import Footer from '../components/MainPgComponents/Footer/footer'

function MainPg(props) {
  return (
    <div className="mainContainer">
      <Profile {...props}/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </div>
  )
}

export default MainPg
