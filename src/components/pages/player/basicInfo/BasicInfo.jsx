import React from 'react'
import './BasicInfo.css'
import StarRating from '../../../ratings/starRating/StarRating'
import { Link } from 'react-router-dom'

const BasicInfo = ({ player, year }) => {
    return (
        <section className='basic-info'>
            <h4>Basic Info</h4>
            <div className='infos'>
                <div className='column-1'>
                    <p>Team</p>
                    {player.isLoan && (<p>Loaned from</p>)}
                    <p>Age</p>
                    <p>Height</p>
                    <p>Weight</p>
                    <p>Foot</p>
                    <p>Skill moves</p>
                    <p>Weak foot</p>
                    <p>Work rate</p>
                    <p className="no-margin-bottom">Real Face</p>
                </div>
                <div className='column-2'>
                    <p className='team'>
                        <img className='team-image' src={`../../src/assets/teams/${player.teamHistory[0].team.id}.png`} alt={`Team ${player.teamHistory[0].team.id} image`} />
                        <Link to={`/team/${player.teamHistory[0].team.id}`}>
                            {player.teamHistory[0].team.name}
                        </Link>
                    </p>
                    {player.isLoan && (<p>{player.teamHistory[1].team.name}</p>)}
                    <p>{year - Number(player.age)} years</p>
                    <p>{player.height / 100} m</p>
                    <p>{player.weight} kg</p>
                    <p>{player.foot}</p>
                    <p><StarRating stars={player.skills} /></p>
                    <p><StarRating stars={player.weakFoot} /></p>
                    <p>{player.workRate}</p>
                    <p className="no-margin-bottom">{player.realFace ? "Yes" : "No"}</p>
                </div>
            </div>
        </section>
    )
}

export default BasicInfo