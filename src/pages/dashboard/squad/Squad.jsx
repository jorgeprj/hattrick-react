import './Squad.css'

import PlayerCard from '../../../components/dashboard/playerCard/PlayerCard'
import StatCard from '../../../components/dashboard/statCard/StatCard'
import { formatCurrency } from '../../../utils/formatCurrency';

const Squad = ({ teamPlayers, year }) => {

	const startingPlayers = teamPlayers.filter(player => player.isStarter);

	const startersAge = (startingPlayers.reduce((sum, player) => sum + (year - player.age), 0)) / startingPlayers.length;
	const startersOverall = (startingPlayers.reduce((sum, player) => sum + player.overall, 0)) / startingPlayers.length;
	const averageAge = (teamPlayers.reduce((sum, player) => sum + (year - player.age), 0)) / teamPlayers.length;
	const averageWage = (teamPlayers.reduce((sum, player) => sum + player.wage, 0)) / teamPlayers.length;

	return (
		<div className='dashboard-squad'>
			<div className='squad-stats'>
				<StatCard name={"Total Players"} value={teamPlayers.length} />
				<StatCard name={"Starters Overall"} value={startersOverall.toFixed(0)} />
				<StatCard name={"Starters Age"} value={startersAge.toFixed(1)} />
				<StatCard name={"Average Age"} value={averageAge.toFixed(1)} />
				<StatCard name={"Average Wage"} value={formatCurrency(averageWage)} />
			</div>
			<div className='squad-class'>
				<h3>Goalkeepers</h3>
				<div className='squad-position'>
					{teamPlayers
						.filter(player => player.position === "GK")
						.sort((a, b) => b.overall - a.overall)
						.map(filteredPlayer => (
							<PlayerCard key={filteredPlayer.id} player={filteredPlayer} />
						))}
				</div>
			</div>
			<div className='squad-class'>
				<h3>Center Backs</h3>
				<div className='squad-position'>
					{teamPlayers
						.filter(player => player.position === "CB")
						.sort((a, b) => b.overall - a.overall)
						.map(filteredPlayer => (
							<PlayerCard key={filteredPlayer.id} player={filteredPlayer} />
						))}
				</div>
			</div>

			<div className='squad-class'>
				<h3>Right Backs</h3>
				<div className='squad-position'>
					{teamPlayers
						.filter(player => player.position === "RB")
						.sort((a, b) => b.overall - a.overall)
						.map(filteredPlayer => (
							<PlayerCard key={filteredPlayer.id} player={filteredPlayer} />
						))}
				</div>
			</div>

			<div className='squad-class'>
				<h3>Left Backs</h3>
				<div className='squad-position'>
					{teamPlayers
						.filter(player => player.position === "LB")
						.sort((a, b) => b.overall - a.overall)
						.map(filteredPlayer => (
							<PlayerCard key={filteredPlayer.id} player={filteredPlayer} />
						))}
				</div>
			</div>

			<div className='squad-class'>
				<h3>Midfielders</h3>
				<div className='squad-position'>
					{teamPlayers
						.filter(player =>
							player.position === "CDM" ||
							player.position === "CM" ||
							player.position === "CAM" ||
							player.position === "RM" ||
							player.position === "LM")
						.sort((a, b) => b.overall - a.overall)
						.map(filteredPlayer => (
							<PlayerCard key={filteredPlayer.id} player={filteredPlayer} />
						))}
				</div>
			</div>

			<div className='squad-class'>
				<h3>Forwards</h3>
				<div className='squad-position'>
					{teamPlayers
						.filter(player =>
							player.position === "RW" ||
							player.position === "LW" ||
							player.position === "CF" ||
							player.position === "ST")
						.sort((a, b) => b.overall - a.overall)
						.map(filteredPlayer => (
							<PlayerCard key={filteredPlayer.id} player={filteredPlayer} />
						))}
				</div>
			</div>

		</div>
	)
}

export default Squad
