import React, { useEffect, useState } from 'react'
import './PlayerStatsModal.css'
import '../Modal.css'

import { FaXmark } from 'react-icons/fa6';


const PlayerStatsModal = ({ stats, onClose }) => {
    const [modalOpen, setModalOpen] = useState(true);

    const handleClose = () => {
        setModalOpen(false);
        onClose();
        document.body.classList.remove('modal-open');
    };

    useEffect(() => {
        document.body.classList.add('modal-open');

        return () => {
            document.body.classList.remove('modal-open');
        };
    }, []);

    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className='header'>
                    <h2>Career Stats</h2>
                    <FaXmark onClick={handleClose} />
                </div>
                <table className="player-stats-table">
                    <thead>
                        <tr>
                            <th>Season</th>
                            <th>Matches</th>
                            <th>Goals</th>
                            <th>Assists</th>
                            <th>Without goals</th>
                            <th>Modifier</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stats.map((stat, index) => (
                            <tr key={index}>
                                <td>{stat.season}</td>
                                <td>{stat.matches}</td>
                                <td>{stat.goals}</td>
                                <td>{stat.assists}</td>
                                <td>{stat.matchesWithoutGoals}</td>
                                <td>{stat.modifier}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PlayerStatsModal