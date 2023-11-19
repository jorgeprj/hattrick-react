import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PlayerCard from '../../components/playerCard/PlayerCard';
import Loading from '../../components/layout/loading/Loading';
import './Player.css'


const Player = ({ players, year }) => {
    const { id } = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [player, setPlayer] = useState(null);

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
            <section>
                <PlayerCard player={player} year={year} />
            </section>
        </div>
    );
}

export default Player;