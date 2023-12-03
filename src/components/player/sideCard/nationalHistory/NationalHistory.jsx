import './NationalHistory.css'

import { useState } from 'react';
import { FaAngleDown, FaAngleUp } from "react-icons/fa6"

const NationalHistory = ({ player }) => {
    const [showAllNational, setShowAllNational] = useState(false);

    const nationalToDisplay = showAllNational ? player.nationalTeam : player.nationalTeam.slice(0, 2);

    return (
        <div className='national-history'>
            {nationalToDisplay.map((team, index) => (
                <div key={index} className='player-national'>
                    <div className="national-tag">
                        <img src={`../../src/assets/nationalTeams/${player.nationality}.png`} alt="player" />
                    </div>
                    <div className='national-text'>
                        <h4>{team.name}</h4>
                        <h5>{team.season}</h5>
                    </div>
                </div>
            ))}
            {player.nationalTeam.length > 2 && !showAllNational && (
                <>
                    <button className="show-older-button" onClick={() => setShowAllNational(true)}>
                        <FaAngleDown />
                        Show Older
                    </button>
                </>
            )}
            {showAllNational && (
                <button className="collapse-button" onClick={() => setShowAllNational(false)}>
                    <FaAngleUp />
                </button>
            )}
        </div>
    );
};

export default NationalHistory;