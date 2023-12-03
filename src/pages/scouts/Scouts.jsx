import { useEffect, useState } from 'react';
import Loading from '../../components/layout/loading/Loading';

import './Scouts.css'
import List from '../../components/scouts/List';
import { getPlayers } from '../../services/players/playersService';

const Scouts = ({ year }) => {
	const [isLoading, setIsLoading] = useState(true);

	const [scoutedPlayers, setScoutedPlayers] = useState(null);

    useEffect(() => {
        const fetchScoutedPlayers = async () => {
            try {
                const allPlayersData = await getPlayers();

                const scoutedPlayers = allPlayersData.filter(player =>
                    player.isScouted === true && player.teamHistory[0].team.name !== "Salford City"
                );

                setScoutedPlayers(scoutedPlayers);
            } catch (error) {
                console.error('Error fetching players:', error);
            }
        };

        fetchScoutedPlayers();
    }, []);

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
					<List scoutedPlayers={scoutedPlayers} setScoutedPlayers={setScoutedPlayers} year={year} />
				</div>
			</section>
		</div>
	)
}

export default Scouts