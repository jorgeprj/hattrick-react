import React from 'react'
import './TeamTag.css'

const TeamTag = ({path}) => {
    return (
        <div className="team-tag">
            <img src={path} alt="team tag" />
        </div>
    )
}

export default TeamTag