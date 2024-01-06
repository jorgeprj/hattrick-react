import React, { useState } from 'react'
import './PlayerCard.css'

import { FaChartSimple, FaMagnifyingGlass } from 'react-icons/fa6'
import Button from '../../../shared/button/Button'
import PlayerStatsModal from '../../../modals/playerStatsModal/PlayerStatsModal'
import { Link } from 'react-router-dom'
import { calculateHatScore } from '../../../../utils/hatScore'
import HattrickRating from '../../../ratings/hattrickRating/HattrickRating'

const PlayerCard = ({ player, year }) => {

    const [stats, setStats] = useState(false)

    const toggleStats = () => {
        setStats(!stats)
    }

    return (
        <div className='player-card'>
            <Link to={`/player/${player.id}`}>
                <img src={`../src/assets/players/${player.id}.png`} alt={`${player.name} image`} className='player-image' />
            </Link>
            <h3>{player.name} <span>{player.position}</span></h3>
            <div className='low-info'>
                <p>{calculateHatScore(player, year)}</p>
                <HattrickRating hattrick={calculateHatScore(player, year)}/>
            </div>
            <div className='principal-text'>
                <p><strong>{player.bio.split(' ').slice(0, 3).join(' ')} </strong>{player.bio.split(' ').slice(3).join(' ')}</p>
            </div>
            <div className='icons'>
                {player.hasStats && (
                    <>
                        <FaChartSimple onClick={toggleStats} />
                        {stats && (
                            <PlayerStatsModal stats={player.stats} onClose={toggleStats} />
                        )}
                    </>
                )}
                <Button text={"Report"} link={`/player/${player.id}`} />
            </div>
        </div>
    )
}

export default PlayerCard