import './Overview.css'

import { useEffect, useState } from 'react';

import Loading from '../../../components/layout/loading/Loading';
import WikiCard from '../../../components/dashboard/wikiCard/WikiCard';

const Overview = ({ team, teamPlayers }) => {
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


	return (
		<div className='dashboard-overview'>
			<WikiCard id={team.id} wiki={team.clubInfo.wiki}/>
		</div>
	)
}

export default Overview