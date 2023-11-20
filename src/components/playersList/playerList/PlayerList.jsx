import { useNavigate } from 'react-router-dom';
import { getOverallColor } from '../../../utils/overallColorUtils';
import './PLayerList.css'
import { calculateFutzScore } from '../../../utils/calculateFutzScoreUtils';

const PlayerList = ({ player, year }) => {

    const navigate = useNavigate();
    const redirectToPlayerPage = () => navigate(`/player/${player.id}`);

    return (
        <tr onClick={redirectToPlayerPage} className='player-list'>
            <td className='player-image'>
                <img src={`./src/assets/players/${player.id}.png`} alt="player" />
            </td>
            <td className='player-info'>
                <span className='player-name'>{player.name}</span>
                <span className='player-team-name'>{player.team.name}</span>
                <span className='player-team-league'>{player.team.league}</span>
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

export default PlayerList