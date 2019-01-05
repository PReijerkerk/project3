import React from 'react';
import './userCollections.css'

function UserCollections(){
    return (
        <div className="profileCard userCollections">
            <div className="card-header"><strong>Your Collections</strong></div>
            <div className="card-body">
                <h5 className="card-title">Light card title</h5>
                <p className="card-text">Collections Here</p>
            </div>
        </div>
    )
}

export default UserCollections