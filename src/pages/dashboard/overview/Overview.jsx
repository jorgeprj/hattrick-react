import './Overview.css'

import { useEffect, useState } from 'react';

import Loading from '../../../components/layout/loading/Loading';
import EmployeeCard from '../../../components/dashboard/employeeCard/EmployeeCard'
import Tactics from '../../../components/dashboard/tactics/Tactics';

const Overview = ({ teamPlayers }) => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const delay = 500;

		const timeoutId = setTimeout(() => {
			setIsLoading(false);
		}, delay);

		return () => clearTimeout(timeoutId);
	}, []);

	if (isLoading) {
		return <Loading />;
	}

	const startingPlayers = teamPlayers.filter(player => player.isStarter);

	const bestPlayer = startingPlayers.reduce((maxPlayer, player) => {
		return player.overall > maxPlayer.overall ? player : maxPlayer;
	}, startingPlayers[0]);

	const potentialPlayer = teamPlayers.reduce((maxPlayer, player) => {
		return player.potential > maxPlayer.potential ? player : maxPlayer;
	}, teamPlayers[0]);

	const scorerPlayer = teamPlayers.reduce((maxPlayer, player) => {
		const goals = player.stats[0] ? player.stats[0].goals : 0;
		const maxGoals = maxPlayer.stats[0] ? maxPlayer.stats[0].goals : 0;
		return goals > maxGoals ? player : maxPlayer;
	}, teamPlayers[0]);


	return (
		<div className='dashboard-overview'>
			<div className='main-employees'>
				<div className='section'>
					<h4>Best Player</h4>
					<EmployeeCard id={bestPlayer.id} name={bestPlayer.name} nationality={bestPlayer.nationality} role={""} />
				</div>
				<div className='section'>
					<h4>Top Scorer</h4>
					<EmployeeCard id={scorerPlayer.id} name={scorerPlayer.name} nationality={scorerPlayer.nationality} role={""} />
				</div>
				<div className='section'>
					<h4>Biggest Potential</h4>
					<EmployeeCard id={potentialPlayer.id} name={potentialPlayer.name} nationality={potentialPlayer.nationality} role={""} />
				</div>
			</div>
			<div className='tactic-squad'>
				<h4>Starters</h4>
				<Tactics startingPlayers={startingPlayers} />
			</div>
		</div>
	)
}

export default Overview