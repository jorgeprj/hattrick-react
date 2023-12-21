import React from 'react'
import './Header.css'
import PotentialRating from '../../../ratings/potentialRating/PotentialRating'
import HattrickRating from '../../../ratings/hattrickRating/HattrickRating'
import { calculateFutzScore } from '../../../../utils/futzScore'
import PlayerHead from '../../../shared/playerHead/PlayerHead'


const Header = ({ player, year }) => {
    return (
        <section className='player-header'>
            <div className='player-head'>
                <img className='flag' src={`../../src/assets/flags/${player.nationality}.png`} alt={`Flag of ${player.nationality}`} />
                <PlayerHead playerId={player.id}/>
            </div>
            <section className='player-stats'>
                <div>
                    <h4>
                        {player.overall}
                        <div className='rating'>
                            <PotentialRating overall={player.overall} potential={player.potential} />
                        </div>
                    </h4>
                    <p>Overall</p>
                </div>
                <div>
                    <h4>
                        {calculateFutzScore(player, year)}
                        <div className='rating'>
                            <HattrickRating hattrick={calculateFutzScore(player, year)} />
                        </div>
                    </h4>
                    <p>Hat3Score</p>
                </div>
            </section>
        </section>
    )
}

export default Header