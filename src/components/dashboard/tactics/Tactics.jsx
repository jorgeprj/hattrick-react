
import './Tactics.css'
import Field from './field/Field';
import { useNavigate } from 'react-router-dom';

const Tactics = ({ startingPlayers }) => {

    const navigate = useNavigate();

    const redirectToPlayerPage = (playerId) => {
        navigate(`/player/${playerId}`);
    };

    const players = [
        { ...startingPlayers[6], top: '520px', left: '170px' },
        { ...startingPlayers[9], top: '420px', left: '100px' },
        { ...startingPlayers[8], top: '420px', left: '240px' },
        { ...startingPlayers[7], top: '360px', left: '170px' },
        { ...startingPlayers[5], top: '320px', left: '20px' },
        { ...startingPlayers[1], top: '320px', left: '320px' },
        { ...startingPlayers[4], top: '250px', left: '100px' },
        { ...startingPlayers[2], top: '250px', left: '240px' },
        { ...startingPlayers[0], top: '160px', left: '170px' },
        { ...startingPlayers[10], top: '60px', left: '100px' },
        { ...startingPlayers[3], top: '60px', left: '240px' },
    ];

    const averageOverall = startingPlayers.reduce((soma, jogador) => soma + jogador.overall, 0) / startingPlayers.length;

    return (
        <div className='tactics'>
            <div className='tactics-info'>
                <div className='row'>
                    <img src="./src/assets/teams/113926.png" alt="Salford City Logo" />
                    <h4>5-2-1-2</h4>
                </div>
                <div className='overall'>
                    <h4>{averageOverall}</h4>
                </div>
            </div>
            <Field>
                {players.map((player) => {
                    const [firstName, lastName] = player.name.split(' ');
                    const abbreviatedName = lastName || firstName;
                    return (
                        <div
                            key={player.id}
                            className="player-container"
                            style={{ top: player.top, left: player.left }}
                            onClick={() => redirectToPlayerPage(player.id)}
                        >
                            <img src={`./src/assets/players/${player.id}.png`} alt={`Player ${player.id}`} />
                            <div className="player-name">{abbreviatedName}</div>
                        </div>
                    );
                })}
            </Field>

        </div>
    )
}

export default Tactics