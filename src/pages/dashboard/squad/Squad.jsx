import './Squad.css'

import EmployeeCard from '../../../components/dashboard/employeeCard/EmployeeCard'
import PlayerCard from '../../../components/dashboard/playerCard/PlayerCard'


const Squad = ({ teamPlayers, coach }) => {

	return (
		<div className='dashboard-squad'>
			<div className='squad-class'>
				<h3>Coach</h3>
				<EmployeeCard id={coach.id} name={coach.name} nationality={coach.nationality} role={"Coach"} />
			</div>
			<div className='squad-class'>
				<h3>Goalkeepers</h3>
				<div className='squad-position'>
					{teamPlayers
						.filter(player => player.position === "GK")
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
						.map(filteredPlayer => (
							<PlayerCard key={filteredPlayer.id} player={filteredPlayer} />
						))}
				</div>
			</div>

		</div>
	)
}

export default Squad
