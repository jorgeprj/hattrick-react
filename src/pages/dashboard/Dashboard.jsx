import './Dashboard.css';

import { useEffect, useState } from 'react';
import { getPlayers } from '../../services/players/playersService';

import Header from '../../components/dashboard/header/Header';
import Overview from './overview/Overview';
import Squad from './squad/Squad';

const Dashboard = ( {year} ) => {
    const [section, setSection] = useState('overview')

    const coach = {
        "id": 999999,
        "name": "Ole Solskjaer",
        "nationality": "Norway",
    }

    const [teamPlayers, setTeamPlayers] = useState(null);

    useEffect(() => {
        const fetchTeamPlayers = async () => {
            try {
                const allPlayersData = await getPlayers();

                const salfordCityPlayers = allPlayersData.filter(player =>
                    player.teamHistory[0].team.name === "Salford City"
                );

                setTeamPlayers(salfordCityPlayers);
            } catch (error) {
                console.error('Error fetching players:', error);
            }
        };

        fetchTeamPlayers();
    }, []);

    let componentToRender;

    if (section === 'overview') {
        componentToRender = <Overview year={year} />;
    } else if (section === 'squad') {
        componentToRender = <Squad teamPlayers={teamPlayers} coach={coach} />;
    }

    return (
        <div className='dashboard'>
            <header>
                <Header section={section} setSection={setSection} />
            </header>
            <section>
                {componentToRender}
            </section>
        </div>
    )
}

export default Dashboard