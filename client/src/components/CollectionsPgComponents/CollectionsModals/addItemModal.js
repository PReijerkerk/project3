// this element combines Pose JS's modal ability - not being JQuery and 
//rendering inside it a bootstrap form for this long. 
//additionally added a Z to the end of modal and Modal because 
//pose js was conflicting with Bootstraps common naming - this fixed the issue.

import React from 'react';
import posed, { PoseGroup } from 'react-pose';
import API from "../../../utils/API"

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

class AddItemModal extends React.Component{

  state = { 
    isVisible: false,
    case: [],
    itemData: "",
    user: "Tommy", //not sure if we will need a user here
    itemDiscription: "",
    itemName:""
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
        this.setState({tcase: res.data})
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
    if (this.state.itemName && this.state.user) {
      API.saveCollection({
        itemName: this.state.itemName,
      
        user: this.state.user,
        itemDiscription: "",
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
           <p>Discribe what you are adding:</p>
           
          <form action="/">
            
            {/* input ITEM NAME for MONGO */}
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="itemName">Item Name:</span>
              </div>
              <input 
                type="text" 
                className="form-control" 
                aria-label="Default" aria-describedby="inputGroup-sizing-default"
                value={this.state.itemName}
                onChange={this.handleInputChange}
                name="itemName"
                placeholder="Name of Item (required)"
              />
            </div>

            {/* input for ITEM DESCRIPTION for Mongo */}
            <div className="form-group">
              <label htmlFor="itemDiscription">Item Description(200 character limit): </label>
              <textarea 
                className="form-control" 
                id="itemDiscription" 
                rows="3"
                value={this.state.itemDiscription}
                onChange={this.handleInputChange}
                name="story"
                placeholder="Tell us about the history of this item (required)"
              />
            </div>

            {/* input for switching from around different user collections (NOT WORKING YET) */}
            <div className="form-group">
              <label htmlFor="collectionRoute">Which Collection:</label>
              <select 
                className="form-control" 
                id="collectionRoute">
                  <option> {this.props.options} </option>
                  <option>collection B </option>
                  <option>collection C </option>
              </select>
            </div>
            <hr></hr>

            {/*importing file (NOT WORKING)  for Mongo */}
          <div className="form-group">
            <label htmlFor="exampleFormControlFile1">Import file:</label>
            <input type="file" className="form-control-file" id="file"/>
          </div>
            <button 
              type="submit" 
              className="btn btn-inverted"
              to='/collectionsPg'
              onClick={this.handleFormSubmit}
            >
              Update
          </button>
          </form>
          </Modalz>
        ]}
      </PoseGroup>
    );
  }
}

export default AddItemModal;