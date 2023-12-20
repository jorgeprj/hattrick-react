import React from 'react'

import './BestPlayers.css'
import Button from '../../shared/button/Button'
import PlayerHead from '../../shared/playerHead/PlayerHead'

const BestPlayers = ({ players }) => {
    return (
        <div className='best-players'>
            <h3>Best <span>Players</span> of <span>Salford City</span></h3>
            <p><span>Great teams</span> are made up of <span>great players</span>.</p>
            <p>Meet the team's best players.</p>
            <div className='players-list'>
                {players
                .sort((a, b) => b.overall - a.overall)
                .slice(0, 3)
                .map(player => (
                    <div className='player-list'>
                        <div className='player-info'>
                            <PlayerHead playerId={player.id}/>
                            <div className='player-infos'>
                                <h4>{player.name}</h4>
                                <div className='country'>
                                    <img src={`../src/assets/flags/${player.nationality}.png`} alt="" />
                                    <p>{player.nationality}</p>
                                </div>
                            </div>
                        </div>
                        <div className='player-overall'>
                            {player.overall}
                        </div>
                    </div>
                ))}
            </div>
            <Button text={"View all"} link={`/#`}/>
        </div>
    )
}

export default BestPlayers