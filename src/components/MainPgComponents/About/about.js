// perhaps if we need this to go into more detail after the MVP is completed
//we can use this to discribe how we did what we did and why 
//the initial login card does explain a breif what we are statement.
import React from 'react';
import './about.css'

function About() {
  return (
    <section className="team">
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <div className="col-lg-12">
              <h1 className="description"><strong>MEET THE ALLSTARS</strong></h1>
              {/*Front End Guys*/}
              <h4 className="aboutTitles">Front End Developers - Website Design and Effects</h4>
              <div className="row pt-md">
                <br/>
                <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 profile1">
                  <div className="img-box">
                    <img src="https://avatars3.githubusercontent.com/u/25070320?s=460&v=4" className="img-responsive aboutPic" alt="JB"/>
                    <ul className="overlay">
                      <a href="https://github.com/CodeBreaker1023"><li><i className="fa fa-github"></i></li></a>
                      <a href="https://www.linkedin.com/in/jeremy-brown-26b2754b/"><li><i className="fa fa-linkedin"></i></li></a>
                    </ul>
                  </div>
                  <h1 className="name">Jeremy Brown</h1>
                  <p>Don't ask him about Bitcoin</p>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 profile2">
                  <div className="img-box">
                    <img src="https://avatars0.githubusercontent.com/u/41157206?s=460&v=4" className="img-responsive aboutPic" alt="JS"/>
                    <ul className="overlay">
                      <a href="https://github.com/jaredtspears"><li><i className="fa fa-github"></i></li></a>
                      <a href="https://www.linkedin.com/in/jared-spears-ha1f-deaf"><li><i className="fa fa-linkedin"></i></li></a>
                    </ul>
                  </div>
                  <h1 className="name">Jared Spears</h1>
                  <p>DBZ anyone?</p>
                </div>
            </div>
            {/*Back End Guys*/}
            <h4 className="aboutTitles">Back End - Website Functionality and Databases</h4>
            <div className="row pt-md">
                <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 profile1">
                  <div className="img-box">
                    <img src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/10247812_10202330084999010_4361321945622106678_n.jpg?_nc_cat=103&_nc_ht=scontent-iad3-1.xx&oh=c5b7b4aa92574f546afa3f2b02e1b749&oe=5CCE6DDF" className="img-responsive aboutPic" alt="TL"/>
                    <ul className="overlay">
                      <a href="https://github.com/tblane88"><li><i className="fa fa-github"></i></li></a>
                      <a href="https://www.linkedin.com/in/taylor-lane-21425954/"><li><i className="fa fa-linkedin"></i></li></a>
                    </ul>
                  </div>
                  <h1 className="name">Taylor Lane</h1>
                  <p>He'll talk your ear off</p>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 profile2">
                  <div className="img-box">
                    <img src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/10394615_10205475263540302_3209673496825721256_n.jpg?_nc_cat=111&_nc_ht=scontent-iad3-1.xx&oh=a9fbb4dad3d49d8edffaa392fc43c5e8&oe=5CD79E2C" className="img-responsive aboutPic" alt="DD"/>
                    <ul className="overlay">
                      <a href="https://github.com/diloretodg"><li><i className="fa fa-github"></i></li></a>
                      <a href="https://www.linkedin.com/in/daniel-diloreto-a627ab167/"><li><i className="fa fa-linkedin"></i></li></a>
                    </ul>
                  </div>
                  <h1 className="name">Dan DiLoreto</h1>
                  <p>Blacks out after two beers</p>
                </div>
            </div>
            {/*Project Manager/Floater*/}
            <h4 className="aboutTitles">Project Manager/Floater</h4>
            <div className="row pt-md">
                <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 profile1">
                  <div className="img-box">
                    <img src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/26168857_10156110542959515_3878801804154659300_n.jpg?_nc_cat=101&_nc_ht=scontent-iad3-1.xx&oh=7b45a06ee54f94fbe43f0987640ae610&oe=5CC27AD8" className="img-responsive aboutPic" alt="PR"/>
                    <ul className="overlay">
                      <a href="https://github.com/PReijerkerk"><li><i className="fa fa-github"></i></li></a>
                      <a href="https://www.linkedin.com/in/peter-reijerkerk-13a51a102/"><li><i className="fa fa-linkedin"></i></li></a>
                    </ul>
                  </div>
                  <h2 className="name">Peter Reijerkerk</h2>
                  <p>Isn't he cute?!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About
