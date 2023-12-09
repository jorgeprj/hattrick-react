import { useEffect, useState } from 'react';
import Loading from '../../components/layout/loading/Loading';

import './Scouts.css'
import List from '../../components/scouts/List';
import { getPlayers } from '../../services/players/playersService';
import { getTeams } from '../../services/teams/teamsService';

const Scouts = ({ year }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [scoutedPlayers, setScoutedPlayers] = useState(null);
	const [teams, setTeams] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const allPlayersData = await getPlayers();
                const scoutedPlayers = allPlayersData.filter(player =>
                    player.isScouted === true && player.teamHistory[0].team.name !== "Salford City"
                );
                setScoutedPlayers(scoutedPlayers);
    
                const teamsData = await getTeams();
                setTeams(teamsData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
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

	return (
		<div className='scouts'>
			<section>
				<div className='players'>
					<List scoutedPlayers={scoutedPlayers} setScoutedPlayers={setScoutedPlayers} teams={teams} year={year} />
				</div>
			</section>
		</div>
	)
}

export default Scouts