import './Overview.css'

import { useEffect, useState } from 'react';

import Loading from '../../../components/layout/loading/Loading';
import Tactics from '../../../components/dashboard/tactics/Tactics';
import PlayerCard from '../../../components/dashboard/playerCard/PlayerCard';

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
					<PlayerCard player={bestPlayer} />
				</div>
				<div className='section'>
					<h4>Top Scorer</h4>
					<PlayerCard player={scorerPlayer} />
				</div>
				<div className='section'>
					<h4>Biggest Potential</h4>
					<PlayerCard player={potentialPlayer} />
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