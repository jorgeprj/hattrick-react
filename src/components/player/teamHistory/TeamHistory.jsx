import React from 'react'
import './TeamHistory.css'

import { useState } from 'react';
import { FaAngleDown, FaAngleUp } from "react-icons/fa6"
import TeamTag from '../../shared/teamTag/TeamTag';


const TeamHistory = ({ player }) => {
    const [showAllTeams, setShowAllTeams] = useState(false);
    const teamsToDisplay = showAllTeams ? player.teamHistory : player.teamHistory.slice(0, 2);

    return (
        <section className='team-history'>
            <h4>Club History</h4>
            <div className='teams'>
                {teamsToDisplay.map((team, index) => (
                    <div key={index} className='player-team'>
                        <div className="teams-tag">
                            <TeamTag path={`../../src/assets/teams/${team.team.id}.png`} />
                        </div>
                        <div className='team-text'>
                            <h5>{team.team.name}</h5>
                            <h6>{team.season}</h6>
                        </div>
                    </div>
                ))}
                {player.teamHistory.length > 2 && !showAllTeams && (
                    <div className='button'>
                        <button className="show-older-button" onClick={() => setShowAllTeams(true)}>
                            <FaAngleDown />
                            Show Older
                        </button>
                    </div>
                )}
                {showAllTeams && (
                    <div className='button'>
                        <button className="collapse-button" onClick={() => setShowAllTeams(false)}>
                            <FaAngleUp />
                        </button>

                    </div>
                )}
            </div>
        </section>
    )
}

export default TeamHistory