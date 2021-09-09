import React from 'react'
import RenderTeams from './RenderTeams';

const Destination = () => {
    return (
        <div>
          <p>Destination</p>
            <button>+ Add new Team</button>
            <div><RenderTeams/></div>  
        </div>
    )
}

export default Destination
