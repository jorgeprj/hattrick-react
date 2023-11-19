import { useState } from 'react';
import './TeamHistory.css'

import { FaAngleDown, FaAngleUp } from "react-icons/fa6"

const TeamHistory = ({ player }) => {
    const [showAllTeams, setShowAllTeams] = useState(false);

    const teamsToDisplay = showAllTeams ? player.teamHistory : player.teamHistory.slice(0, 2);

    return (
        <div className='team-history'>
            {teamsToDisplay.map((team, index) => (
                <div key={index} className='player-team'>
                    <div className="team-tag">
                        <img src={`../src/assets/teams/${team.team.id}.png`} alt="player" />
                    </div>
                    <div className='team-text'>
                        <h4>{team.team.name}</h4>
                        <h5>{team.season}</h5>
                    </div>
                </div>
            ))}
            {player.teamHistory.length > 2 && !showAllTeams && (
                <>
                    <button className="show-older-button" onClick={() => setShowAllTeams(true)}>
                        <FaAngleDown />
                        Show Older
                    </button>
                </>
            )}
            {showAllTeams && (
                <button className="collapse-button" onClick={() => setShowAllTeams(false)}>
                    <FaAngleUp />
                </button>
            )}
        </div>
    );
};

export default TeamHistory;