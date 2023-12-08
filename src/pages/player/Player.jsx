import './Player.css'

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Loading from '../../components/layout/loading/Loading';
import SideCard from '../../components/player/sideCard/SideCard';
import Header from '../../components/player/header/Header';
import { getPlayers } from '../../services/players/playersService';
import StatsCard from '../../components/player/statsCard/StatsCard';
import AwardsCard from '../../components/player/awardsCard/AwardsCard';


const Player = ({ year }) => {
    const { id } = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [player, setPlayer] = useState(null);

    const [players, setPlayers] = useState(null);

    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const allPlayersData = await getPlayers();

                setPlayers(allPlayersData);
            } catch (error) {
                console.error('Error fetching players:', error);
            }
        };

        fetchPlayers();
    }, []);

    useEffect(() => {
        const delay = 1000;

        const timeoutId = setTimeout(() => {
            const foundPlayer = players.find((p) => p.id === parseInt(id, 10));
            setPlayer(foundPlayer);
            setIsLoading(false);
        }, delay);

        return () => clearTimeout(timeoutId);
    }, [id, players]);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className='player'>
            <section className='side-section'>
                <SideCard player={player} year={year} />
            </section>
            <section className='main-section'>
                <Header player={player} year={year} />
                <section className='row'>
                    {player.hasStats && player.stats[0].season === (year - 1) &&
                        <StatsCard player={player} year={year} />
                    }
                    {player.awards.length > 0 &&
                        <AwardsCard player={player} />
                    }
                </section>
            </section>
        </div>
    );
}

export default Player;