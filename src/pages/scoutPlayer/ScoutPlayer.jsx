import './ScoutPlayer.css'

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Loading from '../../components/layout/loading/Loading';
import SideCard from '../../components/player/sideCard/SideCard';
import Header from '../../components/player/header/Header';
import AnalysisCard from '../../components/player/textCard/analysisCard/AnalysisCard';
import TextCard from '../../components/player/textCard/TextCard';
import { getPlayers } from '../../services/players/playersService';


const ScoutPlayer = ({ year }) => {
    const { id } = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [player, setPlayer] = useState(null);

    const [scoutedPlayers, setScoutedPlayers] = useState(null);

    useEffect(() => {
        const fetchScoutedPlayers = async () => {
            try {
                const allPlayersData = await getPlayers();

                const scoutedPlayers = allPlayersData.filter(player =>
                    player.isScouted === true && player.teamHistory[0].team.name != "Salford City"
                );

                setScoutedPlayers(scoutedPlayers);
            } catch (error) {
                console.error('Error fetching players:', error);
            }
        };

        fetchScoutedPlayers();
    }, []);

    useEffect(() => {
        const delay = 1000;

        const timeoutId = setTimeout(() => {
            const foundPlayer = scoutedPlayers.find((p) => p.id === parseInt(id, 10));
            setPlayer(foundPlayer);
            setIsLoading(false);
        }, delay);

        return () => clearTimeout(timeoutId);
    }, [id, scoutedPlayers]);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className='scout-player'>
            <section className='side-section'>
                <SideCard player={player} year={year} />
            </section>
            <section className='main-section'>
                <Header player={player} year={year}/>
                <div className='row'>
                    <AnalysisCard player={player} year={year}/>
                    <TextCard title={"Biography"} text={player.bio}/>
                </div>
            </section>
        </div>
    );
}

export default ScoutPlayer;