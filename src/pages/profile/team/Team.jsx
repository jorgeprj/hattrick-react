import '../../profile/Profile.css';
import './Team.css'

import { useParams, Link } from 'react-router-dom';
import { getTeam } from '../../../services/teams/teamsService';
import { getPlayers } from '../../../services/players/playersService';

import Loading from '../../../components/layout/loading/Loading';
import BasicInfo from '../../../components/pages/profile/team/basicInfo/BasicInfo';
import KitsSection from '../../../components/pages/profile/team/kitsSection/KitsSection';
import HeadImage from '../../../components/shared/headImage/HeadImage';
import { useEffect, useState } from 'react';
import Footer from '../../../components/layout/footer/Footer';
import { getManagers } from '../../../services/managers/managersService';

const Team = ({ year }) => {
    const { id } = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [team, setTeam] = useState(null);
    const [teamPlayers, setTeamPlayers] = useState(null);
    const [manager, setManager] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const teamData = await getTeam(id);
                setTeam(teamData);

                const playersData = await getPlayers();
                const teamPlayers = playersData.filter(player =>
                    player.teamHistory[0].team.id == id
                );
                setTeamPlayers(teamPlayers);

                const managersData = await getManagers();
                const teamManager = managersData.find(manager =>
                    manager.careerHistory[0].team.id == id
                );
                setManager(teamManager);

                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id]);

    useEffect(() => {
        const fetchManager = async () => {
            try {
                const managersData = await getManagers();
                const teamManager = managersData.find(manager =>
                    manager.careerHistory[0].team.name == team.name
                );
                setManager(teamManager);
            } catch (error) {
                console.error('Error fetching manager:', error);
            }
        };

        fetchManager();
    }, [id]);


    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className='profile'>
            <h1>
                {team.name}
                <span>{((team.country).slice(0, 3)).toUpperCase()}</span>
            </h1>
            <section className='content'>
                <section className='column-1'>
                    <section className='header'>
                        <div className='profile-head'>
                            <HeadImage path={`../../src/assets/teams/${team.id}.png`} />
                            <img className='flag' src={`../../src/assets/flags/${team.country}.png`} alt={`Flag of ${team.country}`} />
                        </div>
                    </section>
                    {team.clubInfo &&
                        <section className='profile-infos'>
                            <BasicInfo team={team} />
                            {manager && (
                                <section>
                                    <h4>Staff</h4>
                                    <section className='staff'>
                                        <div className='staff-head'>
                                            <HeadImage path={`../../src/assets/managers/heads/${manager.id}.png`} />
                                            <div className='staff-head-text'>
                                                <Link to={`/manager/${manager.id}`}>
                                                    <h5 className='link'>
                                                        {manager.name}
                                                        <img className='flag' src={`../../src/assets/flags/${manager.nationality}.png`} alt={`Flag of ${manager.nationality}`} />
                                                    </h5>
                                                </Link>
                                                <h6>{manager.careerHistory[0].position} ({manager.careerHistory[0].season})</h6>
                                            </div>
                                        </div>

                                        <div className='staff-head'>
                                            <HeadImage path={`../../src/assets/managers/heads/${manager.assistantManager.id}.png`} />
                                            <div className='staff-head-text'>
                                                <Link to={`/manager/${manager.assistantManager.id}`}>
                                                    <h5 className='link'>
                                                        {manager.assistantManager.name}
                                                        <img className='flag' src={`../../src/assets/flags/${manager.assistantManager.nationality}.png`} alt={`Flag of ${manager.assistantManager.nationality}`} />
                                                    </h5>
                                                </Link>
                                                <h6>Assistant Manager ({manager.careerHistory[0].season})</h6>
                                            </div>
                                        </div>
                                    </section>
                                </section>
                            )}
                            <KitsSection team={team} />
                        </section>
                    }

                </section>

                <section className='column-2'>
                    <div className='title'>
                        <h2>Detailed sheet</h2>
                        <h4>|</h4>
                        <p>Discussion</p>
                    </div>
                    <section className='profile-content'>
                        {team.clubInfo && (
                            <section>
                                <h3>Biography</h3>
                                <div className='bio'>
                                    {team.clubInfo.wiki[0] && (
                                        team.clubInfo.wiki.map((wiki, index) => (
                                            <p key={index}>{wiki}</p>
                                        ))
                                    )}
                                </div>
                            </section>
                        )}
                    </section>
                </section>

                <section className='column-3'>
                    {teamPlayers.length > 0 && (
                        <section>
                            <div className='team-players-number'>
                                <h4>Team Players</h4>
                                <p>{teamPlayers.length}</p>
                            </div>

                            <div className='team-players'>
                                {teamPlayers
                                    .sort((a, b) => b.overall - a.overall)
                                    .map(player => (
                                        <div className='head' key={player.id}>
                                            <Link to={`/player/${player.id}`}>
                                                <HeadImage path={`../../src/assets/players/heads/${player.id}.png`} />
                                            </Link>
                                        </div>
                                    ))}
                            </div>
                        </section>
                    )}
                    <section>
                        <h4>Author</h4>
                        <div className='logo'>hattrick</div>
                    </section>
                    <section>
                        <h4>Sources</h4>
                        <div className='links'>
                            <a href="https://sofifa.com">https://sofifa.com</a>
                            <a href="https://www.wikipedia.org">https://www.wikipedia.org</a>
                            <a href="https://www.transfermarkt.com">https://www.transfermarkt.com</a>
                        </div>
                    </section>
                </section>
            </section>
            <Footer />
        </div>
    )
}

export default Team