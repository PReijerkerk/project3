// not sure where yet to render this relax page within our tree

import React, { Component } from 'react';
import Rellax from 'rellax'; 
import './rellax.css'; 
import Trophy1 from './trophy1.svg'
import Trophy2 from './trophy2.svg'
import Trophy3 from './trophy3.svg'


class Parallax extends Component {

componentDidMount = () => {
  this.rellax = new Rellax('.rellax');
}


  render(){
    return ( 
      <div>
        <div className = 'row'>

          {/* implement illustrator rendered Trophy above called here at a neg speed of 2 */}
          <div className = 'col-lg-2'>
            <div className='rellax SVG' data-rellax-speed='-2' data-rellax-percentage=".1">
              <img src={Trophy1} alt = "trophy1"/>
            </div>
          </div>

          <div className = 'col-lg-2'>
            <div className='rellax SVG'>
            <img src={Trophy3} alt = "trophy3"/>
            </div>
          </div>
        
          <div className = 'col-lg-2'>
            <div className='rellax SVG' data-rellax-speed='-5' data-rellax-percentage=".21">
            <img src={Trophy2}  alt = "trophy2"/>
            </div>
          </div>
        
          <div className = 'col-lg-2'>
            <div className='rellax SVG' data-rellax-speed='-9' data-rellax-percentage=".5">
            <img src={Trophy1} alt = "trophy1"/>            
            </div>
          </div>


          <div className = 'col-lg-2'>
            <div className='rellax SVG' data-rellax-speed='-4'data-rellax-percentage="0.2">
            <img src={Trophy3} alt = "trophy1"/>
              
            </div>
          </div>

          
          <div className = 'col-lg-2'>
            <div className='rellax SVG' data-rellax-speed='-10' data-rellax-percentage=".5">
            <img src={Trophy2} alt = "trophy2"/>           
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}
export default Parallax;