import React, { Component } from 'react';
import './userCollections.css'
import CollectionModal  from './collectionModal'
class UserCollections extends Component {
  state = {
      collectionModal:false
  }
  // not rendering any modal when page first loads 
  modalRendering = () => {
    if (this.state.collectionModal){
      return <CollectionModal/>
    }
  }
  render(){
    return (
        <div className="profileCard userCollections">
            <div className="card-header"><strong>Your Collections</strong><button className="collection-btn" onClick ={()=>(
            this.setState({collectionModal:true})
            )}>+ New Collection</button></div>
            <div className="card-body">
                <h5 className="card-title">Light card title</h5>
                <p className="card-text">Collections Here</p>
            </div>
            {this.modalRendering()}
        </div>
        )
    }
}
export default UserCollections