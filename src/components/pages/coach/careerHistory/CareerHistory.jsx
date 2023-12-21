import React from 'react'
import './CareerHistory.css'

import { useState } from 'react';
import { FaAngleDown, FaAngleUp } from "react-icons/fa6"
import TeamTag from '../../../shared/teamTag/TeamTag';


const CareerHistory = ({ coach }) => {
    const [showAllTeams, setShowAllTeams] = useState(false);
    const teamsToDisplay = showAllTeams ? coach.careerHistory : coach.careerHistory.slice(0, 3);

    return (
        <section className='career-history'>
            <h4>Career History</h4>
            <div className='teams'>
                {teamsToDisplay.map((team, index) => (
                    <div key={index} className='coach-team'>
                        <TeamTag path={`../../src/assets/teams/${team.team.id}.png`}/>
                        <div className='team-text'>
                            <h5>{team.team.name}</h5>
                            <h6>{team.position} ({team.season})</h6>
                        </div>
                    </div>
                ))}
                {coach.careerHistory.length > 2 && !showAllTeams && (
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

export default CareerHistory