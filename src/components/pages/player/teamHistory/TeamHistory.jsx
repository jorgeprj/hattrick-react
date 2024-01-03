import React from 'react'
import './TeamHistory.css'

import { useState } from 'react';
import { FaAngleDown, FaAngleUp } from "react-icons/fa6"
import { Link } from 'react-router-dom';
import HeadImage from '../../../shared/headImage/HeadImage';


const TeamHistory = ({ player }) => {
    const [showAllTeams, setShowAllTeams] = useState(false);
    const teamsToDisplay = showAllTeams ? player.teamHistory : player.teamHistory.slice(0, 2);

    return (
        <section className='team-history'>
            <h4>Club History</h4>
            <div className='teams'>
                {teamsToDisplay.map((team, index) => (
                    <div key={index} className='player-team'>
                        <HeadImage path={`../../src/assets/teams/${team.team.id}.png`} />
                        <div className='team-text'>
                            <Link to={`/team/${team.team.id}`}>
                            <h5 className='link'>{team.team.name}</h5>
                            </Link>
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