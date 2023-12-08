import './Overview.css'

import { useEffect, useState } from 'react';
import { getPosts } from '../../../services/posts/postsService';

import Loading from '../../../components/layout/loading/Loading';
import Timeline from '../../../components/dashboard/timeline/Timeline';
import EmployeeCard from '../../../components/dashboard/employeeCard/EmployeeCard'

const Overview = ({ teamPlayers }) => {
	const [posts, setPosts] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchPosts = async () => {
			const postsData = await getPosts();
			setPosts(postsData);
		};

		fetchPosts();
	}, []);

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
			<div className='timeline'>
				<h4>Last News</h4>
				<Timeline posts={posts} />
			</div>
		</div>
	)
}

export default Overview