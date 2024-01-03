import React, { useEffect, useState } from 'react'

import '../../components/shared/profile/Profile.css';
import './Coach.css'

import { getCoach } from '../../services/coach/coachService';
import { useParams } from 'react-router-dom';

import Footer from '../../components/layout/footer/Footer';
import Loading from '../../components/layout/loading/Loading';
import CareerHistory from '../../components/pages/coach/careerHistory/CareerHistory';
import HeadImage from '../../components/shared/headImage/HeadImage';


const Coach = ({ year }) => {
    const { id } = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [coach, setCoach] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const coachData = await getCoach(id);
                setCoach(coachData);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching coach:', error);
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
                {coach.name}
                <span>Manager</span>
            </h1>
            <section className='content'>
                <section className='column-1'>
                    <section className='header'>
                        <div className='profile-head'>
                            <img className='flag' src={`../../src/assets/flags/${coach.nationality}.png`} alt={`Flag of ${coach.nationality}`} />
                            <HeadImage path={`../../src/assets/coaches/heads/${coach.id}.png`} />
                        </div>
                    </section>
                    <section className='profile-infos'>
                        <section className='other-infos'>
                            <CareerHistory coach={coach} />
                        </section>
                    </section>
                </section>

                <section className='column-2'>
                    <div className='title'>
                        <h2>Detailed sheet</h2>
                        <h4>|</h4>
                        <p>Discussion</p>
                    </div>
                    <section className='profile-content'>
                        <section>
                            <h3>Biography</h3>
                            <p>{coach.bio}</p>
                        </section>

                        {coach.titles.length > 0 && (
                            <section>
                                <h3>Coach Titles</h3>
                                <div className='awards'>
                                    {coach.titles.map(title => (
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
                    {coach.stats.length > 0 && coach.stats[0].season === year - 1 && (
                        <section className='profile-stats'>
                            <h4>Last Season Stats</h4>
                            <div className='stats'>
                                <p>Matches: <strong>{coach.stats[0].wins + coach.stats[0].losses + coach.stats[0].draws}</strong></p>
                                <p>Wins: <strong>{coach.stats[0].wins}</strong></p>
                                <p>Draws: <strong>{coach.stats[0].draws}</strong></p>
                                <p>Losses: <strong>{coach.stats[0].losses}</strong></p>
                                <p>Win rate: <strong>{(coach.stats[0].wins * 3 / ((coach.stats[0].wins + coach.stats[0].losses + coach.stats[0].draws) * 3) * 100).toFixed(1)} %</strong></p>
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

export default Coach