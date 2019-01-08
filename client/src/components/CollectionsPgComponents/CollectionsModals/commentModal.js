import React from 'react';
import posed, { PoseGroup } from 'react-pose';


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

class CommentModal extends React.Component{

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
           <p>Leave note:</p>
           
          <form action="/CollectionsPg">
            <div className="form-group">
              <label htmlFor="itemNote">Note (200 character limit): </label>
              <textarea className="form-control" id="itemNote" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-inverted">
              Update
          </button>
          </form>
          </Modalz>
        ]}
      </PoseGroup>
    );
  }
}

export default CommentModal;