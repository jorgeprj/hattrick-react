import '../../profile/Profile.css';

import React, { useEffect, useState } from 'react'

import { getPlayer, getPlayers } from '../../../services/players/playersService';
import { useParams } from 'react-router-dom';
import Loading from '../../../components/layout/loading/Loading';
import Header from '../../../components/pages/profile/player/header/Header';
import BasicInfo from '../../../components/pages/profile/player/basicInfo/BasicInfo';
import NationalHistory from '../../../components/pages/profile/player/nationalHistory/NationalHistory';
import TeamHistory from '../../../components/pages/profile/player/teamHistory/TeamHistory';
import Chart from '../../../components/pages/profile/player/chart/Chart';
import PlayStyles from '../../../components/pages/profile/player/playStyles/PlayStyles';
import Footer from '../../../components/layout/footer/Footer';
import { FaAward, FaRankingStar, FaStar } from 'react-icons/fa6';
import TransferInfo from '../../../components/pages/profile/player/transferInfo/TransferInfo';
import { calculateHatScore } from '../../../utils/hatScore';

const Player = ({ year }) => {
    const { id } = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [player, setPlayer] = useState(null);
    const [bestPlayer, setBestPlayer] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const playerData = await getPlayer(id);
                setPlayer(playerData);

                const allPlayersData = await getPlayers();
                const playersData = allPlayersData.filter(player => player.isScouted === true);
                const maxHattrickScorePlayer = playersData.reduce((maxPlayer, currentPlayer) => {
                    const maxHattrickScore = calculateHatScore(maxPlayer, year);
                    const currentHattrickScore = calculateHatScore(currentPlayer, year);
                
                    return currentHattrickScore > maxHattrickScore ? currentPlayer : maxPlayer;
                }, playersData[0]);
                setBestPlayer(maxHattrickScorePlayer)

                setIsLoading(false);

            } catch (error) {
                console.error('Error fetching player:', error);
            }
        };

        fetchData();
    }, [id]);


    if (isLoading) {
        return <Loading />;
    }

    console.log(bestPlayer);

    return (
        <div className='profile'>
            <h1>
                {player.name}
                <span>{player.position}</span>
            </h1>
            <section className='content'>
                <section className='column-1'>
                    <Header player={player} year={year} />
                    <section className='profile-infos'>
                        <TransferInfo player={player} year={year} />
                        <BasicInfo player={player} year={year} />
                        {player.nationalTeam.length > 0 && <NationalHistory player={player} />}
                        <TeamHistory player={player} />
                    </section>
                </section>
                <section className='column-2'>
                    <section className='title'>
                        <h2>Detailed Sheet</h2>
                        <h4>|</h4>
                        <p>Discussion</p>
                    </section>
                    <section className='profile-content'>
                        <h3 className='noMargin'>Biography</h3>
                        <p>{player.bio}</p>
                        {player.isScouted && (
                            <section>
                                <h3>Analysis</h3>
                                <p>{player.analysis}</p>
                                <section className='scores'>
                                    <p></p>
                                </section>
                            </section>
                        )}
                        {player.awards.length > 0 && (
                            <section>
                                <h3>Player Awards</h3>
                                <div className='awards'>
                                    {player.awards.map((award) => (
                                        <p className='award' key={`${award.name} ${award.season}`}>
                                            <FaAward />
                                            {award.name}: {award.season}
                                        </p>
                                    ))}
                                </div>
                            </section>
                        )}
                    </section>
                </section>
                <section className='column-3'>
                    {player.isScouted && (
                        <section>
                            <h4 className='report'>Scout Report {bestPlayer.id == id && (<span className='ranking'><FaRankingStar/></span>)}</h4>
                            <p className={`status ${player.scoutStatus}`}>{player.scoutStatus}</p>
                        </section>
                    )}

                    <section>
                        <h4 className='noMargin'>Overview Stats</h4>
                        <Chart player={player} />
                    </section>

                    {player.playStyles.length > 0 && (
                        <section>
                            <PlayStyles player={player} />
                        </section>
                    )}
                    {player.stats.length > 0 && player.stats[0].season === year - 1 && (
                        <section className='player-stats'>
                            <h4>Last Season Stats</h4>
                            <div className='stats'>
                                <p>Matches: <strong>{player.stats[0].matches}</strong></p>
                                <p>Goals: <strong>{player.stats[0].goals}</strong></p>
                                <p>Assists: <strong>{player.stats[0].assists}</strong></p>
                                <p>Matches without goals: <strong>{player.stats[0].matchesWithoutGoals}</strong></p>
                                <p>Modifier: <strong>{player.stats[0].modifier}</strong></p>
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

export default Player