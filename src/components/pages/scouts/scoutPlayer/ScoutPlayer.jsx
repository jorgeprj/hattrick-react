import React from 'react'
import './ScoutPlayer.css'
import { formatCurrency } from '../../../../utils/formatCurrency'
import HeadImage from '../../../shared/headImage/HeadImage'
import { calculateHatScore } from '../../../../utils/hatScore'
import { Link } from 'react-router-dom'

const ScoutPlayer = ({ player, year }) => {

    const getHatColor = (hat) => {
        if (hat > 7) {
            return 'high-green';
        } else if (hat > 6) {
            return 'green';
        } else if (hat > 5) {
            return 'yellow';
        } else if (hat > 4) {
            return 'orange';
        } else {
            return 'red';
        }
    };


    return (
        <Link className='center' to={`/player/${player.id}`}>
            <div className='scout-player'>
                <div className='profile-head'>
                    <img className='flag' src={`../../src/assets/flags/${player.nationality}.png`} alt={`Flag of ${player.nationality}`} />
                    <HeadImage path={`../../src/assets/players/heads/${player.id}.png`} />
                </div>
                <div className='player-info'>
                    <h2>
                        {player.name}
                        <span>{player.overall}</span>
                    </h2>
                    <p>{player.analysis}</p>
                    <h3>
                        {player.position}
                        {" - "}
                        {player.teamHistory[0].team.name}
                        {" - "}
                        {formatCurrency(player.value)}
                    </h3>
                </div>
                <div className={`score ${getHatColor(calculateHatScore(player, year))}`}>{calculateHatScore(player, year)}</div>
            </div>
        </Link>
    )
}

export default ScoutPlayer