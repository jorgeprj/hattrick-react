import './Player.css'

import { useNavigate } from 'react-router-dom';
import { getOverallColor } from '../../../utils/overallColor';
import { calculateFutzScore } from '../../../utils/futzScore';

const Player = ({ player, year }) => {

    const navigate = useNavigate();
    const redirectToPlayerPage = () => navigate(`/player/scout/${player.id}`);

    return (
        <tr onClick={redirectToPlayerPage} className='scouted-player'>
            <td className='player-image'>
                <img src={`./src/assets/players/${player.id}.png`} alt="player" />
            </td>
            <td className='player-info'>
                <span className='player-name'>{player.name}</span>
                <span className='player-team-name'>{player.teamHistory[0].team.name}</span>
                <span className='player-team-league'>{player.teamHistory[0].team.league}</span>
            </td>
            <td className={`player-position ${player.position}`}>
                {player.position}
            </td>
            <td className='player-flag'>
                <img src={`./src/assets/flags/${(player.nationality)}.png`} alt="flag" />
            </td>
            <td>
                {year - Number(player.age)}
            </td>
            <td>
                {player.contract}
            </td>
            <td className={`player-overall ${getOverallColor(player.overall)}`}>
                {player.overall}
            </td>
            <td>
                {calculateFutzScore(player, year)}
            </td>
        </tr>
    )
}

export default Player