

import React, { Component } from 'react';
import CommentModal from '../CollectionsModals/commentModal'
// import './itemNote.css'

class ItemNote extends Component {
  state = { 
    itemNote:false
   }
  
  modalRendering = () => {
    if (this.state.add) {
      return <CommentModal/>
    }
  }

  render() { 
    return ( 
      
      <div className='container'>
          <button 
              className="btn btn-secondary" 
              onClick= {()=>(
                this.setState({itemNote:true})
              )}>
              Item Note
          </button>

        {this.modalRendering()}
    </div>
     );
  }
}
 
export default ItemNote;