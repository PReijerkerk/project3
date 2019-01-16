import React from 'react';
import About from '../components/MainPgComponents/About/about'
// import Footer from '../components/MainPgComponents/Footer/footer'
import LoggedInRendering from '../components/MainPgComponents/NavTabs/loggedInRendering'


function AboutUs() {
  return (
    <div>
      <LoggedInRendering/>
      <About />
    </div>
  );
}

export default AboutUs
