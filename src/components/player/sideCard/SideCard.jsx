import './SideCard.css'

import StarRating from '../../starRating/StarRating';
import TeamHistory from './teamHistory/TeamHistory';

import { FaArrowRightArrowLeft } from 'react-icons/fa6';
import NationalHistory from './nationalHistory/NationalHistory';
import PlayStyles from './playStyles/PlayStyles';


const SideCard = ({ player, year }) => {

    const playerName = player.name.split(' ');

    return (
        <div className='player-side-card'>
            <header>
                <div className='player-photo'>
                    <img src={`../../src/assets/players/${player.id}.png`} alt="player" />
                </div>

                <div className='player-name'>
                    <h5 className='first-name'>{playerName[0]}</h5>
                    <h4 className='second-name'>
                        {playerName[1]}
                        {player.isLoan && (<span className='loan'><FaArrowRightArrowLeft /></span>)}
                    </h4>
                </div>
                <div className='player-tags'>
                    <div className='player-tag'>
                        <img src={`../../src/assets/teams/${player.teamHistory[0].team.id}.png`} alt="player" />
                        <span>{player.teamHistory[0].team.name}</span>
                    </div>
                    <div className='player-tag'>
                        <img src={`../../src/assets/flags/${player.nationality}.png`} alt="player" />
                        <span>{player.nationality}</span>
                    </div>
                    <div className="player-tag">
                        {player.position}
                    </div>
                </div>
            </header>
            <div className='line'></div>
            <section>
                <h3>Basic Info</h3>
                <div className="player-basic-info">
                    <div className="column1">
                        <p>Age</p>
                        <p>Height</p>
                        <p>Weight</p>
                        <p>Foot</p>
                        <p>Skill moves</p>
                        <p>Weak foot</p>
                        <p>Work rate</p>
                        <p className="no-margin-bottom">Real Face</p>
                    </div>
                    <div className="column2">
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
            {player.playStyles[0] && (
                <section>
                    <div className='line'></div>
                    <h3>Play Styles</h3>
                    <PlayStyles player={player} />
                </section>
            )}

            {player.nationalTeam[0] && (
                <section>
                    <div className='line'></div>
                    <h3>National Team</h3>
                    <NationalHistory player={player} />
                </section>
            )
            }
            <section>
                <div className='line'></div>
                <h3>Club History</h3>
                <TeamHistory player={player} />
            </section>
        </div>
    )
}

export default SideCard