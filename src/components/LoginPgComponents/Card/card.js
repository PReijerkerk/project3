import React, { Component } from 'react';
import posed, { PoseGroup } from 'react-pose';
import './card.css';

const Modalz = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    delay: 300,
    transition: {
      y: { type: 'spring', stiffness: 1000, damping: 15 },
      default: { duration: 300 }
    }
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 150 }
  }
});

const Shade = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

class Card extends Component {
  state = { isVisible:false };
  componentDidMount = () => {
      this.setState({
        isVisible: !this.state.isVisible
      })
    };
  
  
  render() { 
    const {isVisible} = this.state;

    return ( 
      <PoseGroup>
        {isVisible && [
          // If animating more than one child, each needs a `key`
          <Shade key="shade" className="shade" />,
          <Modalz key="modalz" className="modalz">
            <div>
              <div className="card border-success mb-3 text-center">
              <div className="card-header bg-transparent border-success"><h1>Trophy Case</h1></div>
                <div className="card-body text-success">
                  <h5 className="card-title">Who We Are:</h5>
                    <p className="card-text"> Our Telos is to compile user collections! 
                      We want your hobbies & passtimes to be conveniently accessible for 
                      you. That said, we pride ourselves in top tier data-storage 
                      and an inviting user experience that will display what we call your "Trophy Case" 
                      in all its glory!
                    </p>
                </div>
                <div className="card-footer bg-dark border-success">
                    {/* buttons for login or sign up */}
                  <button type="button" className="btn btn-outline-success">Login</button>
                  <button type="button" className="btn btn-outline-secondary">SignUp</button>
                </div>
              </div>
            </div>
          </Modalz>
        ]}
      </PoseGroup>
     );
  }
}
 
export default Card;