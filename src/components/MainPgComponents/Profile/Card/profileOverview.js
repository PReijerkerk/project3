import React from 'react';
import './profileOverview.css'

function ProfileOverview(){

    return (
        <div className="profileCard">
            <div className="card-header"><strong>Profile Overview</strong></div>
            <div className="card-body">
                <h5 className="card-title">Light card title</h5>
                <p className="card-text">Plotly</p>
            </div>
        </div>
    )
}

export default ProfileOverview