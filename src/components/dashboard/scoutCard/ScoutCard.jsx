import StarRating from '../../starRating/StarRating';
import './ScoutCard.css';


const ScoutCard = ({ id, name, nationality, experience, judgement, country }) => {

	const abbreviateName = (name) => {
		if (name.length > 11) {
			const [firstName, lastName] = name.split(' ');
			return `${firstName.charAt(0)}. ${lastName}`;
		}
		return name;
	};


	return (
		<div className='dashboard-scout-card'>
			<div className='scout-infos'>
				<div className='scout-photo'>
					<img src={`./src/assets/players/${id}.png`} alt={`scout ${id} Image`} />
				</div>
				<div className='scout-basic-infos'>
					<h4>{abbreviateName(name)}</h4>
					<div className='country'>
						<h5>{nationality}</h5>
						<img src={`./src/assets/flags/${nationality}.png`} alt={`${nationality}`} />
					</div>
				</div>
			</div>
			<div className='scouting-network first'>
				<div>
					<h4>Experience</h4>
					<StarRating stars={experience} />
				</div>
				<div>
					<h4>Judgement</h4>
					<StarRating stars={judgement} />
				</div>
			</div>
			<div className='scouting-network'>
				<div>
					<h4>Country</h4>
					<div className='country'>
						<h5>{country}</h5>
						<img src={`./src/assets/flags/${country}.png`} alt={`${country}`} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default ScoutCard