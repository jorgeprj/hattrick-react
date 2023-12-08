import './Dashboard.css';

import { useEffect, useState } from 'react';
import { getPlayers } from '../../services/players/playersService';

import Header from '../../components/dashboard/header/Header';
import Overview from './overview/Overview';
import Squad from './squad/Squad';
import { getCoach } from '../../services/coach/coachService';

const Dashboard = ( {year} ) => {
    const [section, setSection] = useState('overview')

    const [coach, setCoach] = useState(null);

    useEffect(() => {
        const fetchCoach = async () => {
            try {
                const coachData = await getCoach();

                setCoach(coachData);
            } catch (error) {
                console.error('Error fetching players:', error);
            }
        };

        fetchCoach();
    }, []);

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