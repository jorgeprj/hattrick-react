import React, { useEffect, useState } from 'react'
import './EditPlayer.css'
import { useParams, useNavigate } from 'react-router-dom';
import { editPlayer, getPlayer } from '../../../../services/players/playersService';
import Loading from '../../../../components/layout/loading/Loading';
import PlayerForm from './form/PlayerForm';
import Footer from '../../../../components/layout/footer/Footer';

const EditPlayer = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [player, setPlayer] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        overall: 0,
        potential: 0,
        position: '',
        skills: 0,
        weakFoot: 0,
        workRate: '',
        value: 0,
        wage: 0,
        contract: 0,
        overallStats: {
            pace: 0,
            shooting: 0,
            passing: 0,
            dribbling: 0,
            defending: 0,
            physicality: 0,
        },
    });

    const [status, setStatus] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const playerData = await getPlayer(id);
                setPlayer(playerData);
                setFormData({
                    name: playerData.name,
                    overall: playerData.overall,
                    potential: playerData.potential,
                    position: playerData.position,
                    skills: playerData.skills || 0,
                    weakFoot: playerData.weakFoot || 0,
                    workRate: playerData.workRate || '',
                    value: playerData.value || 0,
                    wage: playerData.wage || 0,
                    contract: playerData.contract || 0,
                    overallStats: {
                        pace: playerData.overallStats?.pace || 0,
                        shooting: playerData.overallStats?.shooting || 0,
                        passing: playerData.overallStats?.passing || 0,
                        dribbling: playerData.overallStats?.dribbling || 0,
                        defending: playerData.overallStats?.defending || 0,
                        physicality: playerData.overallStats?.physicality || 0,
                    },
                });
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching player:', error);
            }
        };

        fetchData();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const numericValue = !isNaN(value) ? parseFloat(value) : value;
        setFormData({ ...formData, [name]: numericValue });
    };

    const handleOverallStatsChange = (statName, statValue) => {
        const numericValue = parseInt(statValue, 10);
        setFormData({
            ...formData,
            overallStats: {
                ...formData.overallStats,
                [statName]: numericValue,
            },
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await editPlayer(id, formData);
            setStatus('yes');
        } catch (error) {
            console.error('Error updating player:', error);
            setStatus('no');
        } finally {
            setTimeout(() => {
                navigate("/hattrickdata");
                setStatus('');
            }, 500);
        }
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className='edit-player'>
            {status === 'yes' && <p className="success-message">Player updated successfully!</p>}
            {status === 'no' && <p className="error-message">Error updating player. Please try again.</p>}
            <section className='content'>
                <div className='header'>
                    <h1>Edit Player <span>#{player.id}</span></h1>
                    <p>
                        The "Edit Player" section provides users with the opportunity to correct any errors or
                        update information related to the player's data in the game. This valuable feature allows
                        players to make precise adjustments, ensuring that the details about their character are
                        always accurate and up-to-date. Whether fixing inaccuracies or incorporating important
                        changes, the "Edit Player" function offers flexibility to players, ensuring a personalized
                        and accurate gaming experience.
                    </p>
                    <PlayerForm
                        formData={formData}
                        handleInputChange={handleInputChange}
                        handleOverallStatsChange={handleOverallStatsChange}
                        handleSubmit={handleSubmit}
                    />

                </div>
            </section>
            <Footer />
        </div>
    )
}

export default EditPlayer