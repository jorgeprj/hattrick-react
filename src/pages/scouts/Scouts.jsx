import { useEffect, useState } from 'react';
import ScoutList from '../../components/scoutList/ScoutList'
import Loading from '../../components/layout/loading/Loading';

import './Scouts.css'

const Scouts = ({ players, setPlayers, year }) => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const delay = 1000;
	
		const timeoutId = setTimeout(() => {
		  setIsLoading(false);
		}, delay);
	
		return () => clearTimeout(timeoutId);
	  }, []);
	
	  if (isLoading) {
		return <Loading />;
	  }

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