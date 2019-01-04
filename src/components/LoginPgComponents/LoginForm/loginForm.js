// this element combines Pose JS's modal ability - not being JQuery and 
//rendering inside it a bootstrap form for this long. 
//additionally added a Z to the end of modal and Modal because 
//pose js was conflicting with Bootstraps common naming - this fixed the issue.

import React from 'react';
import posed, { PoseGroup } from 'react-pose';
import "./loginForm.css"

const Modalz = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    delay: 300,
    transition: {
      y: { type: 'spring', stiffness: 1200, damping: 35 },
      default: { duration: 300 }
    }
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 150 }
  }
});

// not sure if I need Shade for this ... 
const Shade = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

class LoginModal extends React.Component{

  state = { isVisible: false };

  componentDidMount() {
      this.setState({
        isVisible: !this.state.isVisible
      });
  }

  render() {
    const { isVisible } = this.state;

    return (
      <PoseGroup>
        {isVisible && [
          // If animating more than one child, each needs a `key`
          <Shade key="shade" className="shade" />,
          <Modalz key="modalz" className="modalz">
           <p>Please Login Below:</p>
            {/* insertion of login form: */}
          <form action="/">
            <div className="form-group">
              <label htmlFor="email">Email address:</label>
              <input type="email" className="form-control" id="email"/>
            </div>
            <div className="form-group">
              <label htmlFor="pwd">Password:</label>
              <input type="password" className="form-control" id="pwd"/>
            </div>
            <div className="checkbox">
              <label><input type="checkbox"/> Remember me</label>
            </div>
            {/* button should be linked not just to the login from passport but also a move over to the "mainPg"*/}
            <button type="submit" className="btn btn-default">
            Submit
          </button>
          </form>
          </Modalz>
        ]}
      </PoseGroup>
    );
  }
}

export default LoginModal;