import './Dashboard.css';

import { useEffect, useState } from 'react';
import { getPlayers } from '../../services/players/playersService';

import Header from '../../components/dashboard/header/Header';
import Overview from './overview/Overview';
import Squad from './squad/Squad';
import { getCoach } from '../../services/coach/coachService';
import TransferMarket from './transfersMarket/TransferMarket';
import { getTransfers } from '../../services/transfers/transfersService';
import Loading from '../../components/layout/loading/Loading';

const Dashboard = ({ year }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [section, setSection] = useState('overview')
    const [teamPlayers, setTeamPlayers] = useState(null);
    const [transfers, setTransfers] = useState(null);
    const [coach, setCoach] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const allPlayersData = await getPlayers();
                const salfordCityPlayers = allPlayersData.filter(player =>
                    player.teamHistory[0].team.name === "Salford City"
                );
                setTeamPlayers(salfordCityPlayers);

                const transfersData = await getTransfers();
                setTransfers(transfersData.reverse());

                const coachData = await getCoach();
                setCoach(coachData);
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

    let componentToRender;

    if (section === 'overview') {
        componentToRender = <Overview teamPlayers={teamPlayers} />;
    } else if (section === 'squad') {
        componentToRender = <Squad teamPlayers={teamPlayers} year={year} />;
    } else if (section === 'transfers') {
        componentToRender = <TransferMarket transfers={transfers} year={year} />;
    }

    return (
        <div className='dashboard'>
            <header>
                <Header section={section} setSection={setSection} coach={coach} />
            </header>
            <section>
                {componentToRender}
            </section>
        </div>
    )
}

export default Dashboard