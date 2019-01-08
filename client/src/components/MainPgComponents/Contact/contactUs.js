// Simple contact us form
import React from 'react';
import './contactUs.css'

function ContactUs() {
  return (
    <div className="container contact-form">
      <div className="contact-image">
          <img src="http://corrupteddevelopment.com/wp-content/uploads/2011/10/3d-email-icon-e1318315864246.jpg" alt="rocket_contact"/>
      </div>
      <form method="post">
          <h3><strong>Drop Us a Message</strong></h3>
          <h4>We would love to hear from you</h4>
          <div className="row">
              <div className="col-md-6">
                  <div className="form-group">
                      <input type="text" name="txtName" className="form-control" placeholder="Your Name *" value="" />
                  </div>
                  <div className="form-group">
                      <input type="text" name="txtEmail" className="form-control" placeholder="Your Email *" value="" />
                  </div>
                  <div className="form-group">
                      <input type="text" name="txtPhone" className="form-control" placeholder="Subject" value="" />
                  </div>
                  <div className="form-group">
                      <input type="submit" name="btnSubmit" className="btnContact" value="Send Message" />
                  </div>
              </div>
              <div className="col-md-6">
                  <div className="form-group">
                      <textarea name="txtMsg" className="form-control" id="textarea" placeholder="Your Message *"></textarea>
                  </div>
              </div>
          </div>
      </form>
    </div>
  );
}

export default ContactUs
