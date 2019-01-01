import React from 'react';


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
        timeOfDay = 'night'
    }

    return(
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Spongebob-squarepants.svg/330px-Spongebob-squarepants.svg.png" alt="Card image cap" />
            <div class="card-body">
                <h5 class="card-title">Good {`${timeOfDay}`}, {`${firstName}`}!</h5>
                <p class="card-text"></p>
                <a href="#" class="btn btn-primary">Add Collection</a>
            </div>
        </div> 
    )
}

export default Avatar