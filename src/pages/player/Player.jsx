import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Player.css'
import Loading from '../../components/layout/loading/Loading';

import PlayerSideCard from '../../components/playerLayout/playerSideCard/PlayerSideCard';
import PlayerHeader from '../../components/playerLayout/playerHeader/PlayerHeader';
import PlayerAnalysis from '../../components/playerLayout/playerTextCard/playerAnalysis/PlayerAnalysis';
import PlayerTextCard from '../../components/playerLayout/playerTextCard/PlayerTextCard';


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
            <section className='side-section'>
                <PlayerSideCard player={player} year={year} />
            </section>
            <section className='main-section'>
                <PlayerHeader player={player} year={year}/>
                <div className='row'>
                    <PlayerAnalysis player={player} year={year}/>
                    <PlayerTextCard title={"Biography"} text={player.bio}/>
                </div>
            </section>
        </div>
    );
}

export default Player;