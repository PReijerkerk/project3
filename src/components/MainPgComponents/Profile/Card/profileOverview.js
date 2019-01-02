import React from 'react';
import './profileOverview.css'

function ProfileOverview(){

    return (
        <div className="profileCard bg-light mb-3">
            <div className="card-header">Profile Overview</div>
            <div className="card-body">
                <h5 className="card-title">Light card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div>
                <p>Plotly</p>
            </div>
        </div>
    )
}

export default ProfileOverview