// this element combines Pose JS's modal ability - not being JQuery and 
//rendering inside it a bootstrap form for this long. 
//additionally added a Z to the end of modal and Modal because 
//pose js was conflicting with Bootstraps common naming - this fixed the issue.

import React from 'react';
import posed, { PoseGroup } from 'react-pose';
import API from "../../../../utils/API";

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

class CollectionModal extends React.Component{

  state = { 
    isVisible: false,
    case: [],
    name: "",
    story: "",
    user: "",
    items: []
  };

  componentDidMount() {
    this.loadTrophyCase() 
    this.setState({
      isVisible: !this.state.isVisible
    });
  }

  loadTrophyCase = () => {
    API.getAllCollections()
    .then(res =>
        this.setState({case: res.data})
    )
    .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.user) {
      API.saveCollection({
        name: this.state.name,
        story: this.state.story,
        user: this.state.user,
        items: [],
        date: new Date(Date.now())
      })
      .then(res => this.loadTrophyCase())
      .catch(err => console.log(err));
  }
};

  render() {
    const { isVisible } = this.state;

    return (
      
      <PoseGroup>
        {isVisible && [
          // If animating more than one child, each needs a `key`
          <Shade key="shade" className="shade" />,
          <Modalz key="modalz" className="modalz">
           <p>
              Insert collection name and a short story 
              explaining the items therin:
            </p>
            {/* insertion of new collections form: */}
          <form action="/collectionsPg">
            
            {/* input the NAME into Mongo */}
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="collectionName">Name:</span>
              </div>
              <input 
                type="text" 
                className="form-control" 
                aria-label="Default" 
                aria-describedby="inputGroup-sizing-default"
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="Collection Name (required)"
              />
            </div>

            {/* input the STORY into MONGO */}
            <div className="form-group">
              <label htmlFor="collectionStory">Collection's Story: </label>
              <textarea 
                className="form-control" 
                id="collectionStory" 
                rows="3"
                value={this.state.story}
                onChange={this.handleInputChange}
                name="story"
                placeholder="Tell us what your collection (required)"
              />
            </div>
              <button 
                type="submit" 
                className="btn btn-default" 
                to='/collectionsPg'
                onClick={this.handleFormSubmit}
              >
              Compile Collection
            </button>
          </form>
          </Modalz>
        ]}
      </PoseGroup>
    );
  }
}

export default CollectionModal;