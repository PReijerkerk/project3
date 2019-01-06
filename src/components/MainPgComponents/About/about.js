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
              <h4>Front End</h4>
              <div className="row pt-md">
                <br/>
                <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 profile1">
                  <div className="img-box">
                    <img src="https://avatars3.githubusercontent.com/u/25070320?s=460&v=4" className="img-responsive aboutPic"/>
                    <ul className="text-center">
                      <a href="#"><li><i className="fa fa-github"></i></li></a>
                      <a href="#"><li><i className="fa fa-linkedin"></i></li></a>
                    </ul>
                  </div>
                  <h1 className="name">Jeremy Brown</h1>
                  <h2>Front End Developer</h2>
                  <p>Created and designed all front end aspects of the webpage</p>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 profile2">
                  <div className="img-box">
                    <img src="https://avatars0.githubusercontent.com/u/41157206?s=460&v=4" className="img-responsive aboutPic"/>
                    <ul className="text-center">
                      <a href="#"><li><i className="fa fa-github"></i></li></a>
                      <a href="#"><li><i className="fa fa-linkedin"></i></li></a>
                    </ul>
                  </div>
                  <h1 className="name">Jared Spears</h1>
                  <h2>Front End Developer</h2>
                  <p>Created and designed all front end aspects of the webpage</p>
                </div>
            </div>
            {/*Back End Guys*/}
            <h4>Back End</h4>
            <div className="row pt-md">
                <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 profile1">
                  <div className="img-box">
                    <img src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/10247812_10202330084999010_4361321945622106678_n.jpg?_nc_cat=103&_nc_ht=scontent-iad3-1.xx&oh=c5b7b4aa92574f546afa3f2b02e1b749&oe=5CCE6DDF" className="img-responsive aboutPic"/>
                    <ul className="text-center">
                      <a href="#"><li><i className="fa fa-github"></i></li></a>
                      <a href="#"><li><i className="fa fa-linkedin"></i></li></a>
                    </ul>
                  </div>
                  <h1 className="name">Taylor Lane</h1>
                  <h2>Back End Developer</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 profile2">
                  <div className="img-box">
                    <img src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/10394615_10205475263540302_3209673496825721256_n.jpg?_nc_cat=111&_nc_ht=scontent-iad3-1.xx&oh=a9fbb4dad3d49d8edffaa392fc43c5e8&oe=5CD79E2C" className="img-responsive aboutPic"/>
                    <ul className="text-center">
                      <a href="#"><li><i className="fa fa-github"></i></li></a>
                      <a href="#"><li><i className="fa fa-linkedin"></i></li></a>
                    </ul>
                  </div>
                  <h1 className="name">Dan DiLoreto</h1>
                  <h2>Back End Developer</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </div>
            {/*Project Manager/Floater*/}
            <h4>Project Manager/Floater</h4>
            <div className="row pt-md">
                <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 profile1">
                  <div className="img-box">
                    <img src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/26903651_10156170040269515_7393536611197505886_n.jpg?_nc_cat=100&_nc_ht=scontent-iad3-1.xx&oh=658a2a6517409d77d58bb5e6ba2138ca&oe=5C8FE242" className="img-responsive aboutPic"/>
                    <ul className="text-center">
                      <a href="#"><li><i className="fa fa-github"></i></li></a>
                      <a href="#"><li><i className="fa fa-linkedin"></i></li></a>
                    </ul>
                  </div>
                  <h2 className="name">Peter Reijerkerk</h2>
                  <h2>Project Manager</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
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
