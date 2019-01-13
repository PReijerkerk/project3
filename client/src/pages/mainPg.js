import React from 'react'
import Profile from '../components/MainPgComponents/Profile/profile'
import "../components/MainPgComponents/Profile/profile.css"
import Footer from '../components/MainPgComponents/Footer/footer'
import Parallax from '../svg _background_files/rellax';
import './profile.css';
function MainPg() {
  return (
    <div className="mainContainer">
  
      {/* should render parallax benind profile - not working */}
      <Parallax className="SVG"/>
      <Profile className= "profile" />
     
      <br></br>
      <Footer />
    
    </div>

  )
}


export default MainPg
