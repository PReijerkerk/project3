import React from 'react';
import './avatar.css'


function Avatar(){
    const firstName = ''

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
        <div className="card">
            <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Spongebob-squarepants.svg/330px-Spongebob-squarepants.svg.png" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">Good {`${timeOfDay}`}, {`${firstName}`}!</h5>
                <p className="card-text"></p>
                <a href="#" className="btn btn-primary">Profile Settings</a>
            </div>
        </div> 
    )
}

export default Avatar