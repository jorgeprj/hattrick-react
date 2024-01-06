import React, { useEffect, useState } from 'react'

import '../../profile/Profile.css';
import './Manager.css'

import { getManager } from '../../../services/managers/managersService';
import { Link, useParams } from 'react-router-dom';

import Loading from '../../../components/layout/loading/Loading';
import HeadImage from '../../../components/shared/headImage/HeadImage';
import CareerHistory from '../../../components/pages/profile/manager/careerHistory/CareerHistory';
import Footer from '../../../components/layout/footer/Footer';
import TacticalStyle from '../../../components/pages/profile/manager/tacticalStyle/TacticalStyle';
import BasicInfo from '../../../components/pages/profile/manager/basicInfo/BasicInfo';
import { FaRegPenToSquare } from 'react-icons/fa6';


const Manager = ({ year }) => {
    const { id } = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [manager, setManager] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const managerData = await getManager(id);
                setManager(managerData);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching manager:', error);
            }
        };

        fetchData();
    });

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className='profile'>
            <h1>
                {manager.name}
                <span>{manager.careerHistory[0].position}</span>
            </h1>
            <section className='content'>
                <section className='column-1'>
                    <section className='header'>
                        <div className='profile-head'>
                            <img className='head-flag' src={`../../src/assets/flags/${manager.nationality}.png`} alt={`Flag of ${manager.nationality}`} />
                            <HeadImage path={`../../src/assets/managers/heads/${manager.id}.png`} />
                        </div>
                        <div className='assistant-manager'>
                            <HeadImage path={`../../src/assets/managers/heads/${manager.assistantManager.id}.png`} />
                            <div className='manager-text'>
                                <Link to={`/manager/${manager.assistantManager.id}`}>
                                    <h5 className='link'>
                                        {manager.assistantManager.name}
                                        <img className='flag' src={`../../src/assets/flags/${manager.assistantManager.nationality}.png`} alt={`Flag of ${manager.nationality}`} />
                                    </h5>
                                </Link>
                                <h6>Assistant manager</h6>
                            </div>
                        </div>
                    </section>
                    <section className='profile-infos'>
                        <BasicInfo manager={manager} year={year}/>
                        <TacticalStyle manager={manager} />
                        <CareerHistory manager={manager} />
                    </section>
                </section>

                <section className='column-2'>
                    <section className='title'>
                        <div className='text'>
                            <h2>Detailed Sheet</h2>
                            <h4>|</h4>
                            <p>Discussion</p>
                        </div>
                        <Link to={`/hattrickdata/editmanager/${manager.id}`}>
                            <FaRegPenToSquare/>
                        </Link>
                    </section>
                    <section className='profile-content'>
                        <section>
                            <h3>Biography</h3>
                            <p>{manager.bio}</p>
                        </section>

                        {manager.titles.length > 0 && (
                            <section>
                                <h3>manager Titles</h3>
                                <div className='awards'>
                                    {manager.titles.map(title => (
                                        <p className='award' key={`${title.name} ${title.season}`}>
                                            <img className="team-image" src={`../src/assets/teams/${title.team}.png`} alt="Team logo" />
                                            {title.name}
                                            : {""}
                                            {title.season}
                                        </p>
                                    ))}
                                </div>
                            </section>
                        )}

                    </section>
                </section>

                <section className='column-3'>
                    {manager.favoritePlayers.length > 0 && (
                        <section className='favorite-players'>
                            <h4>Favorite Players</h4>

                            <div className='team-players'>
                                {manager.favoritePlayers
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
                    {manager.stats.length > 0 && manager.stats[0].season === year - 1 && (
                        <section className='profile-stats'>
                            <h4>Last Season Stats</h4>
                            <div className='stats'>
                                <p>Matches: <strong>{manager.stats[0].wins + manager.stats[0].losses + manager.stats[0].draws}</strong></p>
                                <p>Wins: <strong>{manager.stats[0].wins}</strong></p>
                                <p>Draws: <strong>{manager.stats[0].draws}</strong></p>
                                <p>Losses: <strong>{manager.stats[0].losses}</strong></p>
                                <p>Win rate: <strong>{(manager.stats[0].wins * 3 / ((manager.stats[0].wins + manager.stats[0].losses + manager.stats[0].draws) * 3) * 100).toFixed(1)} %</strong></p>
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

export default Manager