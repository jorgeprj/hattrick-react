import React from 'react'
import './CareerHistory.css'

import { useState } from 'react';
import { FaAngleDown, FaAngleUp } from "react-icons/fa6"
import { Link } from 'react-router-dom';
import HeadImage from '../../../shared/headImage/HeadImage';


const CareerHistory = ({ coach }) => {
    const [showAllTeams, setShowAllTeams] = useState(false);
    const teamsToDisplay = showAllTeams ? coach.careerHistory : coach.careerHistory.slice(0, 3);

    return (
        <section className='career-history'>
            <h4>Career History</h4>
            <div className='teams'>
                {teamsToDisplay.map((team, index) => (
                    <div key={index} className='coach-team'>
                        <HeadImage path={`../../src/assets/teams/${team.team.id}.png`}/>
                        <div className='team-text'>
                            <Link to={`/team/${team.team.id}`}>
                                <h5 className='link'>{team.team.name}</h5>
                            </Link>
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