import React from 'react';
import ContactUs from '../components/MainPgComponents/Contact/contactUs'
import Footer from '../components/MainPgComponents/Footer/footer'
import LoggedInRendering from '../components/MainPgComponents/NavTabs/loggedInRendering'

function Contact() {
  return (
    <div>
      <LoggedInRendering/>
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Contact;

