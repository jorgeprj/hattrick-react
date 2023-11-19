import PlayersList from '../../components/playersList/PlayersList'
import './Home.css'

const Home = ({ players, setPlayers, year }) => {
	return (
		<div className='home'>
			<section>
				<div className='players'>
					<PlayersList players={players} setPlayers={setPlayers} year={year} />
				</div>
			</section>
		</div>
	)
}

export default Home