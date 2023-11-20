import StarRating from '../../layout/starRating/StarRating';
import './PlayerSideCard.css'
import TeamHistory from './teamHistory/TeamHistory';


const PlayerSideCard = ({ player, year }) => {

    const playerName = player.name.split(' ');

    return (
        <div className='player-side-card'>
            <header>
                <div className='player-photo'>
                    <img src={`../src/assets/players/${player.id}.png`} alt="player" />
                </div>

                <div className='player-name'>
                    <span className='first-name'>{playerName[0]}</span>
                    <span className='second-name'>{playerName[1]}</span>
                </div>
                <div className='player-tags'>
                    <div className='player-tag'>
                        <img src={`../src/assets/teams/${player.team.id}.png`} alt="player" />
                        <span>{player.team.name}</span>
                    </div>
                    <div className='player-tag'>
                        <img src={`../src/assets/flags/${player.nationality}.png`} alt="player" />
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
                        <p><StarRating stars={player.skills}/></p>
                        <p><StarRating stars={player.weakFoot}/></p>
                        <p>{player.workRate}</p>
                        <p className="no-margin-bottom">{player.realFace}</p>
                    </div>
                </div>
            </section>
            <div className='line'></div>
            <section>
                <h3>Club History</h3>
                <TeamHistory player={player} />
            </section>
        </div>
    )
}

export default PlayerSideCard