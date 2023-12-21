import React, { useEffect, useState } from 'react'

import './Coach.css'

import { getCoach } from '../../services/coach/coachService';

import Footer from '../../components/layout/footer/Footer';
import Loading from '../../components/layout/loading/Loading';
import CareerHistory from '../../components/pages/coach/careerHistory/CareerHistory';
import PlayerHead from '../../components/shared/playerHead/PlayerHead';


const Coach = ({year}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [coach, setCoach] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const coachData = await getCoach();
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
        <div className='coach'>
            <h1>
                {coach.name}
            </h1>
            <section className='content'>
                <section className='column-1'>
                    <section className='header'>
                        <div className='coach-image'>
                            <img className='flag' src={`../../src/assets/flags/${coach.nationality}.png`} alt={`Flag of ${coach.nationality}`} />
                            <PlayerHead playerId={coach.id}/>
                        </div>
                    </section>
                    <section className='coach-infos'>
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
                    <section className='coach-content'>
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
                    <section className='column-3'>
                        {coach.stats.length > 0 && coach.stats[0].season === year - 1 && (
                            <section className='coach-stats'>
                                <h4>Last Season Stats</h4>
                                <div className='stats'>
                                    <p>Matches: <strong>{coach.stats[0].wins + coach.stats[0].losses + coach.stats[0].draws}</strong></p>
                                    <p>Wins: <strong>{coach.stats[0].wins}</strong></p>
                                    <p>Draws: <strong>{coach.stats[0].draws}</strong></p>
                                    <p>Losses: <strong>{coach.stats[0].losses}</strong></p>
                                    <p>Win rate: <strong>{(coach.stats[0].wins*3/((coach.stats[0].wins + coach.stats[0].losses + coach.stats[0].draws)*3)*100).toFixed(1)} %</strong></p>
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

            </section>
            <Footer />
        </div>
    )
}

export default Coach