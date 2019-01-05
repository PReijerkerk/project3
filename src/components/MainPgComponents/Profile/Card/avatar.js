import React, { Component } from 'react';
import './avatar.css'
import ProfColSettings from './profSettings'
import CollectionModal  from './collectionModal'
class Avatar extends Component {
  state = {
      profileSetting:false,
      collectionModal:false
  }
  // not rendering any modal when page first loads 
  modalRendering = () => {
    if (this.state.profileSetting) {
      return <ProfColSettings/>
    } 
  }

  render(){
 // Only using SpongeBob to show name until DB is connected - actual code commented below
    // const firstName = ''
    const firstName = 'SpongeBob'

    // Greet user by time of day
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay 

    if (hours < 12) {
        timeOfDay = 'morning'
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = 'afternoon'
    } else {
        timeOfDay = 'evening'
    }

    return(
      <div className="avatarCard">
        <div>
          <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Spongebob-squarepants.svg/330px-Spongebob-squarepants.svg.png" alt="Card cap" />
          <div className="card-body">
            <h5 className="card-title">Good {`${timeOfDay}`}, {`${firstName}`}!</h5>
            <p className="card-text"></p>
            <button 
            className="btn btn-primary" onClick= {()=>(
              this.setState({profileSetting:true, collectionModal:false})
          )}>
              Profile Settings
            </button>
          </div>
        </div>
        <button className="collection-btn" onClick ={()=>(
            this.setState({collectionModal:true, profileSetting:false})
        )}>Add A New Collection</button>

        {this.modalRendering()}
    </div>
    )
  }
}

export default Avatar