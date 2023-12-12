import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './Team.css'
import Loading from '../../components/layout/loading/Loading';
import { getTeam } from '../../services/teams/teamsService';

const Team = () => {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [team, setTeam] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const teamData = await getTeam(id);
                setTeam(teamData);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching team:', error);
            }
        };
    
        fetchData();
    }, [id]);


    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className='team'>
            <h2>{team.name}</h2>
        </div>
    )
}

export default Team