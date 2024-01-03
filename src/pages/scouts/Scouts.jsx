import React, { useEffect, useState } from 'react'
import './Scouts.css'
import { getPlayers } from '../../services/players/playersService';
import Loading from '../../components/layout/loading/Loading';
import ScoutPlayer from '../../components/pages/scouts/scoutPlayer/ScoutPlayer';
import Search from '../../components/layout/search/Search';
import { calculateHatScore } from '../../utils/hatScore';
import { FaArrowDownWideShort, FaArrowUpShortWide } from 'react-icons/fa6';
import Footer from '../../components/layout/footer/Footer';

const Scouts = ({ year }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [players, setPlayers] = useState(null);
    const [search, setSearch] = useState("");
    const [order, setOrder] = useState("desc");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const playersData = await getPlayers();
                setPlayers(playersData.filter(player => player.isScouted === true));
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching players:', error);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    const toggleOrder = () => {
        setOrder(order === "asc" ? "desc" : "asc");
    }

    return (
        <div className='scouts'>
            <section className='content'>
                <div className='header'>
                    <Search search={search} setSearch={setSearch} />
                    {order === 'desc' ? (
                        <FaArrowDownWideShort onClick={toggleOrder} />
                    ) : (
                        <FaArrowUpShortWide onClick={toggleOrder} />
                    )}

                </div>
                <div className='title'>
                    <h4>Total Players: {players.length}</h4>
                </div>
                <section className='scout-list'>
                    {players
                        .filter((player) =>
                            player.bio.toLowerCase().includes(search.toLowerCase()) ||
                            player.analysis.toLowerCase().includes(search.toLowerCase()) ||
                            player.nationality.toLowerCase().includes(search.toLowerCase()) ||
                            player.teamHistory.some(teamEntry =>
                                teamEntry.team.name.toLowerCase().includes(search.toLowerCase())
                            )
                        )
                        .sort((playerA, playerB) => {
                            const scoreA = calculateHatScore(playerA, year);
                            const scoreB = calculateHatScore(playerB, year);
                    
                            return order === 'asc' ? scoreA - scoreB : scoreB - scoreA;
                        })
                        .map(player => (
                            <ScoutPlayer player={player} year={year} key={player.id} />
                        ))}
                </section>
            </section>
            <Footer/>
        </div>
    )
}

export default Scouts