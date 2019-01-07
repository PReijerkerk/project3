import React from 'react'
import Profile from '../components/MainPgComponents/Profile/profile'
import "../components/MainPgComponents/Profile/profile.css"
import Footer from '../components/MainPgComponents/Footer/footer'

function MainPg() {
  return (
    <div className="mainContainer">
      <Profile />
      <Footer />
    </div>
  )
}

export default MainPg
