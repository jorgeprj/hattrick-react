import './PlayerCard.css';

import { getOverallColor } from '../../../utils/overallColor';
import { useNavigate } from 'react-router-dom';

const PlayerCard = ({ player }) => {

	const navigate = useNavigate();
	const redirectToPlayerPage = () => navigate(`/player/${player.id}`);

	const abbreviateName = (name) => {
		if (name.length > 11) {
			const [firstName, lastName] = name.split(' ');
			return `${firstName.charAt(0)}. ${lastName}`;
		}
		return name;
	};

	return (
		<div className='dashboard-player-card' onClick={redirectToPlayerPage}>
			<div className='player-infos'>
				<div className='player-photo'>
					<img src={`./src/assets/players/${player.id}.png`} alt={`Player ${player.id} Image`} />
				</div>
				<div className='player-basic-infos'>
					<h4>{abbreviateName(player.name)}</h4>
					<div className='country'>
						<h5>{player.nationality}</h5>
						<img src={`./src/assets/flags/${player.nationality}.png`} alt={`${player.nationality}`} />
					</div>
				</div>
			</div>
			<div className={`player-overall ${getOverallColor(player.overall)}`}>
				<h4>{player.overall}</h4>
			</div>
		</div>
	)
}

export default PlayerCard