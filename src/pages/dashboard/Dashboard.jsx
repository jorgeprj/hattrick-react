import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import Footer from '../../components/layout/footer/Footer'
import HeadImage from '../../components/shared/headImage/HeadImage'
import { getTeam } from '../../services/teams/teamsService'
import Loading from '../../components/layout/loading/Loading'
import { getPlayers } from '../../services/players/playersService'
import { formatCurrency } from '../../utils/formatCurrency'

const Dashboard = ({ teamId, year }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [team, setTeam] = useState(null);
    const [teamPlayers, setTeamPlayers] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const teamData = await getTeam(teamId);
                setTeam(teamData);

                const playersData = await getPlayers();
                const teamPlayers = playersData.filter(player =>
                    player.teamHistory[0].team.id == teamId
                );
                setTeamPlayers(teamPlayers);

                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [teamId]);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className='dashboard'>
            <section className='content'>
                <header>
                        <div className='team-header'>
                            <HeadImage path={`../../src/assets/teams/${team.id}.png`} />
                            <div className='title'>
                                <h1>{team.name}</h1>
                                <p>
                                    <img className='flag' src={`../../src/assets/flags/${team.country}.png`} alt={`Flag of ${team.country}`} />
                                    {team.clubInfo.location}
                                </p>
                            </div>
                        </div>
                    <div className='league'>
                        <img className="league-img" src={`../../src/assets/leagues/4.png`} alt={`League 4`} />
                    </div>
                </header>
            </section>
            <Footer />
        </div>
    )
}

export default Dashboard