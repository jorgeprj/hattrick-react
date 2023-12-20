import React from 'react'
import './PlayerCard.css'
import { useNavigate } from 'react-router-dom'


import { FaChartSimple, FaMagnifyingGlass } from 'react-icons/fa6'

const PlayerCard = ({ player }) => {

	const navigate = useNavigate();
	const redirectToPlayerPage = () => navigate(`/player/report/${player.id}`);

    return (
        <div className='player-card'>
            <img src={`../src/assets/players/${player.id}.png`} alt={`${player.name} image`} className='player-image' />
            <h3>{player.name} <span>{player.position}</span></h3>
            <div className='low-info'>
                <FaMagnifyingGlass />
                <p>Scouted</p>
            </div>
            <div className='principal-text'>
                <p><strong>{player.bio.split(' ').slice(0, 3).join(' ')} </strong>{player.bio.split(' ').slice(3).join(' ')}</p>
            </div>
            <div className='icons'>
                {player.hasStats && (<FaChartSimple />)}
                <button onClick={redirectToPlayerPage}>
                    Report
                </button>
            </div>
        </div>
    )
}

export default PlayerCard