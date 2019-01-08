import React from 'react';
import './profileOverview.css'
import ChartJS from '../../ChartJS/chart'
function ProfileOverview(){

    return (
        <div className="profileCard">
            <div className="card-header"><strong>Profile Overview</strong></div>
            <div className="card-body">
              <ChartJS/>
            </div>
        </div>
    )
}

export default ProfileOverview