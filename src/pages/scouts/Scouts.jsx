import ScoutList from '../../components/scoutList/ScoutList'
import './Scouts.css'

const Scouts = ({ players, setPlayers, year }) => {
	return (
		<div className='scouts'>
			<section>
				<div className='players'>
					<ScoutList players={players} setPlayers={setPlayers} year={year} />
				</div>
			</section>
		</div>
	)
}

export default Scouts